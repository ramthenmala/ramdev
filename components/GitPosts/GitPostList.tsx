import CardList from '../Card/CardList';
import { urlFor } from '../../lib/sanity';

const GitPosts = ({ post }) => {
  return (
    <>
      <section className="pb-16">
        <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Git Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {post?.length &&
            post.map((gitPosts) => (
              <CardList
                title={gitPosts.title}
                slug={gitPosts.slug.current}
                imgUrl={urlFor(gitPosts.image).url()}
                key={gitPosts._id}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default GitPosts;
