import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Filter, X } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

interface BlogSectionProps {
  onPostClick?: (postId: number) => void;
}

export function BlogSection({ onPostClick }: BlogSectionProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(4);

  // Reset visible posts when search or category changes
  useEffect(() => {
    setVisiblePosts(4);
  }, [searchQuery, selectedCategory]);

  const blogPosts = [
    {
      id: 1,
      title: "10 Digital Marketing Trends That Will Dominate 2025",
      excerpt:
        "Discover the latest trends in digital marketing that will shape the industry this year. From AI-powered campaigns to voice search optimization.",
      author: "Amritya",
      date: "2025-01-15",
      readTime: "8 min read",
      views: 2450,
      comments: 23,
      category: "Trends",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "How to Increase Your ROI with Advanced PPC Strategies",
      excerpt:
        "Learn proven techniques to maximize your return on investment through strategic pay-per-click advertising campaigns.",
      author: "Amritya",
      date: "2025-01-12",
      readTime: "12 min read",
      views: 1890,
      comments: 31,
      category: "PPC",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "The Complete Guide to SEO Content Strategy",
      excerpt:
        "Master the art of creating content that ranks high on search engines while providing genuine value to your audience.",
      author: "Amritya",
      date: "2025-01-08",
      readTime: "15 min read",
      views: 3200,
      comments: 45,
      category: "SEO",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media Marketing: Building Authentic Connections",
      excerpt:
        "Explore strategies for creating meaningful relationships with your audience across all social media platforms.",
      author: "Amritya",
      date: "2025-01-05",
      readTime: "10 min read",
      views: 1560,
      comments: 19,
      category: "Social Media",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "Email Marketing Automation That Actually Converts",
      excerpt:
        "Discover how to set up email sequences that nurture leads and turn prospects into loyal customers.",
      author: "Amritya",
      date: "2025-01-02",
      readTime: "11 min read",
      views: 2100,
      comments: 28,
      category: "Email Marketing",
      image:
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Analytics Deep Dive: Measuring What Really Matters",
      excerpt:
        "Learn to identify and track the metrics that actually impact your business growth and revenue.",
      author: "Amritya",
      date: "2024-12-28",
      readTime: "14 min read",
      views: 1750,
      comments: 22,
      category: "Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      featured: false,
    },
  ];

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  const categories = [
    { name: "All Posts", count: blogPosts.length },
    { name: "Trends", count: categoryCounts["Trends"] || 0 },
    { name: "SEO", count: categoryCounts["SEO"] || 0 },
    { name: "PPC", count: categoryCounts["PPC"] || 0 },
    { name: "Social Media", count: categoryCounts["Social Media"] || 0 },
    { name: "Email Marketing", count: categoryCounts["Email Marketing"] || 0 },
    { name: "Analytics", count: categoryCounts["Analytics"] || 0 },
  ];

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Posts" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
    return filtered;
  }, [searchQuery, selectedCategory]);

  const regularPosts = filteredPosts.filter((post) => !post.featured);

  // Get visible posts based on the current limit
  const displayedPosts = regularPosts.slice(0, visiblePosts);
  const hasMorePosts = regularPosts.length > visiblePosts;

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("All Posts");
  };

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-green-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-green-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-400/20 to-lime-400/20 rounded-full blur-xl animate-float animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Badge className="mb-4 bg-orange-100 border-orange-200 dark:bg-orange-900/30 dark:border-orange-700/40 text-orange-700 dark:text-orange-300">
            Knowledge Hub
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">
              Digital Marketing
            </span>
            <br />
            <span className="bg-orange-600 bg-clip-text text-transparent animate-gradient">
              Blog & Insights
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with the latest digital marketing
            strategies, insights, and industry trends. Learn from real-world
            case studies and actionable advice.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div
          className="mb-12"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2">
              {(showAllCategories ? categories : categories.slice(0, 4)).map(
                (category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-md cursor-pointer ${
                      selectedCategory === category.name
                        ? "bg-orange-600 text-white shadow-lg"
                        : "bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-600/50 hover:bg-orange-50 dark:hover:bg-slate-700/60"
                    }`}
                  >
                    {category.name}
                    {category.name !== "All Posts" && (
                      <span className="ml-1 text-xs opacity-75">
                        ({category.count})
                      </span>
                    )}
                  </button>
                ),
              )}
              {!showAllCategories && categories.length > 4 && (
                <button
                  onClick={() => setShowAllCategories(true)}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-700/60 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Filter className="w-4 h-4" />
                  More
                </button>
              )}
              {showAllCategories && (
                <button
                  onClick={() => setShowAllCategories(false)}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-700/60 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  Less
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Results Info */}
        {(searchQuery || selectedCategory !== "All Posts") && (
          <div className="mb-8">
            <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-200/30 dark:border-slate-600/30 p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {filteredPosts.length === 0 ? (
                        "No articles found"
                      ) : (
                        <>
                          Showing{" "}
                          <span className="font-semibold text-orange-600 dark:text-orange-400">
                            {filteredPosts.length}
                          </span>{" "}
                          article{filteredPosts.length !== 1 ? "s" : ""}
                        </>
                      )}
                      {searchQuery && (
                        <>
                          {" "}
                          for "
                          <span className="font-medium text-slate-900 dark:text-white">
                            {searchQuery}
                          </span>
                          "
                        </>
                      )}
                      {selectedCategory !== "All Posts" && (
                        <>
                          {" "}
                          in{" "}
                          <span className="font-medium text-slate-900 dark:text-white">
                            {selectedCategory}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
                {(searchQuery || selectedCategory !== "All Posts") && (
                  <Button
                    onClick={clearSearch}
                    variant="ghost"
                    size="sm"
                    className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                  >
                    Clear filters
                    <X className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {filteredPosts.length === 0 &&
          (searchQuery || selectedCategory !== "All Posts") && (
            <div className="text-center py-16">
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-200/50 dark:border-slate-600/50 p-12 shadow-xl max-w-md mx-auto">
                <div className="text-slate-400 dark:text-slate-500 mb-4">
                  <Search className="w-16 h-16 mx-auto opacity-50" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  No articles found
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  We couldn't find any articles matching your search criteria.
                  Try adjusting your search terms or browse all articles.
                </p>
                <Button
                  onClick={clearSearch}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Clear Search
                </Button>
              </div>
            </div>
          )}

        {/* Blog Grid */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {displayedPosts.map((post, index) => (
              <article
                key={post.id}
                className="group rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] cursor-pointer border-2"
                style={{
                  borderColor: "#e2e8f0",
                }}
                onClick={() => onPostClick?.(post.id)}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay={index * 300}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left Side - Image */}
                  <div className="md:w-1/2 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <div className="absolute top-6 left-6 z-10"></div>
                    <img
                      loading="lazy"
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full min-h-[200px] md:min-h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Right Side - Content */}
                  <div
                    className={`md:w-1/2 p-5 flex flex-col justify-between ${
                      index % 2 === 0
                        ? "bg-white dark:bg-slate-800"
                        : "bg-white dark:bg-slate-800"
                    }`}
                  >
                    {/* Title and Excerpt */}
                    <div className="flex-1">
                      <h3 className="text-2xl text-black dark:text-neutral-100 font-semibold mb-6 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                      <div className="h-0.5 w-12 bg-orange-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-600"></div>
                      <span className="text-base font-semibold text-orange-600 dark:text-orange-500">
                        Read More
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More & Newsletter */}
        {regularPosts.length > 0 && (
          <div className="text-center space-y-8">
            {hasMorePosts && (
              <Button
                size="lg"
                onClick={loadMorePosts}
                className="bg-orange-600 hover:bg-orange-700 px-8"
              >
                Load More Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
