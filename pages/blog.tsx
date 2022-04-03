import Container from '../components/PageLayout/Container';
import { NextPage } from 'next';
import HeroSection from '../components/Hero';
import { getAllBlogs } from '../query/blog';
import BlogList from '../components/BlogList';
import FilteringMenu from '../components/FilteringMenu';
import { useGetBlogs } from '../actions';

const BlogPosts: NextPage = ({ post: initialData }) => {
  const { data: blogData, error } = useGetBlogs(initialData);
  console.log(blogData);
  if (blogData) {
    console.log(blogData);
  }
  return (
    <Container>
      <HeroSection
        title="Blog"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      {/* <FilteringMenu onChnage={handleClick} /> */}
      <section className="">
        {blogData?.length > 0
          ? blogData.map((blogPost) => (
              <BlogList
                key={blogPost._id}
                url={`/blog/${blogPost.slug.current}`}
                title={blogPost.title}
                publishedate={blogPost.publishedate}
                subtitle={blogPost.subtitle}
              />
            ))
          : 'Nothing to show'}
      </section>
    </Container>
  );
};

export async function getStaticProps() {
  const post = await getAllBlogs({ offset: 0 });
  return {
    props: {
      post,
    },
  };
}

export default BlogPosts;
