import { groq } from 'next-sanity';
import { sanityClient } from '../lib/server';

export const aboutmeQuery = groq`
    *[_type == "aboutpage"]{
      _id,
        title,
        subtitle,
        publishedate,
        slug,
        image{
        asset->{
                _id,
                url
            }
        },
        description[]{..., 'asset': asset->},
    }
`;


export const getAboutMe = async () => {
    const post = await sanityClient.fetch(aboutmeQuery);
    return post;
};