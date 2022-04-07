import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { urlFor } from '../lib/sanity';
import { cn } from '../lib/utils';
import { getImageDimensions } from '@sanity/asset-utils';

export const CustomImage = ({ asset, alt, isInline, width, height }) => {
  const [isLoading, isLoadingSet] = useState(true);
  return (
    <Image
      alt={alt}
      src={urlFor(asset).url()}
      priority={true}
      width={width}
      height={height}
      quality={100}
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

const components = {
  types: {
    code: ({ value: { language, filename, code } }) => {
      return (
        <SyntaxHighlighter language={language} style={vs}>
          {code}
          {filename}
        </SyntaxHighlighter>
      );
    },
    image: ({ value: { asset, alt, isInline } }) => {
      const { width, height } = getImageDimensions(asset);
      return (
        <>
          <CustomImage
            asset={asset}
            alt={alt}
            isInline={isInline}
            width={width}
            height={height}
          />
          <div className="relative block "></div>
          <div className="text-gray-500 dark:text-white">{alt}</div>
        </>
      );
    },
  },
};

const DataParser = ({ content }) => {
  return <PortableText value={content} components={components} />;
};

export default DataParser;
