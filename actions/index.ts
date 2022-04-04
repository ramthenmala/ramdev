
import useSWR from 'swr';

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

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