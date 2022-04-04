import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { sanityClient } from '../../lib/server';
import { blogDetailsQuery, blogNextAndPrevQuery } from '../../query/blog';

import Container from '../../components/Container';
import DataParser from '../../components/DataParser';
import Image from 'next/image';
import moment from 'moment';
import BlogNextPrev from '../../components/BlogNextPrev';

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
  const { blogNextAndPrev } = data;

  return (
    <Container>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {blogData.title}
      </h1>
      <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            alt="Ram Kumar"
            height={40}
            width={40}
            src="/images/ram.jpg"
            className="rounded-full"
          />
          <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            {'Ram Kumar / '}
            <time>{moment(blogData.publishedate).format('LL')}</time>
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
          11 Min
          {` • `}
          1235
        </p>
      </div>
      <article className="prose dark:prose-dark mt-4">
        <DataParser content={blogData.description} />
        <button onClick={addLike}>{likes} :-)</button>

        <div className="flex flex-col w-full">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
            {blogNextAndPrev?.previousPost?.title !== null ? (
              <BlogNextPrev
                slug={`/blog/${blogNextAndPrev.previousPost.slug}`}
                passLink={blogNextAndPrev.previousPost.title}
              />
            ) : (
              ''
            )}
            {blogNextAndPrev?.nextPost?.title !== null ? (
              <BlogNextPrev
                slug={`/blog/${blogNextAndPrev.nextPost.slug}`}
                passLink={blogNextAndPrev.nextPost.title}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </article>
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
  const blogNextAndPrev = await sanityClient.fetch(blogNextAndPrevQuery, {
    slug,
  });
  return {
    props: {
      data: { blogData, blogNextAndPrev },
    },
  };
};

export default BlogDetails;
