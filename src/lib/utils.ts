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
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const services = [
  {
    id: 1,
    icon: Search,
    route: "#services",
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
