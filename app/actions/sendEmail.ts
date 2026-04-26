'use server'

import nodemailer from 'nodemailer'
import { headers } from 'next/headers'
import { ContactFormValues } from '@/lib/validations'
import { checkRateLimit } from '@/lib/rate-limit'
import { isGibberish, validateMathCaptcha } from '@/lib/bot-detection'

export async function sendContactEmail(data: ContactFormValues) {
  // 1. Rate Limiting
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for') || 'anonymous'
  const { success, reset } = checkRateLimit(ip)
  
  if (!success) {
    const minutesLeft = Math.ceil((reset - Date.now()) / (60 * 1000))
    return { 
      success: false, 
      error: `Too many requests. Please try again in ${minutesLeft} minutes.` 
    }
  }

  // 2. Math Captcha Verification
  if (!validateMathCaptcha(data.num1, data.num2, data.captchaAnswer)) {
    return { success: false, error: 'Incorrect security answer. Please try again.' }
  }

  // 3. Gibberish Detection
  if (isGibberish(data.message) || isGibberish(data.name)) {
    return { success: false, error: 'Your message was flagged as potential spam. Please ensure it is meaningful.' }
  }
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com or your hosting provider
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"${data.name}" <${process.env.EMAIL_USER}>`,
    to: 'info@nostalgic-studio.co.za', // Where you want to receive the leads
    replyTo: data.email,
    subject: `New Project Request from ${data.name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #333;">New Project Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Budget Range:</strong> ${data.budget || 'Not specified'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${data.message}</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Email Error:', error)
    throw new Error('Failed to send email')
  }
}
