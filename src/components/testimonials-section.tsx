import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Award,
  TrendingUp,
  Users
} from "lucide-react"
import { useContactModal } from "../hooks/use-contact-modal"

export function TestimonialsSection() {
  const { openModal } = useContactModal()
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStore",
      avatar: "SJ",
      rating: 5,
      text: "Amrit completely transformed our e-commerce business. In just 6 months, we saw a 340% increase in revenue and became the market leader in our niche. His strategic approach and attention to detail are unmatched.",
      results: {
        metric: "Revenue Growth", 
        value: "340%",
        timeframe: "6 months"
      },
      industry: "E-commerce",
      videoTestimonial: true
    },
    {
      id: 2,
      name: "Mike Chen",
      position: "Founder",
      company: "CloudSync",
      avatar: "MC",
      rating: 5,
      text: "From zero to market leader! Amrit's content marketing and PPC strategies helped us acquire over 1,500 qualified leads in our first year. The ROI has been absolutely incredible - best investment we've made.",
      results: {
        metric: "Leads Generated",
        value: "1,500+",
        timeframe: "8 months"
      },
      industry: "SaaS",
      videoTestimonial: false
    },
    {
      id: 3,
      name: "David Rodriguez",
      position: "Owner",
      company: "GreenLeaf Restaurants",
      avatar: "DR",
      rating: 5,
      text: "Our restaurant chain was struggling with declining foot traffic. Amrit's local SEO and social media strategy increased our online orders by 250% and brought customers back to our locations. Amazing results!",
      results: {
        metric: "Online Orders",
        value: "250%",
        timeframe: "4 months"
      },
      industry: "Food & Beverage",
      videoTestimonial: true
    },
    {
      id: 4,
      name: "Emma Thompson",
      position: "Co-founder",
      company: "FitTrack",
      avatar: "ET",
      rating: 5,
      text: "Amrit took our fitness app from zero to 50,000 downloads in just 5 months. His influencer marketing and ASO strategies were game-changing. We couldn't be happier with the results and ongoing partnership.",
      results: {
        metric: "App Downloads",
        value: "50K+",
        timeframe: "5 months"
      },
      industry: "Mobile Apps",
      videoTestimonial: false
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Marketing Director",
      company: "EcoHome Solutions",
      avatar: "LP",
      rating: 5,
      text: "Working with Amrit has been transformative for our B2B lead generation. His LinkedIn marketing and content strategy generated 200% more qualified leads than our previous agency, at half the cost.",
      results: {
        metric: "Qualified Leads",
        value: "200%",
        timeframe: "7 months"
      },
      industry: "Home Improvement",
      videoTestimonial: true
    },
    {
      id: 6,
      name: "James Wilson",
      position: "CEO",
      company: "MedTech Innovations",
      avatar: "JW",
      rating: 5,
      text: "Amrit's expertise in healthcare marketing compliance while driving results is exceptional. We achieved 180% growth in qualified physician leads while maintaining all regulatory requirements. Highly recommend!",
      results: {
        metric: "Physician Leads",
        value: "180%",
        timeframe: "9 months"
      },
      industry: "Healthcare",
      videoTestimonial: false
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            What My Clients Say About
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Working Together</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what real clients say about the results 
            and experience of working with me on their digital marketing transformation.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="relative">
              {/* Main Testimonial */}
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  
                  {/* Left - Client Info */}
                  <div className="space-y-6">
                    {/* Avatar and Basic Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentSlide].avatar}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                          {testimonials[currentSlide].name}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          {testimonials[currentSlide].position}
                        </p>
                        <p className="text-emerald-600 font-medium">
                          {testimonials[currentSlide].company}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                    </div>

                    {/* Industry & Video Badge */}
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {testimonials[currentSlide].industry}
                      </Badge>
                      {testimonials[currentSlide].videoTestimonial && (
                        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                          <Play className="w-4 h-4 mr-1" />
                          Video Testimonial Available
                        </div>
                      )}
                    </div>

                    {/* Results Box */}
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-700">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">
                          {testimonials[currentSlide].results.value}
                        </div>
                        <div className="text-sm text-emerald-600 dark:text-emerald-400">
                          {testimonials[currentSlide].results.metric}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          in {testimonials[currentSlide].results.timeframe}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center - Quote */}
                  <div className="lg:col-span-2 space-y-6">
                    <Quote className="w-12 h-12 text-emerald-500 opacity-50" />
                    <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white leading-relaxed">
                      "{testimonials[currentSlide].text}"
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-emerald-600' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => goToSlide(testimonial.id - 1)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-slate-700 dark:text-slate-300 text-sm line-clamp-4 mb-4">
                "{testimonial.text}"
              </p>

              {/* Result */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-emerald-600">{testimonial.results.value}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">{testimonial.results.metric}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Join hundreds of successful businesses that have transformed their digital presence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, number: "200+", label: "Happy Clients" },
              { icon: Award, number: "98%", label: "Satisfaction Rate" },
              { icon: TrendingUp, number: "350%", label: "Average ROI" },
              { icon: Star, number: "4.9/5", label: "Client Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create a success story for your business. Schedule your free consultation 
              and discover how I can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openModal("Schedule Free Consultation")}
                className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold cursor-pointer"
              >
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg font-semibold"
              >
                View More Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}