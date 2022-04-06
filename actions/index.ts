
import useSWR from 'swr';
import { sanityClient } from '../lib/server';
import { blogQuery } from '../query/blog';

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export const getAllBlogs = async ({ offset = 0, dates = 'desc' } = { offset: 0, dates: 'desc' }) => {
  const post = await sanityClient.fetch(`*[_type == "blogposts"] | order(publishedate ${dates}) ${blogQuery} [${offset}...${offset + 6}]`);
  return post;
};

export const useGetAbout = (initialData) => {
  return useSWR(`/api/about`, fetcher, {
    fallbackData: initialData
  })
}

export const getMyBlogs = (url) => fetcher(url)