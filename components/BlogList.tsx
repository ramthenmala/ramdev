import Link from 'next/link';
import React from 'react';

const BlogList = ({ url, title, publishedate, subtitle }) => {
  return (
    <Link href={url}>
      <a className="w-full flex">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
            <span className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0 text-sm">
              {publishedate}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogList;
