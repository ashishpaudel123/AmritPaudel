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
    gradient: "from-blue-500 to-cyan-600",
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
    gradient: "from-emerald-500 to-teal-600",
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
    gradient: "from-pink-500 to-rose-600",
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
    gradient: "from-purple-500 to-violet-600",
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
    gradient: "from-purple-500 to-pink-600",
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
    gradient: "from-blue-500 to-cyan-600",
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
    gradient: "from-rose-500 to-red-600",
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
    color: "from-pink-600 to-purple-600",
    hoverColor: "hover:from-pink-700 hover:to-purple-700",
    accentColor: "text-pink-600 dark:text-pink-400",
    borderColor: "border-pink-200 dark:border-pink-800",
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
    action: "graphics-design" as PortfolioCategory,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStore",
    avatar: "SJ",
    rating: 5,
    text: "Amrit completely transformed our e-commerce business. In just 6 months, we saw a 340% increase in revenue and became the market leader in our niche. His strategic approach and attention to detail are unmatched.",
    industry: "E-commerce",
  },
  {
    id: 2,
    name: "Mike Chen",
    position: "Founder",
    company: "CloudSync",
    avatar: "MC",
    rating: 5,
    text: "From zero to market leader! Amrit's content marketing and PPC strategies helped us acquire over 1,500 qualified leads in our first year. The ROI has been absolutely incredible - best investment we've made.",
    industry: "SaaS",
  },
  {
    id: 3,
    name: "David Rodriguez",
    position: "Owner",
    company: "GreenLeaf Restaurants",
    avatar: "DR",
    rating: 5,
    text: "Our restaurant chain was struggling with declining foot traffic. Amrit's local SEO and social media strategy increased our online orders by 250% and brought customers back to our locations. Amazing results!",
    industry: "Food & Beverage",
  },
  {
    id: 4,
    name: "Emma Thompson",
    position: "Co-founder",
    company: "FitTrack",
    avatar: "ET",
    rating: 5,
    text: "Amrit took our fitness app from zero to 50,000 downloads in just 5 months. His influencer marketing and ASO strategies were game-changing. We couldn't be happier with the results and ongoing partnership.",
    industry: "Mobile Apps",
  },
  {
    id: 5,
    name: "Lisa Park",
    position: "Marketing Director",
    company: "EcoHome Solutions",
    avatar: "LP",
    rating: 5,
    text: "Working with Amrit has been transformative for our B2B lead generation. His LinkedIn marketing and content strategy generated 200% more qualified leads than our previous agency, at half the cost.",
    industry: "Home Improvement",
  },
  {
    id: 6,
    name: "James Wilson",
    position: "CEO",
    company: "MedTech Innovations",
    avatar: "JW",
    rating: 5,
    text: "Amrit's expertise in healthcare marketing compliance while driving results is exceptional. We achieved 180% growth in qualified physician leads while maintaining all regulatory requirements. Highly recommend!",
    industry: "Healthcare",
  },
];
