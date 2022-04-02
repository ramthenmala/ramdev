import CardList from '../components/Card/CardList';
import { urlFor } from '../lib/sanity';

import { groq } from 'next-sanity';
import { sanityClient } from '../lib/server';
import Container from '../components/PageLayout/Container';
import { NextPage } from 'next';
import HeroSection from '../components/HeroSection';

const blogQuery = groq`
  *[_type == "blogposts"] {
      _id,
    title,
    slug,
    image{
      asset->{
        _id,
        url
      }
    },
  }
`;

const BlogPosts: NextPage = ({ post }: any) => {
  return (
    <Container>
      <HeroSection
        title="Blog"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {post?.length > 0
            ? post.map((blogPost) => (
                <CardList
                  title={blogPost.title}
                  slug={`blog/${blogPost.slug.current}`}
                  imgUrl={urlFor(blogPost.image).url()}
                  key={blogPost._id}
                />
              ))
            : 'Nothing to show'}
        </div>
      </section>
    </Container>
  );
};

export async function getStaticProps() {
  const post = await sanityClient.fetch(blogQuery);
  return {
    props: {
      post,
    },
  };
}

export default BlogPosts;
