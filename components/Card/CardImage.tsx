import Image from 'next/image';
import { useState } from 'react';
import { CardProps } from '../../types/Card';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const CardImage = ({ alt, imgUrl }: CardProps) => {
  const [isLoading, isLoadingSet] = useState<boolean>(true);
  return (
    <Image
      alt={alt}
      src={imgUrl}
      layout="fill"
      objectFit="cover"
      priority={true}
      className={cn(
        'duration-700 ease-in-out group-hover:opacity-75',
        isLoading
          ? 'scale-110 blur-2xl grayscale '
          : 'scale-100 blur-0 grayscale-0 '
      )}
      onLoadingComplete={() => isLoadingSet(false)}
    />
  );
};

export default CardImage;
