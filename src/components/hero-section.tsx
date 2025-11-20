import { Button } from "./ui/button";
import { ArrowRight, PlayCircle, TrendingUp, Users, Award, Target } from "lucide-react";
import { useContactModal } from "../hooks/use-contact-modal";

export function HeroSection() {
  const { openModal } = useContactModal();
  
  const stats = [
    { icon: Users, number: "60+", label: "Happy Clients" },
    { icon: Target, number: "90+", label: "Project Completed" },
    { icon: TrendingUp, number: "2+", label: "Experience" },
    // { icon: Award, number: "15+", label: "Industry Awards" },
  ];
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            {/* <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Certified Digital Marketing Consultant</span>
            </div> */}

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-slate-900 dark:text-white">
                  I'm Amrit Paudel
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Digital Marketing Consultant
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                I create visually appealing brand creatives and run paid
                advertising campaigns on Google Ads and Meta Ads to grow online
                presence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => openModal("Get Free Strategy Session")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Look at My Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Meta Ads Specialist</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Social Media Marketing</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Visual */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main card with marketing dashboard mockup */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      Marketing Dashboard
                    </h3>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Mock chart */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg h-32 flex items-end justify-between p-4">
                    <div className="bg-white/20 rounded w-8 h-16"></div>
                    <div className="bg-white/30 rounded w-8 h-20"></div>
                    <div className="bg-white/40 rounded w-8 h-24"></div>
                    <div className="bg-white/50 rounded w-8 h-28"></div>
                    <div className="bg-white/60 rounded w-8 h-20"></div>
                    <div className="bg-white/70 rounded w-8 h-24"></div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Conversion Rate
                      </div>
                      <div className="text-xl font-bold text-green-800 dark:text-green-300">
                        12.5%
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        ROI
                      </div>
                      <div className="text-xl font-bold text-blue-800 dark:text-blue-300">
                        324%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold animate-pulse">
                SEO
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold animate-pulse animation-delay-1000">
                PPC
              </div>
              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-white text-sm font-bold animate-bounce">
                SMM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
