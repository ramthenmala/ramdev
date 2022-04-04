import { groq } from 'next-sanity';

export const gitQuery = groq`
 *[_type == "photogallery"] {
      _id,
    title,
    slug,
    image{
      asset->{
        _id,
        url
      }
    },
    gallery {
    display,
    images[
       asset->{
        _id,
        url
      }
    ]
    }
  }
`;