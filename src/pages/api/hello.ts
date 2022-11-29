// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string
  url: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([{
    url:'https://vercel.com',
    title:'Blog'
  },{
    url:'https://vercel.com',
    title:'PrivateService'
  }])
}
