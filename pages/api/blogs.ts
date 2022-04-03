import { sanityClient } from '../../lib/server';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllBlogs } from '../../query/blog';

export default async function blogHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = await getAllBlogs({ offset: 0 })
    res.status(200).json(data);
}
