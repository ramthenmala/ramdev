import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { urlFor } from '../lib/sanity';
import { cn } from '../lib/utils';
import CardImage from './Card/CardImage';
import { getImageDimensions } from '@sanity/asset-utils';

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
      const [isLoading, isLoadingSet] = useState<boolean>(true);
      return (
        <>
          <div className="relative block ">
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
          </div>
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
