'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Loader2, Send } from 'lucide-react'
import { seoAuditSchema, type SeoAuditFormValues } from '@/lib/validations'
import { sendSeoAuditEmail } from '@/app/actions/sendEmail'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'react-toastify'
import dynamic from 'next/dynamic'

const ToastContainer = dynamic(
  () => import('react-toastify').then((m) => ({ default: m.ToastContainer })),
  { ssr: false },
)

const GOALS = [
  { value: 'more-leads', label: 'Get more leads / enquiries' },
  { value: 'rank-higher', label: 'Rank higher on Google' },
  { value: 'improve-website', label: 'Improve my website speed & design' },
  { value: 'launch-website', label: 'Launch a new website' },
  { value: 'beat-competitors', label: 'Beat my competitors online' },
  { value: 'not-sure', label: 'Not sure — please advise' },
]

export default function SeoAuditForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SeoAuditFormValues>({
    resolver: zodResolver(seoAuditSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      websiteUrl: '',
      businessGoal: '',
    },
  })

  async function onSubmit(data: SeoAuditFormValues) {
    try {
      const response = await sendSeoAuditEmail(data)
      if (response.success) {
        setIsSubmitted(true)
      } else {
        toast.error(response.error || 'Unable to send request. Please try again.')
      }
    } catch {
      toast.error(
        'Unable to send request. Please try again or email info@nostalgic-studio.co.za',
      )
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-3">Audit Request Received!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you! We&apos;ll analyse your website and send your free SEO audit report
          within <strong>5–7 business days</strong>.
        </p>
      </div>
    )
  }

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        aria-label="Free SEO audit request form"
        noValidate
      >
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1.5">
            Full Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="fullName"
            placeholder="Jane Smith"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email Address <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="jane@yourcompany.co.za"
            aria-required="true"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+27 64 680 6519"
            {...register('phone')}
          />
        </div>

        {/* Website URL */}
        <div>
          <label htmlFor="websiteUrl" className="block text-sm font-medium mb-1.5">
            Website URL <span className="text-destructive">*</span>
          </label>
          <Input
            id="websiteUrl"
            type="url"
            placeholder="https://yourwebsite.co.za"
            aria-required="true"
            aria-invalid={!!errors.websiteUrl}
            {...register('websiteUrl')}
          />
          {errors.websiteUrl && (
            <p className="mt-1 text-xs text-destructive">{errors.websiteUrl.message}</p>
          )}
        </div>

        {/* Business Goal */}
        <div>
          <label htmlFor="businessGoal" className="block text-sm font-medium mb-1.5">
            What is your main business goal?
          </label>
          <Select
            onValueChange={(value) =>
              setValue('businessGoal', value, { shouldValidate: true })
            }
          >
            <SelectTrigger id="businessGoal" aria-invalid={!!errors.businessGoal}>
              <SelectValue placeholder="Select a goal..." />
            </SelectTrigger>
            <SelectContent>
              {GOALS.map((goal) => (
                <SelectItem key={goal.value} value={goal.value}>
                  {goal.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.businessGoal && (
            <p className="mt-1 text-xs text-destructive">{errors.businessGoal.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full h-12 mt-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending your request...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send My Free Audit Request
            </>
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground pt-1">
          No spam. No obligation. We respect your privacy.
        </p>
      </form>
    </>
  )
}
