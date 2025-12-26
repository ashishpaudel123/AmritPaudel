import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, ArrowRight, Palette } from "lucide-react";
import { useContactModal } from "../hooks/use-contact-modal";

interface GraphicsDesignPortfolioProps {
  onBack: () => void;
}

export function GraphicsDesignPortfolio({
  onBack,
}: GraphicsDesignPortfolioProps) {
  const { openModal } = useContactModal();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Designs" },
    // { id: "branding", label: "Branding & Logo" },
    { id: "consultancy", label: "Consultancy" },
    { id: "recruitment", label: "Recruitment" },
    { id: "festival", label: "Festival" },
    { id: "ceremony", label: "Ceremony / Celebrations" },
    { id: "social-media", label: "Social Media" },
    // { id: "marketing", label: "Marketing Materials" },
    // { id: "packaging", label: "Packaging Design" },
    // { id: "illustration", label: "Illustration" },
  ];

  // Sample portfolio items - replace with real data
  const portfolioItems = [
    {
      id: 1,
      category: "consultancy",
      title: "Education Consultancy Brand",
      image: "/hiring/1.png",
      description: "Complete branding for education consultancy",
    },
    {
      id: 2,
      category: "recruitment",
      title: "Recruitment Agency Poster",
      image: "/hiring/2.png",
      description: "Hiring campaign poster design",
    },
    {
      id: 3,
      category: "consultancy",
      title: "Education Consultancy Brand",
      image: "/hiring/3.png",
      description: "Complete branding for education consultancy",
    },
    {
      id: 4,
      category: "ceremony",
      title: "Wedding Ceremony Design",
      image: "/hiring/4.png",
      description: "Wedding invitation and ceremony graphics",
    },
    {
      id: 5,
      category: "consultancy",
      title: "Tech Startup Logo",
      image: "/hiring/5.png",
      description: "Modern logo design for tech company",
    },
    {
      id: 6,
      category: "consultancy",
      title: "Instagram Feed Design",
      image: "/hiring/6.png",
      description: "Cohesive Instagram feed layout",
    },
    {
      id: 7,
      category: "consultancy",
      title: "Product Brochure",
      image: "/hiring/7.png",
      description: "Tri-fold marketing brochure",
    },
    {
      id: 8,
      category: "social-media",
      title: "Mobile App Interface",
      image: "/hiring/8.png",
      description: "User interface design for mobile app",
    },
    {
      id: 9,
      category: "consultancy",
      title: "Product Packaging",
      image: "/hiring/9.png",
      description: "Consumer product packaging design",
    },
    {
      id: 10,
      category: "recruitment",
      title: "Custom Illustrations",
      image: "/hiring/10.png",
      description: "Hand-drawn digital illustrations",
    },
    {
      id: 11,
      category: "recruitment",
      title: "Data Visualization",
      image: "/hiring/11.png",
      description: "Infographic for business presentation",
    },
    {
      id: 12,
      category: "social-media",
      title: "Tihar Festival Design",
      image: "/hiring/12.png",
      description: "Festival celebration graphics",
    },
    {
      id: 13,
      category: "festival",
      title: "Festival Design 1",
      image: "/festival/1.jpeg",
      description: "Festival celebration design",
    },
    {
      id: 14,
      category: "festival",
      title: "Festival Design 2",
      image: "/festival/2.jpeg",
      description: "Festival greeting graphics",
    },
    {
      id: 15,
      category: "festival",
      title: "Festival Design 3",
      image: "/festival/3.jpeg",
      description: "Festival celebration artwork",
    },
    {
      id: 16,
      category: "festival",
      title: "Festival Design 4",
      image: "/festival/4.jpeg",
      description: "Festival promotional design",
    },
    {
      id: 17,
      category: "festival",
      title: "Festival Design 5",
      image: "/festival/5.jpeg",
      description: "Festival social media post",
    },
    {
      id: 18,
      category: "festival",
      title: "Festival Design 6",
      image: "/festival/6.jpeg",
      description: "Festival greeting card",
    },
    {
      id: 19,
      category: "festival",
      title: "Festival Design 7",
      image: "/festival/7.jpeg",
      description: "Festival celebration banner",
    },
    {
      id: 20,
      category: "festival",
      title: "Festival Design 8",
      image: "/festival/8.jpeg",
      description: "Festival promotional material",
    },
    {
      id: 21,
      category: "festival",
      title: "Festival Design 9",
      image: "/festival/9.jpeg",
      description: "Festival celebration graphics",
    },
    {
      id: 22,
      category: "festival",
      title: "Festival Design 10",
      image: "/festival/10.jpeg",
      description: "Festival social media design",
    },
    {
      id: 23,
      category: "festival",
      title: "Festival Design 11",
      image: "/festival/11.jpeg",
      description: "Festival greeting design",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva Pro",
    "InDesign",
  ];

  return (
    <section
      id="graphics-design"
      className=" pt-10 pb-20 bg-white dark:bg-slate-900 relative overflow-hidden min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2 hover:bg-purple-50 dark:hover:bg-purple-900/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Button>

        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 mb-4">
            Graphics Design
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Creative Design
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Transforming ideas into stunning visual experiences. Explore my
            design work across branding, marketing materials, and digital
            content.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white"
                    : "hover:bg-pink-50 dark:hover:bg-pink-900/20"
                } transition-all duration-300`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - 1:1 Aspect Ratio */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* 1:1 Aspect Ratio Container */}
              <div className="relative w-full pt-[100%] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <Badge className="bg-white/90 text-slate-800 text-xs backdrop-blur-sm">
                  {categories.find((c) => c.id === item.category)?.label}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Palette className="w-16 h-16 mx-auto mb-4 text-slate-400" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              No designs in this category yet
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Check back soon for new designs!
            </p>
          </div>
        )}

        {/* Skills Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12 mb-16 border border-purple-200 dark:border-purple-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Design Tools & Expertise
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Proficient in industry-standard design software and tools
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className="px-6 py-3 text-base bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-purple-200 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:scale-110"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Create Something Amazing Together
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you need a complete brand identity or a single graphic, I'm
            here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => openModal("Start Design Project")}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
