import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const apiEndpoint = `${process.env.API_URL}/${req.url?.replace('/api', '')}`;
  const apiKey = String(process.env.API_KEY);

  const result = await fetch(apiEndpoint, {
    method: req.method,
    headers: {
      'admix-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });

  return res.status(200).json(await result.json());
};

export default handler;
