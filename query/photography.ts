import { groq } from 'next-sanity';
import { sanityClient } from '../lib/server';

export const photoGalQuery = groq`
  *[_type == "photogallery"] {
      _id,
    title,
    slug,
   publishedate,
    image{
      asset->{
        _id,
        url
      }
    },
    gallery {
        images
    }
  }
`;

export const getPhotoGal = async ({ offset }) => {
  const post = await sanityClient.fetch(`${photoGalQuery}[${offset}...${offset + 10}]`);
  return post;
};