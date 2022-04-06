import { groq } from 'next-sanity';

export const gitQuery = groq`
  *[_type == "github"][0..5] {
      _id,
    title,
    slug,
    repolink,
    image{
      asset->{
        _id,
        url
      }
    }
  }
`;