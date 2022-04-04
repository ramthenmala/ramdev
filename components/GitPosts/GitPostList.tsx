import CardList from '../Card/CardList';
import { urlFor } from '../../lib/sanity';
import { GitResult } from '../../types/gitTypes';
import Link from 'next/link';

const GitPosts = ({ post }) => {
  return (
    <>
      <section className="pb-16">
        <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {post?.length &&
            post.map((gitPosts) => (
              <CardList
                title={gitPosts.title}
                slug={gitPosts.slug.current}
                imgUrl={urlFor(gitPosts.image).url()}
                key={gitPosts._id}
              />
            ))}
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
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

export default GitPosts;
