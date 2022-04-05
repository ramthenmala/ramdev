
import useSWR from 'swr';
import { sanityClient } from '../lib/server';
import { blogQuery } from '../query/blog';

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export const getAllBlogs = async ({ offset = 0, dates = 'desc' } = { offset: 0, dates: 'desc' }) => {
    const post = await sanityClient.fetch(`*[_type == "blogposts"] | order(publishedate ${dates}) {
      _id,
    title,
    subtitle,
    publishedate,
    featured,
    slug,
  } [${offset}...${offset + 2}]`);
    return post;
};

export const useGetBlogs = (initialData) => {
    return useSWR(`/api/blogs`, fetcher, {
        fallbackData: initialData
    })
}

export const useGetAbout = (initialData) => {
    return useSWR(`/api/about`, fetcher, {
        fallbackData: initialData
    })
}

export const getMyBlogs = (url) => fetcher(url)