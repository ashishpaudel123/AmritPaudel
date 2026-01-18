import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, BookOpen } from "lucide-react";

export function AboutSection() {
  const certifications = [
    "Digital Marketing Institute Certified",
    "Graphics Design Institute Certified",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* <img src="hero.png" alt="Amrit Paudel" /> */}
          </div>

          {/* Right Side - Content */}
          <div
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mb-4">
                About Me
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Your Partner in
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ps-2.5">
                  Digital Growth
                </span>
              </h2>
              <p className="text-xl text-justify text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                With over 2 years of experience as a digital marketing
                consultant and social media designer, I have helped multiple
                businesses transform their online presence, strengthen their
                brand identity, and achieve remarkable growth.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-700 text-justify dark:text-slate-300">
                  <span className="font-semibold">Consultation & Plannig:</span>
                  We begin with one-on-one conversation to your specific
                  business goals and target audience.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-700 text-justify dark:text-slate-300">
                  <span className="font-semibold">Data-Driven Outcomes: </span>
                  Every plans are based on client requirements and business
                  goals.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold">Service Support: </span>
                  From planning to execution, I handle every aspect of clients
                  need.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                Certifications & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105"
            >
              Download My Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
