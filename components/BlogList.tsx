import Link from 'next/link';
import React from 'react';
import { CalendarIcon, BookIcon } from './IconsPack';

const BlogList = ({ url, title, publishedate, subtitle, minRead }) => {
  return (
    <Link href={url}>
      <a className="w-full flex">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between">
            <div className="flex space-x-8">
              <span className="mb-4 text-left text-gray-500 text-sm flex items-center space-x-2">
                <CalendarIcon /> <span>{publishedate}</span>
              </span>
              <span className="mb-4 text-left text-gray-500 text-sm flex items-center space-x-2">
                <BookIcon /> <span>{minRead} Min Read</span>
              </span>
            </div>
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogList;
