import GitPosts from 'components/GitPosts/GitPostList';
import Container from 'components/pageLayout';
import Head from 'next/head';

import { groq } from 'next-sanity';
import { sanityClient } from '../lib/server';

const gitQuery = groq`
  *[_type == "github"] {
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

const Home = ({ post }) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-12">
            <h1 className="text-6xl font-bold">Ram</h1>
            <h2>Front End Engineer</h2>
            <h3>
              Helping developers build a faster web. Teaching about web
              development, serverless, and React / Next.js.
            </h3>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto"></div>
        </div>

        <GitPosts post={post} />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const post = await sanityClient.fetch(gitQuery);
  console.log('posts', post);
  return {
    props: {
      post,
    },
  };
}

export default Home;
