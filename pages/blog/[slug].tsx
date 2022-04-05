import { GetStaticProps, GetStaticPaths } from 'next';
import { useState } from 'react';
import { sanityClient } from '../../lib/server';
import {
  blogDetailsQuery,
  blogNextAndPrevQuery,
  blogSlug,
} from '../../query/blog';
import Container from '../../components/Container';
import DataParser from '../../components/DataParser';
import Image from 'next/image';
import moment from 'moment';
import BlogNextPrev from '../../components/BlogNextPrev';
import { toPlainText } from '@portabletext/react';
import readingTime from 'reading-time/lib/reading-time';
import { LikeButton } from '../../components/IconsPack';

const BlogDetails = ({ data }) => {
  const [likes, likesSet] = useState(data?.blogData?.likes);
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
  const readingDoc = toPlainText(blogData.description);
  const stats = readingTime(readingDoc);

  return (
    <Container>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {blogData?.title}
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
            {/* <time>{blogData.publishedate}</time> */}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
          {parseInt(stats.minutes)} Min
          {` • `}
          {/* 1235 */}
        </p>
      </div>
      <article className="prose dark:prose-dark py-10 w-full">
        <DataParser content={blogData.description} />
      </article>

      <button
        onClick={addLike}
        className="flex text-center w-full py-4 justify-center hover:text-red-700 transition-all delay-110"
      >
        <span className="text-2xl mr-2 self-center">{likes}</span>
        <span>
          <LikeButton />
        </span>
      </button>

      <div className="flex flex-col">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full ">
          {blogNextAndPrev?.previousPost !== null ? (
            <BlogNextPrev
              cls=""
              text="Previous"
              slug={`/blog/${blogNextAndPrev?.previousPost?.slug}`}
              passLink={blogNextAndPrev?.previousPost?.title}
            />
          ) : (
            ''
          )}
          {blogNextAndPrev?.nextPost !== null ? (
            <BlogNextPrev
              cls="text-right"
              text="Next"
              slug={`/blog/${blogNextAndPrev?.nextPost?.slug}`}
              passLink={blogNextAndPrev?.nextPost?.title}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(blogSlug);
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
  console.log(blogNextAndPrev);
  return {
    props: {
      data: { blogData, blogNextAndPrev },
    },
  };
};

export default BlogDetails;
