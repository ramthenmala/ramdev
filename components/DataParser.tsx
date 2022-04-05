import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/sanity';
import CardImage from './Card/CardImage';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
const serializers = {
  types: {
    code: ({ value: { language, filename, code } }) => {
      return (
        <SyntaxHighlighter language={language} style={vs}>
          {code}
          {filename}
        </SyntaxHighlighter>
      );
    },
    image: ({ value: { asset, alt, imagepos } }) => {
      return (
        <div>
          <div className="relative flex h-64">
            <CardImage alt={alt} imgUrl={urlFor(asset).url()} />
          </div>
          <div className="text-gray-500 dark:text-white">{alt}</div>
        </div>
      );
    },
  },
};
const DataParser = ({ content }) => {
  return <PortableText value={content} components={serializers} />;
};

export default DataParser;
