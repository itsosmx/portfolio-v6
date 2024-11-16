import { z } from 'zod';


export const ZContact = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  message: z.string().min(5),
})


export type IContact = z.infer<typeof ZContact>;