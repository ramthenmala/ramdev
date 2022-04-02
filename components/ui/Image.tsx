import Image from 'next/image';
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const CardImage = ({ alt, imgUrl }) => {
  const [isLoading, isLoadingSet] = useState<boolean>(true);
  return (
    <Image
      alt={alt}
      src={imgUrl}
      layout="fill"
      objectFit="cover"
      className={cn(
        'duration-700 ease-in-out group-hover:opacity-75',
        isLoading
          ? 'scale-110 blur-2xl grayscale rounded-t-lg'
          : 'scale-100 blur-0 grayscale-0 rounded-t-lg'
      )}
      onLoadingComplete={() => isLoadingSet(false)}
    />
  );
};

export default CardImage;
