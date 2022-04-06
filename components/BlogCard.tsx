import BlogList from './BlogList';
import { parseISO, format } from 'date-fns';

const BlogCard = ({ data, filter }) => {
  return data.map((pages) =>
    pages.map(
      (blogPost) =>
        filter.view.list === 0 && (
          <BlogList
            key={blogPost._id}
            url={`/blog/${blogPost.slug.current}`}
            title={blogPost.title}
            publishedate={format(
              parseISO(blogPost.publishedate),
              'MMMM dd, yyyy'
            )}
            minRead={blogPost.estimatedReadingTime}
            subtitle={blogPost.subtitle}
          />
        )
    )
  );
};

export default BlogCard;
