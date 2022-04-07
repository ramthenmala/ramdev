import CardImage from './ImageCard';
import Link from 'next/link';
import { CardProps } from '../../types/Card';

const Card = ({ title, slug, imgUrl }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
      <Link href={`/${slug}`} passHref>
        <a className="relative h-64 flex" rel="noopener noreferrer">
          <CardImage imgUrl={imgUrl} alt={title} />
        </a>
      </Link>
      <div className="p-5">
        <Link href={`/${slug}`} passHref>
          <a className="relative flex" rel="noopener noreferrer">
            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 ">
              {title}
            </h5>
          </a>
        </Link>
        <Link href={`/${slug}`} passHref>
          <a className="relative flex" rel="noopener noreferrer">
            <h5 className="inline-flex items-center text-sm text-gray-500 underline hover:text-gray-900 hover:transition-all">
              Read More
            </h5>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
