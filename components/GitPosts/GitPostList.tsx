import CardImage from 'components/ui/Image';
import Link from 'next/link';
import { urlFor } from '../../lib/sanity';

export type GitPosts = {
  id?: string | number;
  title?: string | string[];
  slug?: string;
  url?: string;
};

const GitPosts = ({ post }) => {
  return (
    <>
      <section className="mt-16 pb-16">
        <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Git Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {post?.length &&
            post.map((gitPosts) => (
              <div key={gitPosts._id}>
                <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                  <Link href={gitPosts.slug.current} passHref>
                    <a
                      className="relative h-64 flex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardImage
                        imgUrl={urlFor(gitPosts.image).url()}
                        alt="hi"
                      />
                    </a>
                  </Link>
                  <div className="p-5">
                    <Link href={gitPosts.slug.current} passHref>
                      <a
                        className="relative flex"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
                          {gitPosts.title}
                        </h5>
                      </a>
                    </Link>
                    <Link href={gitPosts.slug.current} passHref>
                      <a
                        className="relative flex"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h5 className="inline-flex items-center text-sm text-gray-500 underline hover:text-gray-900 hover:transition-all">
                          Read More
                        </h5>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default GitPosts;
