import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllBlogs } from '../../actions';

export default async function blogHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const offset = parseInt((req.query.offset || 0), 10)
    const dates = req.query.date || 'asc'
    const data = await getAllBlogs({ offset, dates })
    res.status(200).json(data);
}
