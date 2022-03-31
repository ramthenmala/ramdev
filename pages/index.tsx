import useSWR from 'swr';
import { groq } from 'next-sanity';
import { sanityClient } from '../lib/server';
import Head from 'next/head';
import { urlFor } from 'lib/sanity';
import Container from 'components/pageLayout';
import Image from 'next/image';
import { useState } from 'react';

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

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Home = ({ post }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {post?.length &&
            post.map((postlist) => (
              <div key={postlist._id}>
                <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                  <div className="">
                    <a href="#" className="relative h-64">
                      <Image
                        alt=""
                        src={urlFor(postlist.image).url()}
                        layout="fill"
                        objectFit="cover"
                        className={cn(
                          'duration-700 ease-in-out group-hover:opacity-75',
                          isLoading
                            ? 'scale-110 blur-2xl grayscale rounded-t-lg'
                            : 'scale-100 blur-0 grayscale-0 rounded-t-lg'
                        )}
                        onLoadingComplete={() => setLoading(false)}
                      />
                    </a>
                  </div>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {postlist.title}
                      </h5>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
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
