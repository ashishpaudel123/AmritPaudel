import { useState } from "react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { useContactModal } from "../hooks/use-contact-modal"

export function ContactSection() {
  const { openModal } = useContactModal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: '',
    timeline: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        service: '',
        message: '',
        timeline: ''
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Me",
      details: "Amrit@digitalmarketer.com",
      description: "Send me an email anytime",
      action: "mailto:Amrit@digitalmarketer.com"
    },
    {
      icon: Phone,
      title: "Call Me",
      details: "+977 9865846429",
      description: "Mon-Fri from 9am to 6pm PST",
      action: "tel:+15551234567"
    },
    {
      icon: Calendar,
      title: "Schedule a Meeting",
      details: "Book a free consultation",
      description: "30-minute strategy session",
      action: "#"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kathmandu, Nepal",
      description: "Available for remote work worldwide",
      action: "#"
    }
  ]

  const faqs = [
    {
      question: "How quickly can I expect to see results?",
      answer: "While every business is different, most clients start seeing improvements within 30-60 days, with significant results typically achieved within 3-6 months."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! I work with everything from startups to enterprise companies. My strategies are tailored to fit your specific budget and business goals."
    },
    {
      question: "What makes your approach different?",
      answer: "I focus on data-driven strategies with clear ROI metrics. Every campaign is customized to your business goals, not cookie-cutter solutions."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Absolutely! I provide ongoing optimization, monthly reports, and strategic adjustments to ensure continued growth and success."
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 mb-4">
            Let's Work Together
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Digital Presence?</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Let's discuss your goals and create a custom strategy that drives real results. 
            Get started with a free consultation and see how we can grow your business together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Side - Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Get Your Free Strategy Session
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Fill out the form below and I'll get back to you within 24 hours with a custom strategy proposal.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Monthly Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-plus">$25,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="seo">SEO & Content Strategy</option>
                      <option value="ppc">PPC & Google Ads</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="email">Email Marketing</option>
                      <option value="analytics">Analytics & Reporting</option>
                      <option value="automation">Marketing Automation</option>
                      <option value="full-service">Full-Service Marketing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    >
                      <option value="">When to start?</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="later">Later this year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your business goals, current challenges, and what success looks like to you..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold"
                >
                  Send Message & Get Free Strategy
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Thank you for reaching out. I'll review your information and get back to you within 24 hours with a custom strategy proposal.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Check your email for a confirmation message.
                </p>
              </div>
            )}
          </div>

          {/* Right Side - Contact Info & FAQ */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  onClick={() => {
                    if (info.title === "Schedule a Meeting") {
                      openModal("Schedule a Meeting")
                    } else if (info.action.startsWith('tel:')) {
                      window.open(info.action, "_self")
                    } else if (info.action.startsWith('mailto:')) {
                      window.open(info.action, "_self")
                    }
                  }}
                  className={`bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group ${(info.title === "Schedule a Meeting" || info.action.startsWith('tel:') || info.action.startsWith('mailto:')) ? 'cursor-pointer' : ''}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-cyan-600 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {info.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-6 h-6" />
                <h4 className="text-lg font-semibold">Quick Response Guarantee</h4>
              </div>
              <p className="text-cyan-100 mb-4">
                I personally respond to every inquiry within 24 hours. For urgent matters, 
                call me directly for same-day response.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">24h Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Free Consultation</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {/* LinkedIn - Official LinkedIn Blue Background */}
                <a href="#" className="group flex items-center justify-center w-12 h-12 bg-[#0077B5]/80 backdrop-blur-md hover:bg-[#0077B5] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
                    <path fill="white" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                  </svg>
                </a>
                {/* X - Official Black Background */}
                <a href="#" className="group flex items-center justify-center w-12 h-12 bg-black/80 backdrop-blur-md hover:bg-black rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black/25 hover:scale-105">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
                    <path fill="white" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* Instagram - Official Instagram Gradient Background */}
                <a href="#" className="group flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-[#833AB4] via-[#C13584] to-[#E1306C] backdrop-blur-md hover:from-[#7c2d8e] hover:via-[#b12a75] hover:to-[#d42c5c] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                Follow me for daily digital marketing tips and industry insights
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Got questions? Here are answers to the most common ones I receive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {faq.question}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Have a different question?
            </p>
            <Button variant="outline" className="hover:bg-cyan-50 dark:hover:bg-cyan-900/20">
              Ask Me Anything
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}