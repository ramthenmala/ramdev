import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from '../lib/sanity';
import CardImage from './Card/image';
import HighLightCode from './HighLightCode';

const serializers = {
  types: {
    code: ({ node: { language, filename, code } }) => (
      <HighLightCode language={language}>
        {code}
        <div className="code-filename">{filename}</div>
      </HighLightCode>
    ),
    image: ({ node: { asset, alt, imagepos } }) => {
      debugger;
      return (
        <div className="">
          <div className="relative flex h-64">
            <CardImage alt={alt} imgUrl={urlFor(asset).url()} />
          </div>
          <div className="text-gray-500 dark:text-white">{alt}</div>
        </div>
      );
    },
  },
};
const Blogpost = ({ content }) => {
  return <BlockContent blocks={content} serializers={serializers} />;
};

export default Blogpost;
