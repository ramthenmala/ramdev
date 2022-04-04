import { sanityClient } from '../../lib/server';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAboutMe } from '../../query/aboutme';

export default async function aboutHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = await getAboutMe()
    res.status(200).json(data);
}
