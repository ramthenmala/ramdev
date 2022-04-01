import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { groq } from 'next-sanity';
import { urlFor } from '../../lib/sanity';
import { sanityClient } from '../../lib/server';

export const blogDetailsQuery = groq`
  *[_type == "blogposts" && slug.current == $slug][0]{
      _id,
    title,
    slug,
    image{
      asset->{
        _id,
        url
      }
    },
    description
  }
`;

const BlogDetails = ({ data }) => {
  const { blogData } = data;
  return <h1>{blogData.title}</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "blogposts" && defined(slug.current)] {
           "params": {
               "slug": slug.current
           }
        }`
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const blogData = await sanityClient.fetch(blogDetailsQuery, { slug });
  console.log(blogData);
  return {
    props: {
      data: { blogData },
    },
  };
};

export default BlogDetails;
