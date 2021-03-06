import Link from 'next/link';
import { CardProps } from '../../types/Card';
import CardImage from '../Card/ImageCard';

const GitCard = ({ title, slug, imgUrl }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
      <div className="p-5">
        <Link href={`${slug}`} passHref>
          <a
            target="_blank"
            className="relative flex"
            rel="noopener noreferrer"
          >
            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
        </Link>
        <Link href={`${slug}`} passHref>
          <a
            target="_blank"
            className="relative flex"
            rel="noopener noreferrer"
          >
            <h5 className="inline-flex items-center text-sm text-gray-500 underline hover:text-gray-900 hover:transition-all">
              Read More
            </h5>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default GitCard;
