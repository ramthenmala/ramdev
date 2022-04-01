import GitPosts from 'components/GitPosts/GitPostList';
import HeroSection from 'components/hero/Hero';
import Container from 'components/pageLayout';
import { NextPage } from 'next';
import Head from 'next/head';
import { gitQuery } from 'query/gitHub';

import { sanityClient } from '../lib/server';

const Home: NextPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <HeroSection />

        <GitPosts post={post} />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const post = await sanityClient.fetch(gitQuery);
  return {
    props: {
      post,
    },
  };
}

export default Home;
