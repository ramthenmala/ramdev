import { groq } from 'next-sanity';
import { sanityClient } from '../lib/server';

export const blogQuery = groq`
  *[_type == "blogposts"] | order(_createdAt desc) {
      _id,
    title,
    subtitle,
    publishedate,
    slug,
  }
`;

export const getAllBlogs = async ({ offset }) => {
  const post = await sanityClient.fetch(`${blogQuery}[${offset}...${offset + 2}]`);
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


