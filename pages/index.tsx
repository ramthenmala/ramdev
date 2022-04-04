import { NextPage } from 'next';
import Head from 'next/head';
import { sanityClient } from '../lib/server';
import GitPosts from '../components/GitPosts/GitPostList';
import Container from '../components/Container';
import { gitQuery } from '../query/gitHub';

const Home: NextPage = ({ post }: any) => {
  return (
    <>
      <Container>
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <div className="flex flex-col space-y-4">
              <h1 className="text-6xl font-bold">Ram.</h1>
            </div>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Front end Full Stack Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              I work with the JavaScript ecosystem. Welcome to my small piece of
              the internet, where I write and share about different topics
              related to the tech industry and life style.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto"></div>
        </div>

        <GitPosts post={post} />

        <GitPosts post={post} />

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
