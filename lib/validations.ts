import * as z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  num1: z.number(),
  num2: z.number(),
  captchaAnswer: z.string().min(1, 'Please answer the math question'),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export const seoAuditSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  phone: z.string().optional(),
  websiteUrl: z
    .string()
    .min(1, 'Website URL is required')
    .url('Please enter a valid URL (e.g. https://yourwebsite.co.za)'),
  businessGoal: z.string().min(1, 'Please select a business goal'),
})

export type SeoAuditFormValues = z.infer<typeof seoAuditSchema>
