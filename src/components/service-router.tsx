import { useState } from "react"
import { ServicesSection } from "./services-section"
import { ServiceDetail } from "./service-detail"

export function ServiceRouter() {
  const [currentView, setCurrentView] = useState<'list' | 'detail'>('list')
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null)

  const showServiceDetail = (serviceId: number) => {
    setSelectedServiceId(serviceId)
    setCurrentView('detail')
  }

  const showServicesList = () => {
    setCurrentView('list')
    setSelectedServiceId(null)
    // Scroll to services section when going back
    setTimeout(() => {
      const servicesSection = document.getElementById('services')
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  if (currentView === 'detail' && selectedServiceId) {
    return (
      <ServiceDetail 
        serviceId={selectedServiceId} 
        onBack={showServicesList}
      />
    )
  }

  return (
    <ServicesSection onServiceClick={showServiceDetail} />
  )
}