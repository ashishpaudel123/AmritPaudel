import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  TrendingUp,
  BarChart3,
  ArrowRight,
  Palette,
  Megaphone,
  Sparkles,
  Target,
} from "lucide-react";

interface PortfolioSectionProps {
  onDigitalMarketingClick: () => void;
  onGraphicsDesignClick: () => void;
}

export function PortfolioSection({
  onDigitalMarketingClick,
  onGraphicsDesignClick,
}: PortfolioSectionProps) {
  const portfolioCategories = [
    {
      id: 1,
      title: "Digital Marketing",
      tagline: "Turn Data Into Growth",
      description:
        "Real campaigns. Real results. Real analytics. Explore case studies with verified Meta Business insights, detailed performance metrics, and proven strategies that drive measurable success.",
      icon: Megaphone,
      color: "from-blue-600 to-indigo-600",
      hoverColor: "hover:from-blue-700 hover:to-indigo-700",
      accentColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800",
      features: [
        "Organic Growth Campaigns",
        "Meta Ads Performance",
        "Lead Generation Funnels",
        "Brand Awareness Strategies",
      ],
      badge: "Case Studies Inside",
      onClick: onDigitalMarketingClick,
    },
    {
      id: 2,
      title: "Graphics Design",
      tagline: "Where Creativity Meets Purpose",
      description:
        "From concept to creation. Browse stunning visual designs that tell stories, build brands, and captivate audiences across all platforms and mediums.",
      icon: Palette,
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:from-pink-700 hover:to-purple-700",
      accentColor: "text-pink-600 dark:text-pink-400",
      borderColor: "border-pink-200 dark:border-pink-800",
      features: [
        "Brand Identity & Logos",
        "Social Media Graphics",
        "Marketing Assets",
        "Print Design",
      ],
      badge: "Portfolio Inside",
      onClick: onGraphicsDesignClick,
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My Work
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Speaks For Itself
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore my expertise across digital marketing and creative design.
            Choose a category to see detailed case studies and project
            showcases.
          </p>
        </div>

        {/* Portfolio Categories - Two Main Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {portfolioCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 hover:scale-[1.02] cursor-pointer"
                onClick={category.onClick}
              >
                {/* Animated gradient border on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}
                ></div>

                {/* Header with gradient and animated background */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${category.color} overflow-hidden`}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 -left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                    <div
                      className="absolute bottom-0 -right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>

                  {/* Decorative grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "50px 50px",
                    }}
                  ></div>

                  {/* Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 px-4 py-1.5 text-sm font-semibold">
                      {category.badge}
                    </Badge>
                  </div>

                  {/* Icon with glow effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <Icon className="w-14 h-14 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title with tagline */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {category.title}
                    </h3>
                    <p
                      className={`text-lg font-semibold ${category.accentColor} italic`}
                    >
                      {category.tagline}
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-8 text-base leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features as bullet points */}
                  <ul className="space-y-3 mb-8">
                    {category.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-700 dark:text-slate-300 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <span className="text-lg mt-0.5 flex-shrink-0">•</span>
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button with enhanced design */}
                  <Button
                    className={`w-full bg-gradient-to-r ${category.color} ${category.hoverColor} text-white font-bold py-6 text-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                    <span className="relative flex items-center justify-center gap-2">
                      Explore Projects
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
