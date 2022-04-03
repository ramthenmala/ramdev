import { NextPage } from 'next';
import Head from 'next/head';
import { sanityClient } from '../lib/server';
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
        <section className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-12">
            <h1 className="text-6xl font-bold">Ram</h1>
            <h2>Front End Engineer</h2>
            <h3>
              Helping developers build a faster web. Teaching about web
              development, serverless, and React / Next.js.
            </h3>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto"></div>
        </section>

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
