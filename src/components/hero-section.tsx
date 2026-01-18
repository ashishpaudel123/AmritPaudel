import { Button } from "./ui/button";
import { ArrowRight, PlayCircle, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-30 animate-blob animation-delay-4000"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-50"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float animation-delay-1000 opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-2000 opacity-50"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
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
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2">
                    <span className="text-slate-900 dark:text-white drop-shadow-sm">
                      I'm Amrit Paudel
                    </span>
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    Digital Marketing Consultant
                  </span>
                </h2>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl text-justify leading-relaxed">
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
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-bold shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden"
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
                className="group relative border-2 border-slate-300 dark:border-slate-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-800 dark:hover:to-slate-800 px-8 py-5.5 text-lg font-bold hover:border-purple-500 dark:hover:border-purple-500 shadow-lg hover:shadow-xl transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105"
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
            className="order-1 lg:order-2 relative"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {/* Image wrapper*/}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main image container */}
              <div className="relative right-[20%] overflow-hidden aspect-square">
                <img
                  src="video/hero.gif"
                  alt="Amrit Paudel - Digital Marketing Consultant"
                  className="animate-fade-in absolute right-0"
                />
              </div>
              {/* skill badges */}
              <div
                style={{ top: "30px", left: "-20px" }}
                className="group absolute bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-2xl px-5 py-3 shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 animate-float z-10 backdrop-blur-sm border border-white/20"
              >
                <div className="text-white font-extrabold text-sm whitespace-nowrap drop-shadow-lg">
                  IDEA
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>

              <div
                style={{ top: "30px", right: "-20px" }}
                className="group absolute bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-2xl px-5 py-3 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transform hover:scale-110 hover:rotate-3 transition-all duration-300 animate-float animation-delay-1000 z-10 backdrop-blur-sm border border-white/20"
              >
                <div className="text-white font-extrabold text-sm whitespace-nowrap drop-shadow-lg">
                  DESIGN
                </div>
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
              </div>

              <div
                style={{ bottom: "40px", right: "-20px" }}
                className="group absolute bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl px-5 py-3 shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 animate-float animation-delay-2000 z-10 backdrop-blur-sm border border-white/20"
              >
                <div className="text-white font-extrabold text-sm whitespace-nowrap drop-shadow-lg">
                  RESULT
                </div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-ping animation-delay-2000"></div>
              </div>

              <div
                style={{ bottom: "40px", left: "-20px" }}
                className="group absolute bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-2xl px-5 py-3 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transform hover:scale-110 hover:rotate-3 transition-all duration-300 animate-float animation-delay-3000 z-10 backdrop-blur-sm border border-white/20"
              >
                <div className="text-white font-extrabold text-sm whitespace-nowrap drop-shadow-lg">
                  MARKETING
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-3000"></div>
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
