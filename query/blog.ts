import { groq } from 'next-sanity';

export const blogQuery = `
  {
      _id,
    title,
    subtitle,
    publishedate,
    featured,
    slug,
    "estimatedReadingTime": round(length(pt::text(description)) / 5 / 180 )
  }
`;


export const blogDetailsQuery = groq`
  *[_type == "blogposts" && slug.current == $slug][0]{
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
    description[]{..., 'asset': asset->},
    likes,
    "estimatedReadingTime": round(length(pt::text(description)) / 5 / 180 )
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

export const blogSlug = groq`*[_type == "blogposts" && defined(slug.current)] {
      "params": {
          "slug": slug.current
      }
  }`