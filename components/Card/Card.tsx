import React from 'react';

const Card = ({ title, date }) => {
  return (
    <div className="my-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>

      <p>{date}</p>
      <a
        href="#"
        className="inline-flex text-sm text-center focus:ring-4 focus:outline-none"
      >
        Read more
      </a>
    </div>
  );
};

export default Card;
