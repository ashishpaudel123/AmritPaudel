import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Eye,
  MessageCircle,
  TrendingUp,
  Search,
  Filter,
  X
} from "lucide-react"
import { useState, useMemo } from "react"

interface BlogSectionProps {
  onPostClick?: (postId: number) => void
}

export function BlogSection({ onPostClick }: BlogSectionProps = {}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Posts")
  const [showAllCategories, setShowAllCategories] = useState(false)
  const blogPosts = [
    {
      id: 1,
      title: "10 Digital Marketing Trends That Will Dominate 2025",
      excerpt: "Discover the latest trends in digital marketing that will shape the industry this year. From AI-powered campaigns to voice search optimization.",
      author: "Amrit Paudel",
      date: "2025-01-15",
      readTime: "8 min read",
      views: 2450,
      comments: 23,
      category: "Trends",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "How to Increase Your ROI with Advanced PPC Strategies",
      excerpt: "Learn proven techniques to maximize your return on investment through strategic pay-per-click advertising campaigns.",
      author: "Amrit Paudel",
      date: "2025-01-12",
      readTime: "12 min read",
      views: 1890,
      comments: 31,
      category: "PPC",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "The Complete Guide to SEO Content Strategy",
      excerpt: "Master the art of creating content that ranks high on search engines while providing genuine value to your audience.",
      author: "Amrit Paudel",
      date: "2025-01-08",
      readTime: "15 min read",
      views: 3200,
      comments: 45,
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media Marketing: Building Authentic Connections",
      excerpt: "Explore strategies for creating meaningful relationships with your audience across all social media platforms.",
      author: "Amrit Paudel",
      date: "2025-01-05",
      readTime: "10 min read",
      views: 1560,
      comments: 19,
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "Email Marketing Automation That Actually Converts",
      excerpt: "Discover how to set up email sequences that nurture leads and turn prospects into loyal customers.",
      author: "Amrit Paudel",
      date: "2025-01-02",
      readTime: "11 min read",
      views: 2100,
      comments: 28,
      category: "Email Marketing",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Analytics Deep Dive: Measuring What Really Matters",
      excerpt: "Learn to identify and track the metrics that actually impact your business growth and revenue.",
      author: "Amrit Paudel",
      date: "2024-12-28",
      readTime: "14 min read",
      views: 1750,
      comments: 22,
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      featured: false,
    }
  ]

  const categories = [
    { name: "All Posts", count: 24 },
    { name: "Trends", count: 6 },
    { name: "SEO", count: 8 },
    { name: "PPC", count: 5 },
    { name: "Social Media", count: 7 },
    { name: "Email Marketing", count: 4 },
    { name: "Analytics", count: 3 }
  ]

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = searchQuery.trim() === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
    return filtered
  }, [searchQuery, selectedCategory])

  const featuredPost = filteredPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  // Clear search function
  const clearSearch = () => {
    setSearchQuery("")
    setSelectedCategory("All Posts")
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200 dark:border-purple-400/30 text-blue-600 dark:text-purple-300">
            Knowledge Hub
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">Digital Marketing</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Blog & Insights
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with the latest digital marketing strategies, insights, and industry trends. 
            Learn from real-world case studies and actionable advice.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2">
              {(showAllCategories ? categories : categories.slice(0, 4)).map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-md ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                      : 'bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-600/50 hover:bg-blue-50 dark:hover:bg-slate-700/60'
                  }`}
                >
                  {category.name}
                  {category.name !== "All Posts" && (
                    <span className="ml-1 text-xs opacity-75">({category.count})</span>
                  )}
                </button>
              ))}
              {!showAllCategories && categories.length > 4 && (
                <button 
                  onClick={() => setShowAllCategories(true)}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700/60 transition-all duration-300 flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  More
                </button>
              )}
              {showAllCategories && (
                <button 
                  onClick={() => setShowAllCategories(false)}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700/60 transition-all duration-300 flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Less
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              Featured Article
            </h3>
            <div 
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-200/50 dark:border-slate-600/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              onClick={() => onPostClick?.(featuredPost.id)}
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-200 dark:border-purple-400/30 text-blue-600 dark:text-purple-300">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {featuredPost.title}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredPost.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {featuredPost.comments}
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-transform duration-300">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Results Info */}
        {(searchQuery || selectedCategory !== "All Posts") && (
          <div className="mb-8">
            <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-200/30 dark:border-slate-600/30 p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {filteredPosts.length === 0 ? (
                        "No articles found"
                      ) : (
                        <>
                          Showing <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
                        </>
                      )}
                      {searchQuery && (
                        <> for "<span className="font-medium text-slate-900 dark:text-white">{searchQuery}</span>"</>
                      )}
                      {selectedCategory !== "All Posts" && (
                        <> in <span className="font-medium text-slate-900 dark:text-white">{selectedCategory}</span></>
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
        {filteredPosts.length === 0 && (searchQuery || selectedCategory !== "All Posts") && (
          <div className="text-center py-16">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-200/50 dark:border-slate-600/50 p-12 shadow-xl max-w-md mx-auto">
              <div className="text-slate-400 dark:text-slate-500 mb-4">
                <Search className="w-16 h-16 mx-auto opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">No articles found</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We couldn't find any articles matching your search criteria. Try adjusting your search terms or browse all articles.
              </p>
              <Button 
                onClick={clearSearch}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Clear Search
              </Button>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {regularPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-600/50 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => onPostClick?.(post.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border-blue-200/50 dark:border-purple-400/30 text-blue-600 dark:text-purple-300">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/50 dark:border-slate-600/50">
                  <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 group-hover:translate-x-1 transition-transform duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
          </div>
        )}

        {/* Load More & Newsletter */}
        {regularPosts.length > 0 && (
          <div className="text-center space-y-8">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
              Load More Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl border border-blue-200/50 dark:border-purple-400/30 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Stay Updated with Latest Insights
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Get weekly digital marketing tips and industry trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white placeholder-slate-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}