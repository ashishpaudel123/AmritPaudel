import { Button } from "./ui/button";
import { ArrowRight, PlayCircle, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-40"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div
            className="order-2 lg:order-1 space-y-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-block">
                  <h1 className="font-extrabold tracking-tight mb-2 ext-slate-900 dark:text-white drop-shadow-sm">
                    I'm Amritya
                  </h1>
                  <div className="h-1 w-24 bg-orange-600 rounded-full"></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-orange-600 bg-clip-text text-transparent animate-gradient">
                  Digital Marketing Consultant
                </h2>
              </div>
              <p className="text-sm md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl text-justify leading-relaxed">
                with 1 year of hands-on experience in social media marketing,
                paid advertising, branding, and graphic design. I have worked on
                real projects for businesses, focusing on creating visually
                engaging content and optimizing campaigns to improve reach,
                engagement, and conversions. Skilled in Ads Manager, Adobe
                design, reporting, analytics, and AI tools. Actively upscaling
                my SEO strategies such as keyword research and on-page
                optimization to deliver measurable results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col mt-10 sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg font-bold shadow-xl shadow-green-900/20 hover:shadow-2xl hover:shadow-green-900/30 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group relative border-2 border-slate-300 dark:border-slate-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-green-50 dark:hover:from-slate-800 dark:hover:to-slate-800 px-8 py-5.5 text-lg font-bold hover:border-green-500 dark:hover:border-green-500 shadow-lg hover:shadow-xl transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("portfolio");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Look at My Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center py-3 space-x-2">
                <Users className="w-4 h-4" />
                <span>
                  Helping brands grow through ads, design & data-driven
                  marketing.
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div
            className="order-1 md:order-2 relative  "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              <img
                src="video/hero.gif"
                alt="Amritya - Digital Marketing Consultant"
                className="absolute inset-0 m-auto max-w-[70%] max-h-[70%] object-contain animate-fade-in"
              />
              {/* skill badges */}
              <div className="group absolute top-0 left-0 md:top-[30px] md:left-[-20px] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl p-2 md:px-5 md:py-3 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 animate-float z-10 backdrop-blur-sm border border-white/20">
                <span className="text-white font-semibold md:font-extrabold text-xs md:text-sm whitespace-nowrap drop-shadow-lg">
                  IDEA
                </span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></span>
              </div>

              <div className="group absolute top-0 right-0 md:top-[30px] md:right-[-20px] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl p-2 md:px-5 md:py-3 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transform hover:scale-110 hover:rotate-3 transition-all duration-300 animate-float animation-delay-1000 z-10 backdrop-blur-sm border border-white/20">
                <span className="text-white font-extrabold text-xs md:text-sm whitespace-nowrap drop-shadow-lg">
                  DESIGN
                </span>
                <span className="absolute -top-1 -left-1 w-3 h-3 bg-orange-300 rounded-full animate-ping animation-delay-1000"></span>
              </div>

              <div className="group absolute bottom-0 right-0 md:bottom-[40px] md:right-[-20px] bg-gradient-to-br from-green-500 via-emerald-500 to-green-500 rounded-2xl p-2 md:px-5 md:py-3 shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 animate-float animation-delay-2000 z-10 backdrop-blur-sm border border-white/20">
                <span className="text-white font-extrabold text-xs md:text-sm whitespace-nowrap drop-shadow-lg">
                  RESULT
                </span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping animation-delay-2000"></span>
              </div>

              <div className="group absolute bottom-0 left-0 md:bottom-[40px] md:left-[-20px] bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-2xl p-2 md:px-5 md:py-3 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transform hover:scale-110 hover:rotate-3 transition-all duration-300 animate-float animation-delay-3000 z-10 backdrop-blur-sm border border-white/20">
                <span className="text-white font-extrabold text-xs md:text-sm whitespace-nowrap drop-shadow-lg">
                  MARKETING
                </span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping animation-delay-3000"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
