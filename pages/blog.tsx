import Container from '../components/Container';
import { GetStaticProps, NextPage } from 'next';
import HeroSection from '../components/Hero';
import { getAllBlogs } from '../query/blog';
import BlogList from '../components/BlogList';
import { useGetBlogs } from '../actions';
import moment from 'moment';
import BouncingLoader from '../components/BouncingLoader';

const BlogPosts: NextPage = ({ post: initialData }) => {
  const { data: blogData, error } = useGetBlogs(initialData);

  if (blogData) {
    console.log(blogData);
  }

  return (
    <Container>
      <HeroSection
        title="Blog"
        description={`In total, I've written ${blogData.length} articles on my blog.`}
      />
      <input
        aria-label="Search articles"
        type="text"
        placeholder="Search articles"
        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
      />

      <section className="py-10">
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          All Posts
        </h3>
        {blogData?.length ? (
          blogData.map((blogPost) => (
            <BlogList
              key={blogPost._id}
              url={`/blog/${blogPost.slug.current}`}
              title={blogPost.title}
              publishedate={moment(blogPost.publishedate).format('LL')}
              subtitle={blogPost.subtitle}
            />
          ))
        ) : (
          <BouncingLoader />
        )}
      </section>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const post = await getAllBlogs({ offset: 0 });
  return {
    props: {
      post,
    },
  };
};

export default BlogPosts;
