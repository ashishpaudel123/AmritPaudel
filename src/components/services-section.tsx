import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Search,
  MousePointer,
  Users,
  Mail,
  BarChart3,
  CheckCircle,
  Star,
  PenTool,
  BarChart,
  FileText,
  PackageSearch,
} from "lucide-react";
import { useContactModal } from "../hooks/use-contact-modal";
import { useState } from "react";

interface ServicesSectionProps {
  onServiceClick?: (serviceId: number) => void;
}

export function ServicesSection({}: ServicesSectionProps) {
  const { openModal } = useContactModal();
  const services = [
    {
      id: 1,
      icon: Search,
      title: "Graphics Design",
      description:
        "Create visually compelling designs that elevate brand identity and engage audiences across digital and print platforms.",
      features: [
        "Social Media & Marketing Designs",
        "Print & Digital Design Assets",
        "Brand Identity Design",
      ],
      price: "Starting at $800/mo",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      icon: MousePointer,
      title: "Meta Ads",
      description:
        "Maximize your ROI with targeted pay-per-click campaigns that drive qualified traffic and increase conversions.",
      features: [
        "Ad Creative Design ",
        "AudienceTargeting Setup",
        "AudienceTargeting Setup",
        "Campaign Setup & Optimization",
      ],
      price: "Starting at $800/mo",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      icon: PackageSearch,
      title: "Premimum Digital Growth Package",
      description:
        "A complete all-in-one solution combining design, advertising, content strategy, and audience engagement for consistent business growth.",
      features: [
        "Graphic Design Suite",
        "Paid Advertising Management",
        "Content Strategy & Writing",
        "Audience Engagement & Message Handling",
      ],
      price: "Starting at $900/mo",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: 4,
      icon: Users,
      title: "Social Media Marketing",
      description:
        "Build a strong social presence with engaging content and strategic campaigns across all major platforms.",
      features: [
        "Social Media Strategy & Planning",
        "Content Creation & page management",
        "Advertising & Influencer Collaboration",
        "Audience Engagement & Message Handling",
      ],
      price: "Starting at $600/mo",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: 5,
      icon: Mail,
      title: "Strategic Marketing Consultation",
      description:
        "Nurture leads and retain customers with personalized email campaigns that drive engagement and sales.",
      features: [
        "Off-Page SEO & Backlink Building",
        "Comprehensive Marketing Audits",
        "Custom Growth Action Plans",
        "Ongoing Guidance & Support",
      ],
      price: "Starting at $400/mo",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: 6,
      icon: BarChart3,
      title: "SEO",
      description:
        "Make data-driven decisions with comprehensive analytics, reporting, and actionable insights for your business.",
      features: [
        "Keyword Research & Content Optimization",
        "Technical SEO (Site Health & Performance)",
        "On-Page SEO (Structure, Tags, Internal Links)",
        "Off-Page SEO & Backlink Building",
      ],
      price: "Starting at $300/mo",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      id: 7,
      icon: PenTool,
      title: "Logo Design",
      description:
        "Create a distinctive and professional logo that reflects your brand identity with refined concepts and polished execution.",
      features: [
        "Logo Concept Exploration",
        "Refined Logo Development",
        "Typography & Color Selection",
        "Final Logo Files & Variations Delivery",
      ],
      price: "Starting at $300",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 8,
      icon: BarChart,
      title: "Advanced Analytics & Reporting",
      description:
        "Gain clear insights into your performance with advanced analytics, tracking, and detailed reporting.",
      features: [
        "Google Analytics Implementation",
        "Conversion & Event Tracking",
        "Custom Dashboard Insights",
        "Monthly Performance Reporting",
      ],
      price: "Starting at $250/mo",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 9,
      icon: FileText,
      title: "Content Strategy & Writing",
      description:
        "Craft compelling, consistent content that strengthens your brand presence and drives meaningful engagement.",
      features: [
        "Content Planning & Editorial Calendar",
        "Optimized Blog Writing",
        "Social Media & Email Content Creation",
        "Brand Storytelling & Messaging",
      ],
      price: "Starting at $300",
      gradient: "from-rose-500 to-red-600",
    },
  ];
  const [visibleCount, setVisibleCount] = useState(6);
  const hasMoreServices = services.length > visibleCount;

  const moreServices = () => {
    setVisibleCount(services.length);
  };

  return (
    <section
      id="services"
      className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-4">
            My Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive Digital Marketing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From strategy to execution, I provide end-to-end digital marketing
            services that drive real results and measurable growth for your
            business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.slice(0, visibleCount).map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Gradient Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>
        {hasMoreServices && (
          <div className="text-center mb-20">
            <Button
              variant="outline"
              size="lg"
              onClick={moreServices}
              className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              View All Services
            </Button>
          </div>
        )}

        {/* Process Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              My Proven Process
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A systematic approach that ensures consistent results and maximum
              ROI for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery and Strategy",
                description:
                  "You share your goals. We study your business and audience. We define a clear digital plan focused on results.",
              },
              {
                step: "02",
                title: "Design and Content",
                description:
                  "You get clean design and strong content. Everything matches your brand and drives action.",
              },
              {
                step: "03",
                title: "Development and Execution",
                description:
                  "We build and launch. Websites, ads, campaigns, and systems run fast and work smoothly.",
              },
              {
                step: "04",
                title: "Optimization and Support",
                description:
                  "We track performance. We improve results. You get ongoing support and clear growth.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-lg mb-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
