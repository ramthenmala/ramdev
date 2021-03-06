import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../lib/server'

sanityClient.config({
  token: process.env.SANITY_WRITE_POST_LIKE_TOKEN
})

export default async function likeButtonHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id } = JSON.parse(req.body);
  const data = await sanityClient
    .patch(_id)
    .setIfMissing({ likes: 0 })
    .inc({ likes: 1 })
    .commit()
    .catch((error: any) => console.log(error));

  res.status(200).json({ likes: data.likes });
}
