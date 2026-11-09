'use client'

import { useState } from 'react'
import { m } from 'motion/react'
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
import dynamic from 'next/dynamic'
import { sendContactEmail } from '@/app/actions/sendEmail'
import { trackLead } from '@/lib/tracking'
import TurnstileWidget from '@/components/ui/TurnstileWidget'

const ToastContainer = dynamic(
  () => import('react-toastify').then((m) => ({ default: m.ToastContainer })),
  { ssr: false },
)

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  // Bumped after a rejected submit so the single-use token is replaced.
  const [turnstileKey, setTurnstileKey] = useState(0)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: '',
      turnstileToken: '',
    },
  })

  function resetTurnstile() {
    setValue('turnstileToken', '')
    setTurnstileKey((k) => k + 1)
  }

  async function onSubmit(data: ContactFormValues) {
    try {
      // Call the Server Action
      const response = await sendContactEmail(data)

      if (response.success) {
        trackLead('Contact Form')
        setIsSubmitted(true)
        toast.success("Got it! We'll send your fixed quote within 24 hours.")
      } else {
        toast.error(response.error || 'Unable to send message.')
        resetTurnstile()
      }
    } catch {
      toast.error(
        'Unable to send message. Please try again or email info@nostalgic-studio.co.za',
      )
      resetTurnstile()
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-3">Got It — We&apos;re On It!</h3>
        <p className="text-muted-foreground mb-6">
          We&apos;ll review your project and send your fixed quote within 24
          hours. If you have urgent inquiries, email us at{' '}
          <strong>info@nostalgic-studio.co.za</strong>.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Project Request
        </Button>
      </div>
    )
  }

  return (
    <>
      <ToastContainer />
      <m.form
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
              autoComplete="name"
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
              autoComplete="email"
              spellCheck={false}
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
              autoComplete="organization"
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
                <SelectValue placeholder="Select a budget range…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3.5k-10k">R3.5k – R10k</SelectItem>
                <SelectItem value="10k-25k">R10k – R25k</SelectItem>
                <SelectItem value="25k-50k">R25k – R50k</SelectItem>
                <SelectItem value="50k+">R50k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2">
            What Do You Need Help With? *
          </label>
          <Select onValueChange={(value) => setValue('service', value)}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-website">I need a new website</SelectItem>
              <SelectItem value="website-refresh">
                I need to refresh my current website
              </SelectItem>
              <SelectItem value="seo">
                I need SEO / Google ranking help
              </SelectItem>
              <SelectItem value="gbp">
                I need Google Business Profile optimisation
              </SelectItem>
              <SelectItem value="branding">
                I need branding / logo design
              </SelectItem>
              <SelectItem value="social-media">
                I need social media marketing
              </SelectItem>
              <SelectItem value="not-sure">
                I am not sure — please advise
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Describe Your Project *
          </label>
          <Textarea
            id="message"
            rows={6}
            autoComplete="off"
            placeholder="Tell us what you want to build…"
            {...register('message')}
            aria-required="true"
          />
        </div>

        <div>
          <TurnstileWidget
            key={turnstileKey}
            onToken={(token) =>
              setValue('turnstileToken', token, { shouldValidate: !!token })
            }
          />
          {errors.turnstileToken && (
            <p className="mt-1 text-xs text-destructive" role="alert">
              {errors.turnstileToken.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Project Request
            </>
          )}
        </Button>

        <p className="mt-2 text-sm text-muted-foreground max-w-md text-center mx-auto">
          By submitting this form, you agree to have Nostalgic Studio contact
          you regarding your project.
        </p>
      </m.form>
    </>
  )
}
