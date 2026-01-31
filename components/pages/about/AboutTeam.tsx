'use client'

import MotionWrapper from '@/components/layout/MotionWrapper'

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Jordan Lee',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  },
  {
    name: 'Sam Chen',
    role: 'UX Strategist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  },
  {
    name: 'Taylor Kim',
    role: 'Brand Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
]

export default function AboutTeam() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <MotionWrapper>
            <span className="text-primary text-sm uppercase block mb-4">
              Our Team
            </span>
            <h2 className="text-4xl font-bold">Meet the Creatives</h2>
          </MotionWrapper>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <MotionWrapper key={member.name} delay={i * 0.1}>
              <div className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
