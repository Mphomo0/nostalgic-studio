'use client'

import Image from 'next/image'
import Link from 'next/link'
import MotionWrapper from '@/components/layout/MotionWrapper'

export default function AboutTeam() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <MotionWrapper>
            <span className="text-primary text-sm uppercase block mb-4">
              Meet the Founder
            </span>
            <h2 className="text-4xl font-bold">The Person Behind the Studio</h2>
          </MotionWrapper>
        </div>

        <MotionWrapper>
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start gap-8">
            <div className="shrink-0">
              <Image
                src="/images/team/mpho-moipolai.webp"
                alt="Mpho Moipolai — Founder and Creative Director of Nostalgic Studio"
                width={240}
                height={240}
                className="rounded-2xl object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Mpho Moipolai</h3>
              <p className="text-primary text-sm font-medium mb-3">
                Founder &amp; Creative Director
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground mb-4">
                <span>13+ years experience</span>
                <span>·</span>
                <span>70+ projects delivered</span>
                <span>·</span>
                <span>Next.js specialist</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Mpho founded Nostalgic Studio in 2016 with one mission: give South African
                startups access to the same quality of digital work that large corporates take
                for granted. He specialises in Next.js, React, UI/UX design, and brand
                identity — and has delivered 70+ websites and brand systems for businesses
                across Johannesburg, Gauteng, and beyond.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/private/moipolai-mpho-110356396/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  LinkedIn ↗
                </Link>
                <Link
                  href="https://www.instagram.com/studionostalgic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Instagram ↗
                </Link>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
