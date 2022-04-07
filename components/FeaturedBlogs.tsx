import { NextPage } from 'next';
import BlogList from './BlogList';
import { parseISO, format } from 'date-fns';
import Link from 'next/link';

const FeaturedBlogs: NextPage = ({ featuredPost }) => {
  return (
    <>
      <section className="py-10">
        <div className="flex items-center justify-between pb-5">
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            Blogs
          </h3>
        </div>

        <div className="flex flex-col">
          {featuredPost.map((post) => (
            <BlogList
              key={post._id}
              url={`/blog/${post.slug.current}`}
              title={post.title}
              publishedate={format(
                parseISO(post.publishedate),
                'MMMM dd, yyyy'
              )}
              minRead={post.estimatedReadingTime}
              subtitle={post.subtitle}
            />
          ))}
        </div>

        <Link href="https://github.com/ramthenmala?tab=repositories" passHref>
          <a
            target="_blank"
            className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </section>
    </>
  );
};

export default FeaturedBlogs;
