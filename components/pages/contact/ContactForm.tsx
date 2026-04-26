'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { contactSchema, type ContactFormValues } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'react-toastify'
import { sendContactEmail } from '@/app/actions/sendEmail'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [captchaNums, setCaptchaNums] = useState({ n1: 0, n2: 0 })

  useEffect(() => {
    // Generate numbers on client to avoid hydration mismatch
    const n1 = Math.floor(Math.random() * 10) + 1
    const n2 = Math.floor(Math.random() * 10) + 1
    setCaptchaNums({ n1, n2 })
    setValue('num1', n1)
    setValue('num2', n2)
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      budget: '',
      message: '',
      num1: 0,
      num2: 0,
      captchaAnswer: '',
    },
  })

  async function onSubmit(data: ContactFormValues) {
    try {
      // Call the Server Action
      const response = await sendContactEmail(data)

      if (response.success) {
        setIsSubmitted(true)
        toast.success(
          'Your message was sent! Nostalgic Studio will respond within 24 hours.',
        )
      } else {
        toast.error(response.error || 'Unable to send message.')
      }
    } catch {
      toast.error(
        'Unable to send message. Please try again or email info@nostalgic-studio.co.za',
      )
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-3">Thank You for Reaching Out!</h3>
        <p className="text-muted-foreground mb-6">
          Nostalgic Studio will review your project and respond within 24 hours.
          If you have urgent inquiries, email us at{' '}
          <strong>info@nostalgic-studio.co.za</strong>.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Project Request
        </Button>
      </div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-8 md:p-10 rounded-3xl bg-card border border-border"
      aria-label="Contact Nostalgic Studio form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name *
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register('name')}
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            {...register('email')}
            aria-required="true"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company Name
          </label>
          <Input
            id="company"
            placeholder="Your Company"
            {...register('company')}
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-2">
            Project Budget
          </label>
          <Select onValueChange={(value) => setValue('budget', value)}>
            <SelectTrigger id="budget">
              <SelectValue placeholder="Select a budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3k-5k">R3k - R5k</SelectItem>
              <SelectItem value="5k-10k">R5k - R10k</SelectItem>
              <SelectItem value="10k-20k">R10k - R20k</SelectItem>
              <SelectItem value="20k+">R20k+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Describe Your Project *
        </label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell us what you want to build..."
          {...register('message')}
          aria-required="true"
        />
      </div>
      
      <div className="bg-muted/30 p-4 rounded-xl border border-border">
        <label htmlFor="captchaAnswer" className="block text-sm font-medium mb-2">
          Security Check: What is {captchaNums.n1} + {captchaNums.n2}? *
        </label>
        <Input
          id="captchaAnswer"
          placeholder="Enter the result"
          {...register('captchaAnswer')}
          className="max-w-[200px]"
          aria-required="true"
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Enter the sum of the two numbers to verify you're human.
        </p>
      </div>

      <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Project Request
          </>
        )}
      </Button>

      <p className="mt-2 text-sm text-muted-foreground max-w-md text-center mx-auto">
        By submitting this form, you agree to have Nostalgic Studio contact you
        regarding your project.
      </p>
    </motion.form>
  )
}
