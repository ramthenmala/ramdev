import BlockContent from '@sanity/block-content-to-react';

import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/sanity';
import CardImage from './Card/image';
import { HighLightCode } from './HighLightCode';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const serializers = {
  types: {
    code: ({ value: { language, filename, code } }) => {
      return (
        <SyntaxHighlighter language={language}>
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
  // return <BlockContent blocks={content} serializers={serializers} />;
  return <PortableText value={content} components={serializers} />;
};

export default DataParser;
