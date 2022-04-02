import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { groq } from 'next-sanity';
import { useState } from 'react';
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
    description,
    likes
  }
`;

const BlogDetails = ({ data }) => {
  const [likes, likesSet] = useState(data?.blogData?.likes);
  console.log(likes);

  const addLike = async () => {
    const res = await fetch('/api/blog-likes', {
      method: 'POST',
      body: JSON.stringify({ _id: blogData._id }),
    }).catch((err) => console.log(err));

    const data = await res.json();
    likesSet(data.likes);
  };
  const { blogData } = data;
  return (
    <>
      <h1>{blogData.title}</h1>
      <button onClick={addLike}>{blogData.likes} :-)</button>
    </>
  );
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
  return {
    props: {
      data: { blogData },
    },
  };
};

export default BlogDetails;
