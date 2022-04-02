import { NextPage } from 'next';
import Head from 'next/head';

import { sanityClient } from '../lib/server';
import HeroSection from '../components/Hero/Hero';
import GitPosts from '../components/GitPosts/GitPostList';
import Container from '../components/PageLayout/Container';
import { gitQuery } from '../query/gitHub';

const Home: NextPage = ({ post }: any) => {
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
