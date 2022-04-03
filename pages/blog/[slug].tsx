import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { sanityClient } from '../../lib/server';
import { blogDetailsQuery } from '../../query/blog';

import Container from '../../components/PageLayout/Container';
import Blogpost from '../../components/Blogpost';

const BlogDetails = ({ data }) => {
  const [likes, likesSet] = useState(data?.blogData?.likes);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
    <Container>
      <h1>{blogData.title}</h1>
      <Blogpost content={blogData.description} />
      <button onClick={addLike}>{blogData.likes} :-)</button>
    </Container>
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
  console.log(blogData);
  return {
    props: {
      data: { blogData },
    },
  };
};

export default BlogDetails;
