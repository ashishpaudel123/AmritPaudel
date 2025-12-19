import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/header'
import { HeroSection } from './components/hero-section'
import { AboutSection } from './components/about-section'
import { ServiceRouter } from './components/service-router'
import { PortfolioSection } from './components/portfolio-section'
import { DigitalMarketingPortfolio } from './components/digital-marketing-portfolio'
import { GraphicsDesignPortfolio } from './components/graphics-design-portfolio'
import { TestimonialsSection } from './components/testimonials-section'
import { BlogRouter } from './components/blog-router'
import { ContactSection } from './components/contact-section'
import { Footer } from './components/footer'
import { ContactModalProvider, useContactModal } from './hooks/use-contact-modal'
import { ContactModal } from './components/contact-modal'
import { WhatsAppButton } from './components/whatsapp-button'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function HomePage() {
  const navigate = useNavigate()

  const handleDigitalMarketingClick = () => {
    navigate('/portfolio/digital-marketing')
    window.scrollTo(0, 0)
  }

  const handleGraphicsDesignClick = () => {
    navigate('/portfolio/graphics-design')
    window.scrollTo(0, 0)
  }

  return (
    <main className="pt-16">
      <HeroSection />
      <AboutSection />
      <ServiceRouter />
      <PortfolioSection 
        onDigitalMarketingClick={handleDigitalMarketingClick}
        onGraphicsDesignClick={handleGraphicsDesignClick}
      />
      <TestimonialsSection />
      <BlogRouter />
      <ContactSection />
    </main>
  )
}

function DigitalMarketingPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    navigate('/')
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio')
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <main className="pt-16">
      <DigitalMarketingPortfolio onBack={handleBack} />
    </main>
  )
}

function GraphicsDesignPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    navigate('/')
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio')
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <main className="pt-16">
      <GraphicsDesignPortfolio onBack={handleBack} />
    </main>
  )
}

function AppContent() {
  const { isOpen, title, closeModal } = useContactModal()

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/portfolio/graphics-design" element={<GraphicsDesignPage />} />
        </Routes>
        <Footer />
        <ContactModal isOpen={isOpen} onClose={closeModal} title={title} />
        <WhatsAppButton phoneNumber="9779865846429" message="Hi! I'm interested in your services." />
      </ThemeProvider>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ContactModalProvider>
        <AppContent />
      </ContactModalProvider>
    </BrowserRouter>
  )
}

export default App
