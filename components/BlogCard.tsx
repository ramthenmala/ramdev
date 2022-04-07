import BlogList from './BlogList';
import moment from 'moment';

const BlogCard = ({ data, filter }) => {
  return data.map((pages) =>
    pages.map(
      (blogPost) =>
        filter.view.list === 0 && (
          <BlogList
            key={blogPost._id}
            url={`/blog/${blogPost.slug.current}`}
            title={blogPost.title}
            publishedate={moment(blogPost?.publishedate).format('DD/MM/YYYY')}
            minRead={blogPost.estimatedReadingTime}
            subtitle={blogPost.subtitle}
          />
        )
    )
  );
};

export default BlogCard;
