import * as z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  num1: z.number(),
  num2: z.number(),
  captchaAnswer: z.string().min(1, 'Please answer the math question'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
