import { useState } from "react"
import { PortfolioSection } from "./portfolio-section"
import { DigitalMarketingPortfolio } from "./digital-marketing-portfolio"
import { GraphicsDesignPortfolio } from "./graphics-design-portfolio"

type PortfolioView = 'main' | 'digital-marketing' | 'graphics-design'

export function PortfolioRouter() {
  const [currentView, setCurrentView] = useState<PortfolioView>('main')

  const showDigitalMarketing = () => {
    setCurrentView('digital-marketing')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const showGraphicsDesign = () => {
    setCurrentView('graphics-design')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const showMainPortfolio = () => {
    setCurrentView('main')
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio')
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  if (currentView === 'digital-marketing') {
    return <DigitalMarketingPortfolio onBack={showMainPortfolio} />
  }

  if (currentView === 'graphics-design') {
    return <GraphicsDesignPortfolio onBack={showMainPortfolio} />
  }

  return (
    <PortfolioSection 
      onDigitalMarketingClick={showDigitalMarketing}
      onGraphicsDesignClick={showGraphicsDesign}
    />
  )
}
