import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { createTableIfNotExists } from './create-table-action';
import { createRow } from './create-row-action';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export default async function contactAction(req: NextApiRequest, res: NextApiResponse) {
  const formData = req.body;
  const validation = schema.safeParse(formData);

  if (validation.success) {
    await createTableIfNotExists();
    await createRow(validation.data);
    res.status(201).json({ message: 'Thank you for contacting me!' });
  } else {
    res.status(400).json({ errors: validation.error.issues });
  }
}