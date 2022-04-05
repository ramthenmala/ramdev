import Container from '../components/Container';
import { GetStaticProps, NextPage } from 'next';
import HeroSection from '../components/Hero';
import { getAllBlogs } from '../actions';
import { parseISO, format } from 'date-fns';
import BouncingLoader from '../components/BouncingLoader';
import { useGetBlogPages } from '../actions/pagination';
import { useState } from 'react';
import BlogList from '../components/BlogList';

export const BlogListingTOShow = ({ data, filter }) => {
  return data.map((pages) =>
    pages.map((blogPost) =>
      filter.view.list === 0 ? (
        <BlogList
          key={blogPost._id}
          url={`/blog/${blogPost.slug.current}`}
          title={blogPost.title}
          publishedate={format(
            parseISO(blogPost.publishedate),
            'MMMM dd, yyyy'
          )}
          subtitle={blogPost.subtitle}
        />
      ) : (
        'Hell'
      )
    )
  );
};

const BlogPosts: NextPage = ({ post }) => {
  const [filter, filterSet] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });
  const totalBlogs = parseInt(post.length);
  const {
    data: blogData,
    size,
    setSize,
    isReachingEnd,
  } = useGetBlogPages({
    post,
    filter,
  });

  return (
    <Container>
      <HeroSection
        title="Blog"
        description={`In total, ${totalBlogs} posts I've written articles on my blog.`}
      />

      <section className="py-10">
        <div>
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            All Posts
          </h3>
        </div>
        {blogData?.length ? (
          <BlogListingTOShow data={blogData || [post]} filter={filter} />
        ) : (
          <BouncingLoader />
        )}

        <button
          onClick={() => setSize(size + 1)}
          disabled={isReachingEnd}
          className={`flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 w-full items-center text-gray-600 hover:bg-gray-100 transition-all uppercase text-sm tracking-wider font-semibold disabled:bg-slate-50 ${
            isReachingEnd ? 'text-slate-500 border-slate-200' : null
          }`}
        >
          Load More
        </button>
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
