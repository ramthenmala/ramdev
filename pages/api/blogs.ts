import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllBlogs } from '../../actions';

export default async function blogHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const offset = parseInt((req.query.offset || 0), 10)
    const date = req.query.date || 'desc'
    const data = await getAllBlogs({ offset, date })
    res.status(200).json(data);
}
