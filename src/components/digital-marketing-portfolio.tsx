import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  ArrowRight,
  ExternalLink,
  Calendar,
  Target,
  MousePointerClick,
  UserPlus,
  Activity,
  BarChart3,
  X,
  Share2,
  Heart,
  MessageCircle,
  ChevronUp,
  ArrowLeft,
} from "lucide-react";
import { useContactModal } from "../hooks/use-contact-modal";

interface DigitalMarketingPortfolioProps {
  onBack: () => void;
}

export function DigitalMarketingPortfolio({
  onBack,
}: DigitalMarketingPortfolioProps) {
  const { openModal } = useContactModal();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAnalytics, setSelectedAnalytics] = useState<number | null>(
    null
  );
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  // Prevent body scroll when any modal is open
  useEffect(() => {
    if (selectedAnalytics !== null || fullScreenImage !== null) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedAnalytics, fullScreenImage]);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "organic", label: "Social Media Optimization" },
    { id: "paid", label: "Paid Advertisement(Meta Ad)" },
    { id: "paidEngagement", label: "Paid Awareness" },
    { id: "paidLeads", label: "Paid Leads" },
  ];

  const projects = [
    {
      id: 1,
      category: "organic",
      type: "Organic",
      title: "Education Consultancy Organic Growth",
      description:
        "Achieved strong organic growth for an education consultancy through strategic social media optimization.",
      image: "/api/placeholder/400/300",
      metaInsights: {
        views: "75.3k",
        viewers: "60.2K",
        contentInteraction: "2.4K",
        linkClicks: "1.1K",
        followers: "956",
        insightImages: [
          "/project/project1.png",
          "/project/project11.png",
          "/project/project111.png",
        ],
        detailedMetrics: {
          viewsGrowth: "+94.7%",
          avgEngagementRate: "7.8%",
          peakReachDay: "Friday",
          postFrequency: "7/week",
          shares: "639",
          comments: "1.3K",
          likes: "2.4K",
          saves: "0.1K",
          clickThroughRate: "8.25%",
          followerGrowthRate: "+161.7%",
          topAgeGroup: "25-34",
          topGender: "57.2% Male",
          topLocation: "Kathmandu, Nepal",
          videoViews: "75.3K",
          avgWatchTime: "25s",
        },
      },
      timeline: "4 weeks",
      services: ["Social Media Optimization", "Leads Genrate"],
      challenge: "Low organic visibility, poor watchtime, Low engagement rates",
      solution:
        "Developed a data-driven social media strategy by optimizing content formats, improving posting consistency, using relevant hashtags, and targeting the right audience to increase reach, engagement, and lead inquiries organically.",
      note: "This case study is based on real campaign data. Due to client confidentiality and privacy agreements, we cannot disclose specific company details.",
    },
    {
      id: 2,
      category: "paid",
      type: "Paid: Engagement",
      title: "Scalable Lead Growth via Meta Advertising",
      description:
        "Scaled high-intent leads for an education consultancy by targeting the right audience through a data-driven Meta ads strategy.",
      image: "/api/placeholder/400/300",
      metaInsights: {
        messagingConversations: "140",
        cpm: "$0.05",
        amountSpent: "$7.15",
        days: "4 days",
        age: "18-44 years",
        insightImages: [
          "/project/project2.png",
          "/project/project22.png",
          "/project/project222.png",
        ],
        detailedMetrics: {
          viewsGrowth: "+128%",
          avgEngagementRate: "6.5%",
          topAgeGroup: "18-34",
          topGender: "60% Female",
          location: "Nepal",
        },
      },
      timeline: "4 days",
      services: [
        "35–45% improvement in cost efficiency (CPL)",
        "Conversion-focused messaging",
        "12.6× increase in qualified leads",
        "Audience research & segmentation",
      ],
      challenge:
        "New market entry, unknown brand, limited budget for customer acquisition",
      solution:
        "Developed thought leadership content, targeted PPC campaigns, and automated lead nurturing",
      note: "This case study is based on single Meta Advertisement . Due to client confidentiality and privacy agreements, we cannot disclose specific company details.",
    },
    {
      id: 3,
      category: "paidEngagement",
      type: "Paid: Awareness",
      title: "Brand Awareness Campaign Setup",
      description:
        "Designed and executed brand visibility campaigns to increase brand visibility and reach the intended audience using data-driven targeting and optimized creatives.",
      image: "/project/project3.png",
      metaInsights: {
        reach: "93,658",
        cpr: "$0.02",
        amountSpent: "$2.08",
        age: "18-54",
        genderSplit: "57% Male",
        insightImages: [
          "/project/project3.png",
          "/project/project33.png",
          "/project/project333.png",
        ],
        detailedMetrics: {
          viewsGrowth: "+185%",
          avgEngagementRate: "8.2%",
          topAgeGroup: "35-44",
          topGender: "57% Male",
          location: "Nepal",
        },
      },
      timeline: "2 days",
      services: [
        "Brand Awareness Campaign Setup",
        "Reach & Frequency Optimization",
        "Awareness Insights & Reporting",
      ],
      challenge:
        "Poor online visibility, declining foot traffic, competition from delivery apps",
      solution:
        "Optimized Google My Business, created engaging social content, implemented online ordering system",
      note: "This case study is based on real campaign data of specific days. Due to client confidentiality and privacy agreements, we cannot disclose specific company details.",
    },
    {
      id: 4,
      category: "paidLeads",
      type: "Paid: Leads",
      title: "Meta Ads - Lead Generation",
      description:
        "Generated high-intent leads through strategically targeted and conversion-focused Meta ad campaigns.",
      image: "/api/placeholder/400/300",
      metaInsights: {
        leads: "52",
        perMetaLeads: "$0.30",
        amountSpent: "$18.6",
        duration: "6 days",
        targetAge: "18-34 years",
        insightImages: [
          "/project/project4.png",
          "/project/project44.png",
          "/project/project444.png",
        ],
        detailedMetrics: {
          topAgeGroup: "18-54 years",
          topGender: "51% Female",
          location: "Nepal",
        },
      },
      timeline: "6 days",
      services: [
        "Instant Forms & Message Lead Setup",
        "CPL & Lead Quality Optimization",
        "Conversion-Optimized Ad Creatives",
        "Performance Tracking & Lead Reportin",
      ],
      challenge:
        "Saturated fitness app market, low initial downloads, poor user retention",
      solution:
        "Optimized app store presence, partnered with fitness influencers, created viral social campaigns",
      note: "This case study is based on real campaign data of specific time interval. Due to client confidentiality and privacy agreements, we cannot disclose specific company details.",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const selectedProject =
    selectedAnalytics !== null
      ? projects.find((p) => p.id === selectedAnalytics)
      : null;

  return (
    <section
      id="digital-marketing"
      className=" pt-10 py-20 bg-white dark:bg-slate-900 relative overflow-hidden min-h-screen"
    >
      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFullScreenImage(null)}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFullScreenImage(null)}
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={fullScreenImage}
              alt="Meta Business Insights - Full Screen"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            Click anywhere to close
          </div>
        </div>
      )}

      {/* Analytics Dashboard Modal */}
      {selectedProject && (
        <div className="fixed mt-10 inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl z-10">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">
                      Meta Business Analytics ({selectedProject.type})
                    </h3>
                  </div>
                  <p className="text-blue-100 text-lg">
                    {selectedProject.title}
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <Badge className="bg-white/20 backdrop-blur text-white border-white/30">
                      {selectedProject.timeline} Campaign
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedAnalytics(null)}
                  className="text-white hover:bg-white/20 -mr-2 -mt-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="p-6">
              {/* Primary Metrics */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  Primary Metrics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 rounded-xl p-4 border-2 border-blue-200 dark:border-blue-800">
                    {selectedProject.category === "paid" ? (
                      <MessageCircle className="w-8 h-8 text-blue-600 mb-2" />
                    ) : selectedProject.category === "paidLeads" ? (
                      <Users className="w-8 h-8 text-blue-600 mb-2" />
                    ) : (
                      <Eye className="w-8 h-8 text-blue-600 mb-2" />
                    )}
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {selectedProject.category === "paid"
                        ? selectedProject.metaInsights.messagingConversations
                        : selectedProject.category === "paidEngagement"
                        ? selectedProject.metaInsights.reach
                        : selectedProject.category === "paidLeads"
                        ? selectedProject.metaInsights.leads
                        : selectedProject.metaInsights.views}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {selectedProject.category === "paid"
                        ? "Messaging Conversations"
                        : selectedProject.category === "paidEngagement"
                        ? "Reach"
                        : selectedProject.category === "paidLeads"
                        ? "Leads"
                        : "Total Views"}
                    </div>
                    {selectedProject.category !== "paidEngagement" &&
                      selectedProject.category !== "paidLeads" && (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200 text-xs">
                          {
                            selectedProject.metaInsights.detailedMetrics
                              .viewsGrowth
                          }
                        </Badge>
                      )}
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 rounded-xl p-4 border-2 border-green-200 dark:border-green-800">
                    {selectedProject.category === "paid" ||
                    selectedProject.category === "paidEngagement" ||
                    selectedProject.category === "paidLeads" ? (
                      <DollarSign className="w-8 h-8 text-green-600 mb-2" />
                    ) : (
                      <Users className="w-8 h-8 text-green-600 mb-2" />
                    )}
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {selectedProject.category === "paid"
                        ? selectedProject.metaInsights.cpm
                        : selectedProject.category === "paidEngagement"
                        ? selectedProject.metaInsights.cpr
                        : selectedProject.category === "paidLeads"
                        ? selectedProject.metaInsights.perMetaLeads
                        : selectedProject.metaInsights.viewers}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {selectedProject.category === "paid"
                        ? "CPM"
                        : selectedProject.category === "paidEngagement"
                        ? "CPR"
                        : selectedProject.category === "paidLeads"
                        ? "Per Meta Leads"
                        : "Unique Viewers"}
                    </div>
                    {selectedProject.category !== "paidEngagement" &&
                      selectedProject.category !== "paidLeads" && (
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 text-xs">
                          {selectedProject.category === "paid"
                            ? "Cost"
                            : selectedProject.metaInsights.detailedMetrics
                                .avgEngagementRate + " Engaged"}
                        </Badge>
                      )}
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 rounded-xl p-4 border-2 border-purple-200 dark:border-purple-800">
                    {selectedProject.category === "paid" ||
                    selectedProject.category === "paidEngagement" ||
                    selectedProject.category === "paidLeads" ? (
                      <DollarSign className="w-8 h-8 text-purple-600 mb-2" />
                    ) : (
                      <Activity className="w-8 h-8 text-purple-600 mb-2" />
                    )}
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {selectedProject.category === "paid" ||
                      selectedProject.category === "paidEngagement" ||
                      selectedProject.category === "paidLeads"
                        ? selectedProject.metaInsights.amountSpent
                        : selectedProject.metaInsights.contentInteraction}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {selectedProject.category === "paid" ||
                      selectedProject.category === "paidEngagement" ||
                      selectedProject.category === "paidLeads"
                        ? "Amount Spent"
                        : "Interactions"}
                    </div>
                    {selectedProject.category !== "paidEngagement" &&
                      selectedProject.category !== "paidLeads" && (
                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 text-xs">
                          {selectedProject.category === "paid"
                            ? "Budget"
                            : selectedProject.metaInsights.detailedMetrics
                                .avgEngagementRate + " Rate"}
                        </Badge>
                      )}
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50 rounded-xl p-4 border-2 border-orange-200 dark:border-orange-800">
                    {selectedProject.category === "paid" ||
                    selectedProject.category === "paidLeads" ? (
                      <Calendar className="w-8 h-8 text-orange-600 mb-2" />
                    ) : selectedProject.category === "paidEngagement" ? (
                      <Target className="w-8 h-8 text-orange-600 mb-2" />
                    ) : (
                      <MousePointerClick className="w-8 h-8 text-orange-600 mb-2" />
                    )}
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {selectedProject.category === "paid"
                        ? selectedProject.metaInsights.days
                        : selectedProject.category === "paidEngagement"
                        ? selectedProject.metaInsights.age
                        : selectedProject.category === "paidLeads"
                        ? selectedProject.metaInsights.duration
                        : selectedProject.metaInsights.linkClicks}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {selectedProject.category === "paid"
                        ? "Days"
                        : selectedProject.category === "paidEngagement"
                        ? "Top Age Group"
                        : selectedProject.category === "paidLeads"
                        ? "Duration"
                        : "Link Clicks"}
                    </div>
                    {selectedProject.category !== "paidEngagement" &&
                      selectedProject.category !== "paidLeads" && (
                        <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 text-xs">
                          {selectedProject.category === "paid"
                            ? "Duration"
                            : selectedProject.metaInsights.detailedMetrics
                                .clickThroughRate + " CTR"}
                        </Badge>
                      )}
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/50 dark:to-pink-900/50 rounded-xl p-4 border-2 border-pink-200 dark:border-pink-800">
                    {selectedProject.category === "paid" ? (
                      <Target className="w-8 h-8 text-pink-600 mb-2" />
                    ) : selectedProject.category === "paidEngagement" ||
                      selectedProject.category === "paidLeads" ? (
                      <Users className="w-8 h-8 text-pink-600 mb-2" />
                    ) : (
                      <UserPlus className="w-8 h-8 text-pink-600 mb-2" />
                    )}
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {selectedProject.category === "paid"
                        ? selectedProject.metaInsights.age
                        : selectedProject.category === "paidEngagement"
                        ? selectedProject.metaInsights.genderSplit
                        : selectedProject.category === "paidLeads"
                        ? selectedProject.metaInsights.targetAge
                        : selectedProject.metaInsights.followers}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {selectedProject.category === "paid"
                        ? "Age"
                        : selectedProject.category === "paidEngagement"
                        ? "Gender Split"
                        : selectedProject.category === "paidLeads"
                        ? "Target Age"
                        : "New Followers"}
                    </div>
                    {selectedProject.category !== "paidEngagement" &&
                      selectedProject.category !== "paidLeads" && (
                        <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200 text-xs">
                          {selectedProject.category === "paid"
                            ? "Range"
                            : selectedProject.metaInsights.detailedMetrics
                                .followerGrowthRate}
                        </Badge>
                      )}
                  </div>
                </div>
              </div>

              {/* Engagement Breakdown */}
              {selectedProject.category !== "paid" &&
                selectedProject.category !== "paidEngagement" &&
                selectedProject.category !== "paidLeads" && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-purple-600" />
                      Engagement Breakdown
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                        <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" />
                        <div className="text-xl font-bold text-slate-900 dark:text-white">
                          {selectedProject.metaInsights.detailedMetrics.likes}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Likes
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                        <MessageCircle className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                        <div className="text-xl font-bold text-slate-900 dark:text-white">
                          {
                            selectedProject.metaInsights.detailedMetrics
                              .comments
                          }
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Comments
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                        <Share2 className="w-6 h-6 mx-auto mb-2 text-green-500" />
                        <div className="text-xl font-bold text-slate-900 dark:text-white">
                          {selectedProject.metaInsights.detailedMetrics.shares}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Shares
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                        <BarChart3 className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                        <div className="text-xl font-bold text-slate-900 dark:text-white">
                          {selectedProject.metaInsights.detailedMetrics.saves}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Saves
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              {/* Performance Insights */}
              {selectedProject.category !== "paid" &&
                selectedProject.category !== "paidEngagement" &&
                selectedProject.category !== "paidLeads" && (
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Video Performance */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                        <Eye className="w-5 h-5 mr-2 text-indigo-600" />
                        Performance
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 dark:text-slate-400">
                            Views
                          </span>
                          <span className="font-bold text-slate-900 dark:text-white">
                            {
                              selectedProject.metaInsights.detailedMetrics
                                .videoViews
                            }
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 dark:text-slate-400">
                            Avg Watch Time
                          </span>
                          <span className="font-bold text-slate-900 dark:text-white">
                            {
                              selectedProject.metaInsights.detailedMetrics
                                .avgWatchTime
                            }
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 dark:text-slate-400">
                            Engagement Rate
                          </span>
                          <span className="font-bold text-green-600 dark:text-green-400">
                            {
                              selectedProject.metaInsights.detailedMetrics
                                .avgEngagementRate
                            }
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Publishing Insights */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                        Publishing Insights
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 dark:text-slate-400">
                            Post Frequency
                          </span>
                          <span className="font-bold text-slate-900 dark:text-white">
                            {
                              selectedProject.metaInsights.detailedMetrics
                                .postFrequency
                            }
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 dark:text-slate-400">
                            Peak Reach Day
                          </span>
                          <span className="font-bold text-slate-900 dark:text-white">
                            {
                              selectedProject.metaInsights.detailedMetrics
                                .peakReachDay
                            }
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 dark:text-slate-400">
                            Growth Rate
                          </span>
                          <span className="font-bold text-green-600 dark:text-green-400">
                            {
                              selectedProject.metaInsights.detailedMetrics
                                .followerGrowthRate
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              {/* Audience Demographics */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  Audience Demographics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg p-5 border border-green-200 dark:border-green-800">
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {selectedProject.category === "paid" ||
                      selectedProject.category === "paidEngagement" ||
                      selectedProject.category === "paidLeads"
                        ? "Age"
                        : "Top Age Group"}
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedProject.metaInsights.detailedMetrics.topAgeGroup}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {selectedProject.category === "paid" ||
                      selectedProject.category === "paidEngagement" ||
                      selectedProject.category === "paidLeads"
                        ? "Range"
                        : "Years old"}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-lg p-5 border border-pink-200 dark:border-pink-800">
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Gender Split
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedProject.metaInsights.detailedMetrics.topGender}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Primary audience
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/30 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {selectedProject.category === "paid" ||
                      selectedProject.category === "paidEngagement" ||
                      selectedProject.category === "paidLeads"
                        ? "Location"
                        : "Top Location"}
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedProject.category === "paid" ||
                      selectedProject.category === "paidEngagement" ||
                      selectedProject.category === "paidLeads"
                        ? selectedProject.metaInsights.detailedMetrics.location
                        : selectedProject.metaInsights.detailedMetrics
                            .topLocation}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Primary market
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Chart Visualization */}
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Performance Trends & Analytics
                  </div>
                  <Badge className="text-xs">
                    {selectedProject.metaInsights.insightImages.length}{" "}
                    Screenshots
                  </Badge>
                </h4>

                {/* Horizontal Scrollable Gallery */}
                <div className="relative">
                  <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-slate-200 dark:scrollbar-track-slate-600">
                    {selectedProject.metaInsights.insightImages.map(
                      (image, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] snap-start"
                        >
                          <div
                            className="relative rounded-lg overflow-hidden border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl group"
                            onClick={() => setFullScreenImage(image)}
                          >
                            {/* Screenshot Container */}
                            <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 flex items-center justify-center">
                              <img
                                src={image}
                                alt={`${
                                  selectedProject.title
                                } - Meta Business Insights ${index + 1}`}
                                className="w-full h-full object-cover"
                              />

                              {/* Hover overlay with zoom icon */}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                                  <div className="bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg">
                                    <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Image number badge */}
                            <div className="absolute top-2 left-2">
                              <Badge className="bg-blue-600 text-white shadow-lg text-xs">
                                {index + 1} /{" "}
                                {
                                  selectedProject.metaInsights.insightImages
                                    .length
                                }
                              </Badge>
                            </div>

                            {/* Verified badge */}
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-green-500 text-white shadow-lg text-xs">
                                <ChevronUp className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Scroll indicator for mobile */}
                  {selectedProject.metaInsights.insightImages.length > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-2 md:hidden">
                      {selectedProject.metaInsights.insightImages.map(
                        (_, index) => (
                          <div
                            key={index}
                            className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"
                          />
                        )
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4 text-sm">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <BarChart3 className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      Real Meta Business Suite Analytics
                    </span>
                    <span className="sm:hidden">Meta Analytics</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>Click to view full screen</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end pt-4 border-t border-slate-200 dark:border-slate-700">
                <Button
                  variant="outline"
                  onClick={() => setSelectedAnalytics(null)}
                  className="px-6"
                >
                  Close Dashboard
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6"
                  onClick={() => openModal("Request Full Analytics Report")}
                >
                  Request Full Report
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
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
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-4">
            Digital Marketing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Digital Marketing
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Real results from real campaigns. Explore my data-driven digital
            marketing strategies that have driven measurable growth for
            businesses.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                  : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
              } transition-all duration-300`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Project Info */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.timeline}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Meta Business Insights Section */}
                <div
                  className="mb-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => setSelectedAnalytics(project.id)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Meta Business Insights ({project?.type})
                    </h4>
                    <Badge
                      variant="secondary"
                      className="ml-auto text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
                    >
                      Verified
                    </Badge>
                  </div>

                  {/* Insights Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-2.5 text-center border border-slate-200 dark:border-slate-700">
                      {project.category === "paid" ? (
                        <MessageCircle className="w-4 h-4 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                      ) : project.category === "paidLeads" ? (
                        <Users className="w-4 h-4 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <Eye className="w-4 h-4 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                      )}
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {project.category === "paid"
                          ? project.metaInsights.messagingConversations
                          : project.category === "paidEngagement"
                          ? project.metaInsights.reach
                          : project.category === "paidLeads"
                          ? project.metaInsights.leads
                          : project.metaInsights.views}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {project.category === "paid"
                          ? "Messages"
                          : project.category === "paidEngagement"
                          ? "Reach"
                          : project.category === "paidLeads"
                          ? "Leads"
                          : "Views"}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg p-2.5 text-center border border-slate-200 dark:border-slate-700">
                      {project.category === "paid" ||
                      project.category === "paidEngagement" ||
                      project.category === "paidLeads" ? (
                        <DollarSign className="w-4 h-4 mx-auto mb-1 text-green-600 dark:text-green-400" />
                      ) : (
                        <Users className="w-4 h-4 mx-auto mb-1 text-green-600 dark:text-green-400" />
                      )}
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {project.category === "paid"
                          ? project.metaInsights.cpm
                          : project.category === "paidEngagement"
                          ? project.metaInsights.cpr
                          : project.category === "paidLeads"
                          ? project.metaInsights.perMetaLeads
                          : project.metaInsights.viewers}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {project.category === "paid"
                          ? "CPM"
                          : project.category === "paidEngagement"
                          ? "CPR"
                          : project.category === "paidLeads"
                          ? "Per Lead"
                          : "Viewers"}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg p-2.5 text-center border border-slate-200 dark:border-slate-700">
                      {project.category === "paid" ||
                      project.category === "paidEngagement" ||
                      project.category === "paidLeads" ? (
                        <DollarSign className="w-4 h-4 mx-auto mb-1 text-purple-600 dark:text-purple-400" />
                      ) : (
                        <Activity className="w-4 h-4 mx-auto mb-1 text-purple-600 dark:text-purple-400" />
                      )}
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {project.category === "paid" ||
                        project.category === "paidEngagement" ||
                        project.category === "paidLeads"
                          ? project.metaInsights.amountSpent
                          : project.metaInsights.contentInteraction}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {project.category === "paid" ||
                        project.category === "paidEngagement" ||
                        project.category === "paidLeads"
                          ? "Spent"
                          : "Interactions"}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-2.5 text-center border border-slate-200 dark:border-slate-700">
                      {project.category === "paid" ||
                      project.category === "paidLeads" ? (
                        <Calendar className="w-4 h-4 mx-auto mb-1 text-orange-600 dark:text-orange-400" />
                      ) : project.category === "paidEngagement" ? (
                        <Target className="w-4 h-4 mx-auto mb-1 text-orange-600 dark:text-orange-400" />
                      ) : (
                        <MousePointerClick className="w-4 h-4 mx-auto mb-1 text-orange-600 dark:text-orange-400" />
                      )}
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {project.category === "paid"
                          ? project.metaInsights.days
                          : project.category === "paidEngagement"
                          ? project.metaInsights.age
                          : project.category === "paidLeads"
                          ? project.metaInsights.duration
                          : project.metaInsights.linkClicks}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {project.category === "paid"
                          ? "Days"
                          : project.category === "paidEngagement"
                          ? "Age"
                          : project.category === "paidLeads"
                          ? "Duration"
                          : "Link Clicks"}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg p-2.5 text-center border border-slate-200 dark:border-slate-700">
                      {project.category === "paid" ? (
                        <Target className="w-4 h-4 mx-auto mb-1 text-pink-600 dark:text-pink-400" />
                      ) : project.category === "paidEngagement" ||
                        project.category === "paidLeads" ? (
                        <Users className="w-4 h-4 mx-auto mb-1 text-pink-600 dark:text-pink-400" />
                      ) : (
                        <UserPlus className="w-4 h-4 mx-auto mb-1 text-pink-600 dark:text-pink-400" />
                      )}
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {project.category === "paid"
                          ? project.metaInsights.age
                          : project.category === "paidEngagement"
                          ? project.metaInsights.genderSplit
                          : project.category === "paidLeads"
                          ? project.metaInsights.targetAge
                          : project.metaInsights.followers}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {project.category === "paid"
                          ? "Age"
                          : project.category === "paidEngagement"
                          ? "Gender Split"
                          : project.category === "paidLeads"
                          ? "Target Age"
                          : "Followers"}
                      </div>
                    </div>
                  </div>

                  {/* Click to view details indicator */}
                  <div className="mt-3 flex items-center justify-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                    <BarChart3 className="w-4 h-4" />
                    <span>Click to view detailed analytics</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-sm italic text-slate-700 dark:text-slate-300 mb-2">
                    {project.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Scale Your Digital Presence?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how data-driven digital marketing strategies can
            transform your business growth.
          </p>
          <Button
            size="lg"
            onClick={() => openModal("Digital Marketing Consultation")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold cursor-pointer"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
