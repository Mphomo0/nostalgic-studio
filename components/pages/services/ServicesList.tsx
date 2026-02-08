'use client'

import ServiceSection from './ServiceSection'
import { Service } from './types'

interface Props {
  services: Service[]
}

const ServicesList = ({ services }: Props) => {
  return (
    <section
      className="section-padding bg-card"
      aria-label="Services offered by Nostalgic Studio"
    >
      <div className="container-wide mx-auto space-y-12 md:space-y-24">
        <h2 className="sr-only">Our Services</h2>

        {services.map((service, index) => (
          <article key={service.id}>
            <ServiceSection service={service} reverse={index % 2 === 1} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesList
