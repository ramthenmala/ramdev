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
import BlogNextPrev from '../../components/BlogNextPrev';
import { LikeButton } from '../../components/IconsPack';
import { DisplayTime, PublishedTime } from '../../components/DisplayTime';

const BlogDetails = ({ data }) => {
  const [likes, likesSet] = useState(data?.blogData?.likes);

  const addLike = async () => {
    const res = await fetch('/api/blog-likes', {
      method: 'POST',
      body: JSON.stringify({ _id: data.blogData._id }),
    }).catch((err) => console.log(err));

    const updateLike = await res.json();
    likesSet(updateLike.likes);
  };

  return (
    <Container
      title={`${data?.blogData?.title} – Ram kumar`}
      description={data?.blogData?.subtitle}
      type="article"
    >
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {data?.blogData?.title}
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

            <PublishedTime time={data?.blogData?.publishedate} />
          </p>
        </div>
        <DisplayTime time={data?.blogData?.estimatedReadingTime} />
      </div>

      <article className="prose dark:prose-dark py-10 w-full">
        <DataParser content={data?.blogData?.description} />
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

      {data?.blogNextAndPrev && (
        <div className="flex flex-col">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
            {data?.blogNextAndPrev?.previousPost !== null && (
              <BlogNextPrev
                cls=""
                text="Previous"
                slug={`/blog/${data?.blogNextAndPrev?.previousPost?.slug}`}
                passLink={data?.blogNextAndPrev?.previousPost?.title}
              />
            )}
            {data?.blogNextAndPrev?.nextPost !== null && (
              <BlogNextPrev
                cls="text-right"
                text="Next"
                slug={`/blog/${data?.blogNextAndPrev?.nextPost?.slug}`}
                passLink={data?.blogNextAndPrev?.nextPost?.title}
              />
            )}
          </div>
        </div>
      )}
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

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const blogData = await sanityClient.fetch(blogDetailsQuery, { slug });
  const blogNextAndPrev = await sanityClient.fetch(blogNextAndPrevQuery, {
    slug,
  });

  return {
    props: {
      data: { blogData, blogNextAndPrev },
    },
    revalidate: 10,
  };
};

export default BlogDetails;
