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
          <div className="relative">
            <img src="hero.png" alt="Amrit Paudel" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              Download My Resume
            </Button>
          </div>
        </div>

        {/* Skills Section */}
        {/* <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Core Competencies</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My expertise spans across all major digital marketing channels with proven track records of success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Achievements Grid
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  {achievement.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
