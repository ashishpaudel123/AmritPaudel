import { Button } from "./ui/button";
import { ArrowRight, PlayCircle, TrendingUp, Users, Target } from "lucide-react";
import { useContactModal } from "../hooks/use-contact-modal";

export function HeroSection() {
  const { openModal } = useContactModal();
  
  const stats = [
    { icon: Users, number: "60+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: Target, number: "90+", label: "Project Completed", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, number: "2+", label: "Experience", color: "from-green-500 to-emerald-500" },
  ];
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-30 animate-blob animation-delay-4000"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-50"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float animation-delay-1000 opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-2000 opacity-50"></div>
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

            {/* Main Heading with enhanced styling */}
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
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Transforming brands through data-driven digital strategies that deliver measurable results and sustainable growth.
              </p>
            </div>

            {/* Enhanced Stats with glassmorphism */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 py-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative text-center p-4 md:p-6 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons with glow effect */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => openModal("Get Free Strategy Session")}
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-bold shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
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
                className="group relative border-2 border-slate-300 dark:border-slate-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-800 dark:hover:to-slate-800 px-8 py-6 text-lg font-bold transform hover:scale-105 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Look at My Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Trusted by 60+ Businesses</span>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image/Visual */}
          <div className="relative animate-fade-in-right">
            {/* Image wrapper with relative positioning for absolute badges */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Enhanced animated background gradient rings with glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-80 blur-3xl scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-full animate-spin-reverse opacity-80 blur-3xl animation-delay-2000 scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full animate-spin-slow opacity-60 blur-2xl animation-delay-1000 scale-105"></div>
              
              {/* Main image container with enhanced styling */}
              <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-full p-2 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                {/* Gradient border effect */}
                <div className="relative rounded-full p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                  <div className="relative rounded-full overflow-hidden bg-white dark:bg-slate-900 p-1 aspect-square">
                    {/* Profile Image */}
                    <img 
                      src="/hero.png" 
                      alt="Amrit Paudel - Digital Marketing Consultant"
                      className="w-full h-full object-cover rounded-full animate-fade-in"
                    />
                    {/* Enhanced overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/40 animate-ping-slow"></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 animate-ping-slow animation-delay-1000"></div>
              <div className="absolute inset-0 rounded-full border border-pink-500/30 animate-ping-slow animation-delay-2000"></div>
                  {/* Enhanced floating skill badges with glassmorphism */}
              {/* Skill 1: Top-left */}
              <div style={{ top: '30px', left: '-20px' }} className="group absolute bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-2xl px-5 py-3 shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 animate-float z-10 backdrop-blur-sm border border-white/20">
                <div className="text-white font-extrabold text-sm whitespace-nowrap drop-shadow-lg">Meta Ads</div>
                <div className="text-white/90 text-xs whitespace-nowrap font-medium">Specialist ⭐</div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              
              {/* Skill 2: Top-right */}
              <div style={{ top: '30px', right: '-20px' }} className="group absolute bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-2xl px-5 py-3 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transform hover:scale-110 hover:rotate-3 transition-all duration-300 animate-float animation-delay-1000 z-10 backdrop-blur-sm border border-white/20">
                <div className="text-white font-extrabold text-sm whitespace-nowrap drop-shadow-lg">SEO</div>
                <div className="text-white/90 text-xs whitespace-nowrap font-medium">Master 🎯</div>
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
              </div>
              
              {/* Skill 3: Bottom-right */}
              <div style={{ bottom: '30px', right: '-20px' }} className="group absolute bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl px-5 py-3 shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 animate-float animation-delay-2000 z-10 backdrop-blur-sm border border-white/20">
                <div className="text-white font-extrabold text-sm whitespace-nowrap drop-shadow-lg">Google Ads</div>
                <div className="text-white/90 text-xs whitespace-nowrap font-medium">Expert 🚀</div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-ping animation-delay-2000"></div>
              </div>

              {/* Skill 4: Bottom-left */}
              <div style={{ bottom: '30px', left: '-20px' }} className="group absolute bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-2xl px-5 py-3 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transform hover:scale-110 hover:rotate-3 transition-all duration-300 animate-float animation-delay-3000 z-10 backdrop-blur-sm border border-white/20">
                <div className="text-white font-extrabold text-sm whitespace-nowrap drop-shadow-lg">Social Media</div>
                <div className="text-white/90 text-xs whitespace-nowrap font-medium">Pro 💎</div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-3000"></div>
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
