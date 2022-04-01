import { groq } from 'next-sanity';

export const gitQuery = groq`
  *[_type == "github"] {
      _id,
    title,
    slug,
    image{
      asset->{
        _id,
        url
      }
    },
    description
  }
`;