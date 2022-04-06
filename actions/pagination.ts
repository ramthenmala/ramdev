import useSWRInfinite from 'swr/infinite';
import { getMyBlogs } from '.';

export const useGetBlogPages = ({ blogs, filter }) => {
  const PAGE_SIZE = 6;
  const result = useSWRInfinite(
    (index, previousPageData) => {
      if (index === 0) {
        return `/api/blogs?date=${filter.date.asc ? 'asc' : 'desc'}`;
      }

      if (previousPageData && !previousPageData.length) {
        return null;
      }
      return `/api/blogs?offset=${index * PAGE_SIZE}&date=${filter.date.asc ? 'asc' : 'desc'
        }`;
    },
    getMyBlogs,
    { persistSize: true }
  );

  const { data } = result;
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  return { ...result, isReachingEnd };
};
