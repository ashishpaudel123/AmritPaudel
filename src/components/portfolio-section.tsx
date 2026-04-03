import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { portfolioCategories } from "@/lib/utils";

export interface PortfolioSectionProps {
  onDigitalMarketingClick: () => void;
  onGraphicsDesignClick: () => void;
}

export type PortfolioCategory = "digital-marketing" | "graphics-design";

export function PortfolioSection({
  onDigitalMarketingClick,
  onGraphicsDesignClick,
}: PortfolioSectionProps) {
  const handleCategoryClick = (action: PortfolioCategory) => {
    switch (action) {
      case "digital-marketing":
        onDigitalMarketingClick();
        break;
      case "graphics-design":
        onGraphicsDesignClick();
        break;
      default:
        break;
    }
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-green-400/10 to-lime-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-400/10 to-lime-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My Work
            <span className="bg-orange-600 bg-clip-text text-transparent">
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
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {portfolioCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 hover:scale-[1.02] cursor-pointer"
                onClick={handleCategoryClick.bind(null, category.action)}
                data-aos={index === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1500"
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
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-6 text-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
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
