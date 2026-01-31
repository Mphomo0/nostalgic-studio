'use client'

import { useState } from 'react'
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

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    },
  })

  async function onSubmit(data: ContactFormValues) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log(data)
      setIsSubmitted(true)
      toast.success('Message sent successfully!')
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          We&apos;ll get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
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
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Your Name *</label>
          <Input placeholder="John Doe" {...register('name')} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            placeholder="john@company.com"
            {...register('email')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Company Name</label>
          <Input placeholder="Your Company" {...register('company')} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Project Budget
          </label>
          <Select onValueChange={(value) => setValue('budget', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5k-10k">$5k - $10k</SelectItem>
              <SelectItem value="10k-25k">$10k - $25k</SelectItem>
              <SelectItem value="25k+">$25k+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Tell Us About Your Project *
        </label>
        <Textarea
          rows={6}
          placeholder="Describe your project..."
          {...register('message')}
        />
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
            Send Message
          </>
        )}
      </Button>
    </motion.form>
  )
}
