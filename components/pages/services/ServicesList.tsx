'use client'

import ServiceSection from './ServiceSection'
import { Service } from './types'

interface Props {
  services: Service[]
}

const ServicesList = ({ services }: Props) => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide mx-auto space-y-12 md:space-y-24">
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesList
