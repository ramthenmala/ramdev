import Link from 'next/link';

const BlogNextPrev = ({ passLink, slug, text, cls }) => {
  return (
    <Link href={slug} passHref>
      <a
        className={`flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full mb-10 ${cls}`}
      >
        <span className="flex flex-col text-xl mb-2 font-bold">{text}</span>
        <span className="flex flex-col underline text-gray-700 dark:text-gray-300">
          {passLink}
        </span>
      </a>
    </Link>
  );
};

export default BlogNextPrev;
