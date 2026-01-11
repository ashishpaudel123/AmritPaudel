import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/utils";

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Auto-scroll horizontal testimonials
  useEffect(() => {
    if (isPaused) return;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => prev + 1);
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  // Apply scroll position
  useEffect(() => {
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        setScrollPosition(0);
      }
      scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [scrollPosition]);

  // Scroll left/right handlers
  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(0, prev - 300));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => prev + 300);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            What My Clients Say About
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Working Together
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what real clients say about
            the results and experience of working with me on their digital
            marketing transformation.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div
          className="relative max-w-6xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="relative">
              {/* Main Testimonial */}
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Left - Client Info */}
                  <div className="space-y-6">
                    {/* Avatar and Basic Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentSlide].avatar}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                          {testimonials[currentSlide].name}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          {testimonials[currentSlide].position}
                        </p>
                        <p className="text-purple-600 font-medium">
                          {testimonials[currentSlide].company}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 ps-19">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Center - Quote */}
                  <div className="lg:col-span-2 space-y-6">
                    <Quote className="w-12 h-12 text-purple-600 opacity-50" />
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
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index
                    ? "bg-purple-600"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid - Infinite Horizontal Scroll */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 sm:-left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 sm:-right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300" />
          </button>

          {/* Scrolling Container */}
          <div
            className="overflow-hidden mx-8 sm:mx-10 md:mx-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 transition-transform duration-100 ease-linear"
              style={{ width: "max-content" }}
            >
              {/* Duplicate testimonials for infinite scroll effect */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-[280px] sm:w-[320px] md:w-[380px] flex-shrink-0 bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  onClick={() => goToSlide(testimonial.id - 1)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                          {testimonial.name}
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm line-clamp-4 mb-3 sm:mb-4">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
