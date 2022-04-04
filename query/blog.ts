import { groq } from 'next-sanity';
import { sanityClient } from '../lib/server';

export const blogQuery = groq`
  *[_type == "blogposts"] | order(_createdAt desc) {
      _id,
    title,
    subtitle,
    publishedate,
    featured,
    slug,
  }
`;

export const getAllBlogs = async ({ offset }) => {
  const post = await sanityClient.fetch(`${blogQuery}[${offset}...${offset + 10}]`);
  return post;
};

export const blogDetailsQuery = groq`
  *[_type == "blogposts" && slug.current == $slug][0]{
      _id,
    title,
    slug,
    image{
      asset->{
        _id,
        url
      }
    },
    description[]{..., 'asset': asset->},
    likes,
  }
`;

export const blogNextAndPrevQuery = groq`
  *[_type == "blogposts" && slug.current == $slug]{
    "currentPost": {
      title
    },
    "previousPost": *[_type == "blogposts" && ^.publishedate > publishedate]|order(publishedate desc)[0]{title,"slug": slug.current},
    "nextPost": *[_type == "blogposts" && ^.publishedate < publishedate]|order(publishedate asc)[0]{title,"slug": slug.current},
  }|order(publishedAt)[0]
`
