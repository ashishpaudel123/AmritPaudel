import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Search,
  MousePointer,
  Users,
  Mail,
  BarChart3,
  PenTool,
  BarChart,
  FileText,
  PackageSearch,
  Palette,
  Megaphone,
} from "lucide-react";
import type { PortfolioCategory } from "@/components/portfolio-section";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const services = [
  {
    id: 1,
    icon: Search,
    route: "#services",
    slug: "graphics-design",
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
    route: "#services",
    slug: "digital-marketing",
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
    gradient: "from-orange-500 to-lime-600",
  },
  {
    id: 3,
    icon: PackageSearch,
    route: "#services",
    slug: "digital-growth-package",
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
    gradient: "from-emerald-500 to-green-600",
  },
  {
    id: 4,
    icon: Users,
    route: "#services",
    slug: "social-media-marketing",
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
    gradient: "from-lime-500 to-lime-600",
  },
  {
    id: 5,
    icon: Mail,
    route: "#services",
    slug: "strategic-marketing-consultation",
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
    gradient: "from-green-500 to-green-600",
  },
  {
    id: 6,
    icon: BarChart3,
    route: "#services",
    slug: "seo-services",
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
    route: "#services",
    slug: "logo-design",
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
    gradient: "from-green-500 to-lime-600",
  },
  {
    id: 8,
    icon: BarChart,
    route: "#services",
    slug: "analytics-reporting",
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
    gradient: "from-orange-500 to-lime-600",
  },
  {
    id: 9,
    icon: FileText,
    route: "#services",
    slug: "content-strategy-writing",
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
    gradient: "from-lime-500 to-red-600",
  },
];

export const portfolioCategories = [
  {
    id: 1,
    title: "Digital Marketing",
    tagline: "Turn Data Into Growth",
    description:
      "Real campaigns. Real results. Real analytics. Explore case studies with verified Meta Business insights, detailed performance metrics, and proven strategies that drive measurable success.",
    icon: Megaphone,
    color: "from-orange-500 to-orange-700",
    hoverColor: "hover:from-orange-600 hover:to-orange-800",
    accentColor: "text-orange-600 dark:text-orange-400",
    borderColor: "border-orange-200 dark:border-orange-800",
    features: [
      "Organic Growth Campaigns",
      "Meta Ads Performance",
      "Lead Generation Funnels",
      "Brand Awareness Strategies",
    ],
    badge: "Case Studies Inside",
    action: "digital-marketing" as PortfolioCategory,
  },
  {
    id: 2,
    title: "Graphics Design",
    tagline: "Where Creativity Meets Purpose",
    description:
      "From concept to creation. Browse stunning visual designs that tell stories, build brands, and captivate audiences across all platforms and mediums.",
    icon: Palette,
    color: "from-orange-500 to-orange-700",
    hoverColor: "hover:from-orange-600 hover:to-orange-800",
    accentColor: "text-orange-600 dark:text-orange-400",
    borderColor: "border-orange-200 dark:border-orange-800",
    features: [
      "Brand Identity & Logos",
      "Social Media Graphics",
      "Marketing Assets",
      "Print Design",
    ],
    badge: "Portfolio Inside",
    action: "graphics-design" as PortfolioCategory,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Tushant Adhikari",
    position: "Reservation Manager",
    company: "Makalu Adventure",
    avatar: "TA",
    rating: 4,
    text: "We worked with him on social media marketing and graphic designs for Makalu Adventure. He created clean visuals and helped manage our online content regularly. His work was reliable and well-suited for our brand, especially considering his 1 year of experience.",
    industry: "Tourism & Travel",
  },
  {
    id: 2,
    name: "Pankaj Panthi",
    position: "CEO",
    company: "Education Consultancy",
    avatar: "PP",
    rating: 5,
    text: "He supported our consultancy with digital marketing and graphic design work. From social media posts to promotional designs, his work was simple, clear, and effective. He understands how to present educational services professionally.",
    industry: "Education",
  },
  {
    id: 3,
    name: "Saroj Baral",
    position: "Manager",
    company: "Education Consultancy",
    avatar: "SB",
    rating: 4,
    text: "We collaborated on marketing materials and online promotions. His graphic designs were clean and his digital marketing support helped maintain our online presence. He is consistent, open to feedback, and improving steadily.",
    industry: "Education",
  },
  {
    id: 4,
    name: "Santi Chetri",
    position: "Senior HR Manager",
    company: "Recruitment Company",
    avatar: "SC",
    rating: 5,
    text: "He helped us with social media creatives and basic digital marketing support for recruitment campaigns. His designs were professional and aligned with our hiring needs. A dedicated and responsible marketer for his experience level.",
    industry: "Recruitment & HR",
  },
];
