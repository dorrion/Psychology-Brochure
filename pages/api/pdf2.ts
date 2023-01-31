import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const file1 = fs.readFileSync('public/pdf/연세대(일).pdf');
    const file2 = fs.readFileSync('public/pdf/연세대(교).pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="sample.pdf"');
    return res.status(200).send(file1);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
