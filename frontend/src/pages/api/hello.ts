// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface IData {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
): void {
  const statusCode = 200;
  const message = 'Test';
  res.status(statusCode).json({ name: message });
}
