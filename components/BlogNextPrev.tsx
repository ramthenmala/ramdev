import Link from 'next/link';

const BlogNextPrev = ({ passLink, slug }) => {
  return (
    <Link href={slug} passHref>
      <a className="flex flex-col text-gray-700 no-underline bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full text-xl">
        {passLink}
      </a>
    </Link>
  );
};

export default BlogNextPrev;
