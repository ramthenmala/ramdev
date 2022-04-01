import CardList from 'components/Card/CardList';
import { urlFor } from '../lib/sanity';

import { groq } from 'next-sanity';
import { sanityClient } from '../lib/server';
import Container from 'components/PageLayout';
import { NextPage } from 'next';

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
    description
  }
`;

const BlogPosts: NextPage = ({ post }) => {
  return (
    <Container>
      <section className="mt-16 pb-16">
        <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Git Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {post?.length > 0
            ? post.map((blogPost) => (
                <CardList
                  title={blogPost.title}
                  slug={blogPost.slug.current}
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
  console.log('posts', post);
  return {
    props: {
      post,
    },
  };
}

export default BlogPosts;
