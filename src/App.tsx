import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/header'
import { HeroSection } from './components/hero-section'
import { AboutSection } from './components/about-section'
import { ServiceRouter } from './components/service-router'
import { PortfolioSection } from './components/portfolio-section'
import { TestimonialsSection } from './components/testimonials-section'
import { BlogRouter } from './components/blog-router'
import { ContactSection } from './components/contact-section'
import { Footer } from './components/footer'
import { ContactModalProvider, useContactModal } from './hooks/use-contact-modal'
import { ContactModal } from './components/contact-modal'

function AppContent() {
  const { isOpen, title, closeModal } = useContactModal()

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <ServiceRouter />
          <PortfolioSection />
          <TestimonialsSection />
          <BlogRouter />
          <ContactSection />
        </main>
        <Footer />
        <ContactModal isOpen={isOpen} onClose={closeModal} title={title} />
      </ThemeProvider>
    </>
  )
}

function App() {
  return (
    <ContactModalProvider>
      <AppContent />
    </ContactModalProvider>
  )
}

export default App
