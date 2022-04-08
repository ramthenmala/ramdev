import Container from '../components/Container';
import { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import HeroSection from '../components/Hero';
import { getAllBlogs } from '../actions';
import { useGetBlogPages } from '../actions/pagination';
import { NoMorePosts, ShowMorePosts } from '../components/Helpers';
import FilteringMenu from '../components/FilteringMenu';
import BlogCard from '../components/BlogCard';
import NoData from '../components/NoData';
import { NextSeo } from 'next-seo';

const BlogPosts: NextPage = ({ post }) => {
  const [filter, filterSet] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const {
    data: blogData,
    isValidating,
    size,
    setSize,
    isReachingEnd,
  } = useGetBlogPages({
    post,
    filter,
  });

  return (
    <Container>
      <NextSeo title="Blog" />
      <HeroSection title="Blog" />

      <section className="py-10">
        <div className="flex items-center justify-between pb-5">
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            All Posts
          </h3>

          <FilteringMenu
            onChange={(option, value) =>
              filterSet({ ...filter, [option]: value })
            }
            filter={filter}
          />
        </div>

        {blogData?.length ? (
          <BlogCard data={blogData || [post]} filter={filter} />
        ) : (
          <NoData />
        )}

        {blogData && (
          <button
            onClick={() => setSize(size + 1)}
            disabled={isReachingEnd}
            className="flex place-content-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 w-full items-center text-gray-600 hover:bg-gray-100 transition-all uppercase text-sm tracking-wider font-semibold disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200"
          >
            {isReachingEnd ? <NoMorePosts /> : <ShowMorePosts />}
          </button>
        )}
      </section>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const post = await getAllBlogs({ offset: 0, dates: 'desc' });

  return {
    props: {
      post,
    },
  };
};

export default BlogPosts;
