import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface AuthorBioProps {
  name?: string
  title?: string
  photoUrl?: string
  bio?: string
  profileUrl?: string
}

export default function AuthorBio({
  name = 'Mpho Moipolai',
  title = 'Creative Director & Lead Developer',
  photoUrl = '/images/team/mpho-moipolai.webp',
  bio = 'Mpho Moipolai is the founder and Creative Director of Nostalgic Studio, a Johannesburg-based digital design agency. With 13+ years of experience in web development and UI/UX design, he has delivered 70+ websites and brand identities for businesses across South Africa. He specialises in Next.js, React, and modern web architecture.',
  profileUrl = '/about',
}: AuthorBioProps) {
  return (
    <aside
      data-geo-author
      aria-label={`About the author: ${name}`}
      className="my-10 rounded-xl border border-border bg-muted/30 px-6 py-5"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Written by
      </p>
      <div className="flex items-start gap-4">
        <Image
          src={photoUrl}
          alt={`${name} — author photo`}
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">
            <Link href={profileUrl} className="hover:underline">
              {name}
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {bio}
          </p>
        </div>
      </div>
    </aside>
  )
}
