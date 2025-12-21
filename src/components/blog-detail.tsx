import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Eye,
  MessageCircle,
  ThumbsUp,
  Bookmark,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect } from "react";

interface BlogDetailProps {
  postId?: number | null;
  onBackClick?: () => void;
  onPostClick?: (postId: number) => void;
}

export function BlogDetail({
  postId = 1,
  onBackClick,
  onPostClick,
}: BlogDetailProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(247);

  // Comprehensive blog posts database
  const blogPosts = [
    {
      id: 1,
      title: "10 Digital Marketing Trends That Will Dominate 2025",
      excerpt:
        "Discover the latest trends in digital marketing that will shape the industry this year. From AI-powered campaigns to voice search optimization.",
      content: `
        <p>The digital marketing landscape is evolving at an unprecedented pace, and 2025 promises to bring revolutionary changes that will reshape how businesses connect with their audiences. As we navigate through this dynamic environment, understanding these emerging trends becomes crucial for maintaining competitive advantage.</p>

        <h2 id="ai-personalization">1. AI-Powered Personalization at Scale</h2>
        <p>Artificial Intelligence is no longer a futuristic concept—it's here and transforming how we approach marketing personalization. In 2025, we're seeing AI tools that can analyze customer behavior patterns in real-time, creating hyper-personalized experiences that feel almost telepathic in their accuracy.</p>
        
        <blockquote>
          "The future of marketing isn't about reaching everyone—it's about reaching the right person with the right message at the exact right moment."
        </blockquote>

        <p>Machine learning algorithms are becoming sophisticated enough to predict customer needs before customers themselves realize them. This level of predictive personalization is driving conversion rates up by an average of 340% across industries.</p>

        <h2 id="voice-search">2. Voice Search Optimization Revolution</h2>
        <p>With over 55% of households now owning smart speakers, voice search optimization has moved from nice-to-have to absolutely essential. The way people search using voice differs dramatically from text-based queries, requiring a complete rethink of SEO strategies.</p>

        <h3>Key Voice Search Optimization Strategies:</h3>
        <ul>
          <li>Focus on conversational, long-tail keywords</li>
          <li>Optimize for local "near me" searches</li>
          <li>Create FAQ-style content that answers direct questions</li>
          <li>Implement schema markup for better search understanding</li>
        </ul>

        <h2 id="interactive-content">3. Interactive Content Experiences</h2>
        <p>Static content is becoming obsolete. Modern consumers crave interactive experiences that engage multiple senses and provide immediate value. We're seeing a surge in:</p>

        <h3>Emerging Interactive Formats:</h3>
        <ul>
          <li>AR/VR product demonstrations</li>
          <li>Interactive infographics and data visualizations</li>
          <li>Gamified learning experiences</li>
          <li>Real-time polling and Q&A sessions</li>
        </ul>

        <p>Brands implementing interactive content are seeing engagement rates increase by up to 590% compared to traditional static content.</p>

        <h2 id="privacy-first">4. Privacy-First Marketing Strategies</h2>
        <p>As third-party cookies phase out and privacy regulations tighten globally, marketers must pivot to privacy-first strategies. This shift is forcing innovation in how we collect, process, and utilize customer data.</p>

        <h3>Privacy-Compliant Approaches:</h3>
        <ul>
          <li>First-party data collection through value exchanges</li>
          <li>Contextual advertising renaissance</li>
          <li>Zero-party data strategies</li>
          <li>Transparent consent management</li>
        </ul>

        <h2 id="micro-influencer">5. Micro-Influencer Partnerships</h2>
        <p>The influencer marketing landscape is maturing, with brands shifting focus from mega-influencers to micro and nano-influencers who offer higher engagement rates and more authentic connections with niche audiences.</p>

        <p>Micro-influencers (1K-100K followers) are delivering 60% higher engagement rates than their mega-influencer counterparts, while costing 90% less per campaign.</p>

        <h2>Conclusion: Preparing for the Future</h2>
        <p>Success in 2025's digital marketing landscape requires agility, authenticity, and a deep understanding of evolving consumer behaviors. Brands that embrace these trends while maintaining a human-centered approach will not just survive—they'll thrive.</p>

        <p>The key is to start implementing these strategies gradually, testing and iterating based on your unique audience needs. Remember, the best marketing trend is the one that genuinely serves your customers better.</p>
      `,
      author: "Amrit Paudel",
      authorBio:
        "Digital Marketing Strategist & Growth Consultant with 8+ years of experience helping businesses scale through data-driven marketing strategies.",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2025-01-15",
      readTime: "8 min read",
      views: 2450,
      comments: 23,
      category: "Trends",
      tags: [
        "AI Marketing",
        "Voice Search",
        "Personalization",
        "Privacy",
        "Influencer Marketing",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      lastUpdated: "2025-01-16",
    },
    {
      id: 2,
      title: "How to Increase Your ROI with Advanced PPC Strategies",
      excerpt:
        "Learn proven techniques to maximize your return on investment through strategic pay-per-click advertising campaigns.",
      content: `
        <p>Pay-per-click advertising remains one of the most effective ways to drive immediate traffic and conversions. However, with increasing competition and rising ad costs, maximizing ROI requires sophisticated strategies and deep understanding of platform dynamics.</p>

        <h2 id="ppc-roi-fundamentals">Understanding PPC ROI Fundamentals</h2>
        <p>Before diving into advanced strategies, it's crucial to establish a clear understanding of what ROI means in the context of PPC campaigns. Return on Investment isn't just about immediate sales—it encompasses lifetime customer value, brand awareness, and market positioning.</p>

        <blockquote>
          "The best PPC campaigns don't just generate clicks—they generate profitable customer relationships that compound over time."
        </blockquote>

        <h2 id="advanced-bidding">Advanced Bidding Strategies</h2>
        <p>Modern PPC platforms offer sophisticated automated bidding options that can significantly improve performance when implemented correctly.</p>

        <h3>Smart Bidding Techniques:</h3>
        <ul>
          <li>Target ROAS (Return on Ad Spend) optimization</li>
          <li>Maximize conversions with target CPA</li>
          <li>Enhanced CPC for manual campaigns</li>
          <li>Maximize conversion value strategies</li>
        </ul>

        <h2 id="audience-targeting">Audience Segmentation and Targeting</h2>
        <p>Advanced audience targeting goes beyond basic demographics. Successful PPC campaigns leverage multiple data sources to create highly specific audience segments.</p>

        <h3>Advanced Targeting Methods:</h3>
        <ul>
          <li>In-market audiences for purchase intent</li>
          <li>Custom intent audiences based on keywords</li>
          <li>Lookalike audiences from high-value customers</li>
          <li>Retargeting with dynamic messaging</li>
        </ul>

        <h2 id="landing-page-optimization">Landing Page Optimization</h2>
        <p>Your landing page is where conversions happen. A well-optimized landing page can double or triple your conversion rates, dramatically improving ROI.</p>

        <h2 id="performance-analysis">Performance Analysis and Optimization</h2>
        <p>Continuous optimization is the key to sustained PPC success. Regular analysis and adjustment of campaigns based on performance data ensures maximum efficiency.</p>

        <h2 id="ppc-conclusion">Conclusion</h2>
        <p>Advanced PPC strategies require ongoing testing, optimization, and adaptation. By implementing these techniques systematically, businesses can achieve significant improvements in ROI while scaling their advertising efforts effectively.</p>
      `,
      author: "Amrit Paudel",
      authorBio:
        "Digital Marketing Strategist & Growth Consultant with 8+ years of experience helping businesses scale through data-driven marketing strategies.",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2025-01-12",
      readTime: "12 min read",
      views: 1890,
      comments: 31,
      category: "PPC",
      tags: [
        "PPC",
        "Google Ads",
        "ROI",
        "Conversion Optimization",
        "Bidding Strategies",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      lastUpdated: "2025-01-13",
    },
    {
      id: 3,
      title: "The Complete Guide to SEO Content Strategy",
      excerpt:
        "Master the art of creating content that ranks high on search engines while providing genuine value to your audience.",
      content: `
        <p>Search Engine Optimization has evolved far beyond keyword stuffing and meta tags. Today's SEO requires a holistic approach that combines technical expertise, content excellence, and user experience optimization.</p>

        <h2 id="modern-seo">Understanding Modern SEO</h2>
        <p>Modern SEO is about creating content that serves user intent while meeting search engine requirements. This balance requires understanding both your audience and how search algorithms evaluate content quality.</p>

        <blockquote>
          "The best SEO strategy is to create content so valuable that people can't help but link to it and share it."
        </blockquote>

        <h2 id="keyword-research">Keyword Research and Intent Mapping</h2>
        <p>Effective keyword research goes beyond search volume. Understanding search intent—whether informational, navigational, commercial, or transactional—is crucial for content success.</p>

        <h3>Advanced Keyword Research Techniques:</h3>
        <ul>
          <li>Semantic keyword clustering</li>
          <li>Competitor gap analysis</li>
          <li>Long-tail keyword mining</li>
          <li>Voice search optimization</li>
        </ul>

        <h2 id="content-structure">Content Structure and Optimization</h2>
        <p>Well-structured content helps both users and search engines understand your message. Proper use of headings, internal linking, and semantic markup improves rankings and user experience.</p>

        <h2 id="technical-seo">Technical SEO Fundamentals</h2>
        <p>Technical SEO ensures search engines can crawl, index, and understand your content effectively. This includes site speed, mobile optimization, and structured data implementation.</p>

        <h2 id="link-building">Content Promotion and Link Building</h2>
        <p>Creating great content is only half the battle. Strategic promotion and earning high-quality backlinks amplifies your content's reach and authority.</p>

        <h2>Measuring SEO Success</h2>
        <p>Effective SEO requires ongoing measurement and optimization. Key metrics include organic traffic growth, keyword rankings, and most importantly, conversions from organic search.</p>

        <h2 id="seo-conclusion">Conclusion</h2>
        <p>SEO success comes from consistently creating valuable content that serves user needs while following search engine best practices. Focus on quality over quantity, and results will follow.</p>
      `,
      author: "Amrit Paudel",
      authorBio:
        "Digital Marketing Strategist & Growth Consultant with 8+ years of experience helping businesses scale through data-driven marketing strategies.",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2025-01-08",
      readTime: "15 min read",
      views: 3200,
      comments: 45,
      category: "SEO",
      tags: [
        "SEO",
        "Content Strategy",
        "Keyword Research",
        "Technical SEO",
        "Link Building",
      ],
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
      lastUpdated: "2025-01-09",
    },
    {
      id: 4,
      title: "Social Media Marketing: Building Authentic Connections",
      excerpt:
        "Explore strategies for creating meaningful relationships with your audience across all social media platforms.",
      content: `
        <p>Social media marketing has evolved from simple broadcasting to sophisticated relationship building. Success now depends on creating authentic connections and providing real value to your community.</p>

        <h2 id="authenticity-imperative">The Authenticity Imperative</h2>
        <p>Modern consumers can spot inauthentic content instantly. Building genuine relationships requires transparency, consistency, and a deep understanding of your audience's needs and preferences.</p>

        <blockquote>
          "Authentic social media marketing isn't about selling—it's about serving your community and building trust over time."
        </blockquote>

        <h2 id="platform-strategies">Platform-Specific Strategies</h2>
        <p>Each social platform has its unique culture, audience expectations, and content formats. Successful brands adapt their messaging while maintaining consistent brand identity.</p>

        <h3>Platform Best Practices:</h3>
        <ul>
          <li>LinkedIn: Professional insights and thought leadership</li>
          <li>Instagram: Visual storytelling and behind-the-scenes content</li>
          <li>Twitter: Real-time engagement and industry conversations</li>
          <li>Facebook: Community building and customer service</li>
          <li>TikTok: Creative, entertaining, and trend-aware content</li>
        </ul>

        <h2 id="content-creation">Content Creation and Curation</h2>
        <p>The 80/20 rule applies to social content: 80% should provide value without selling, while 20% can be promotional. This balance maintains audience engagement while achieving business objectives.</p>

        <h2 id="community-management">Community Management Excellence</h2>
        <p>Active community management transforms followers into advocates. Responding promptly, engaging authentically, and addressing concerns publicly demonstrates commitment to customer satisfaction.</p>

        <h2 id="social-analytics">Social Media Analytics and Optimization</h2>
        <p>Data-driven social media strategies outperform intuition-based approaches. Regular analysis of engagement metrics, reach, and conversion data guides content optimization and strategy refinement.</p>

        <h2 id="influencer-partnerships">Influencer Partnerships</h2>
        <p>Strategic influencer collaborations can exponentially expand reach and credibility. Focus on micro-influencers with engaged audiences that align with your target demographic.</p>

        <h2 id="social-conclusion">Conclusion</h2>
        <p>Successful social media marketing prioritizes relationship building over direct selling. By consistently providing value and engaging authentically, brands can build loyal communities that drive long-term business success.</p>
      `,
      author: "Amrit Paudel",
      authorBio:
        "Digital Marketing Strategist & Growth Consultant with 8+ years of experience helping businesses scale through data-driven marketing strategies.",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2025-01-05",
      readTime: "10 min read",
      views: 1560,
      comments: 19,
      category: "Social Media",
      tags: [
        "Social Media",
        "Community Management",
        "Content Marketing",
        "Influencer Marketing",
        "Brand Building",
      ],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      lastUpdated: "2025-01-06",
    },
    {
      id: 5,
      title: "Email Marketing Automation That Actually Converts",
      excerpt:
        "Discover how to set up email sequences that nurture leads and turn prospects into loyal customers.",
      content: `
        <p>Email marketing remains one of the highest ROI digital marketing channels, but success requires sophisticated automation strategies that deliver the right message at the right time to the right person.</p>

        <h2 id="email-automation-foundation">The Foundation of Effective Email Automation</h2>
        <p>Successful email automation starts with deep audience segmentation and behavior tracking. Understanding your subscribers' journey allows you to create highly targeted sequences that feel personal and relevant.</p>

        <blockquote>
          "The most effective email campaigns don't feel like marketing—they feel like helpful communication from a trusted advisor."
        </blockquote>

        <h2>Advanced Segmentation Strategies</h2>
        <p>Beyond basic demographics, advanced segmentation considers behavior, engagement patterns, purchase history, and predictive analytics to create highly targeted audience groups.</p>

        <h3>Key Segmentation Criteria:</h3>
        <ul>
          <li>Engagement level and email interaction history</li>
          <li>Purchase behavior and customer lifetime value</li>
          <li>Website behavior and content preferences</li>
          <li>Geographic location and time zone considerations</li>
          <li>Industry, company size, and role-based factors</li>
        </ul>

        <h2 id="email-sequences">Conversion-Focused Email Sequences</h2>
        <p>Different automation sequences serve different purposes in the customer journey. Welcome sequences, nurture campaigns, and re-engagement flows each require unique approaches and messaging strategies.</p>

        <h2 id="email-personalization">Personalization Beyond First Names</h2>
        <p>Modern email personalization uses dynamic content, behavioral triggers, and predictive recommendations to create uniquely relevant experiences for each subscriber.</p>

        <h2 id="email-testing">Testing and Optimization</h2>
        <p>Continuous A/B testing of subject lines, send times, content formats, and call-to-action placement drives incremental improvements that compound over time.</p>

        <h2 id="email-deliverability">Deliverability and Reputation Management</h2>
        <p>Technical excellence in email delivery ensures your carefully crafted messages reach subscriber inboxes. This includes proper authentication, list hygiene, and engagement monitoring.</p>

        <h2 id="email-conclusion">Conclusion</h2>
        <p>Email marketing automation success comes from combining strategic thinking, technical execution, and continuous optimization. Focus on providing value at every touchpoint, and conversions will follow naturally.</p>
      `,
      author: "Amrit Paudel",
      authorBio:
        "Digital Marketing Strategist & Growth Consultant with 8+ years of experience helping businesses scale through data-driven marketing strategies.",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2025-01-02",
      readTime: "11 min read",
      views: 2100,
      comments: 28,
      category: "Email Marketing",
      tags: [
        "Email Marketing",
        "Marketing Automation",
        "Lead Nurturing",
        "Conversion Optimization",
        "Personalization",
      ],
      image:
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=400&fit=crop",
      lastUpdated: "2025-01-03",
    },
    {
      id: 6,
      title: "Analytics Deep Dive: Measuring What Really Matters",
      excerpt:
        "Learn to identify and track the metrics that actually impact your business growth and revenue.",
      content: `
        <p>In an era of data abundance, the challenge isn't collecting metrics—it's identifying which metrics actually drive business decisions and focusing measurement efforts on those key indicators.</p>

        <h2 id="vanity-metrics">Beyond Vanity Metrics</h2>
        <p>While follower counts and page views might look impressive, they don't necessarily correlate with business success. Effective analytics focus on metrics that directly tie to revenue and business objectives.</p>

        <blockquote>
          "The most dangerous metrics are those that make you feel good but don't drive business results."
        </blockquote>

        <h2 id="kpi-indicators">Establishing Key Performance Indicators</h2>
        <p>Effective KPIs are specific, measurable, achievable, relevant, and time-bound. They should directly connect marketing activities to business outcomes.</p>

        <h3>Essential Marketing Metrics:</h3>
        <ul>
          <li>Customer Acquisition Cost (CAC) by channel</li>
          <li>Customer Lifetime Value (CLV) and retention rates</li>
          <li>Attribution modeling for multi-touch journeys</li>
          <li>Conversion rates at each funnel stage</li>
          <li>Revenue attribution and ROI by campaign</li>
        </ul>

        <h2 id="attribution-modeling">Advanced Attribution Modeling</h2>
        <p>Understanding the customer journey requires sophisticated attribution models that account for multiple touchpoints and interactions across channels and devices.</p>

        <h2 id="predictive-analytics">Predictive Analytics and Forecasting</h2>
        <p>Historical data analysis enables predictive modeling that can forecast future performance, identify trends, and guide strategic decision-making.</p>

        <h2 id="real-time-reporting">Real-Time Reporting and Dashboards</h2>
        <p>Automated reporting systems ensure stakeholders have access to current performance data, enabling rapid response to market changes and optimization opportunities.</p>

        <h2 id="data-governance">Data Quality and Governance</h2>
        <p>Accurate analytics depend on clean, consistent data collection and processing. Implementing proper data governance ensures reliability and actionability of insights.</p>

        <h2 id="analytics-conclusion">Conclusion</h2>
        <p>Effective marketing analytics transform raw data into actionable insights that drive business growth. Focus on metrics that matter, and let data guide your strategic decisions for optimal results.</p>
      `,
      author: "Amrit Paudel",
      authorBio:
        "Digital Marketing Strategist & Growth Consultant with 8+ years of experience helping businesses scale through data-driven marketing strategies.",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2024-12-28",
      readTime: "14 min read",
      views: 1750,
      comments: 22,
      category: "Analytics",
      tags: [
        "Analytics",
        "KPIs",
        "Data Analysis",
        "Attribution Modeling",
        "Performance Marketing",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      lastUpdated: "2024-12-29",
    },
  ];

  // Get the current blog post or default to first one
  const currentPost =
    blogPosts.find((post) => post.id === postId) || blogPosts[0];

  // Handler functions
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const scrollToSection = (sectionId: string) => {
    // Use multiple attempts with increasing delays to handle dangerouslySetInnerHTML timing
    const attemptScroll = (attempt = 1, maxAttempts = 5) => {
      const element = document.getElementById(sectionId);
      console.log(
        `Attempt ${attempt}: Looking for element with ID:`,
        sectionId,
        "Found:",
        element
      );

      if (element) {
        // Calculate offset to account for fixed header
        const headerOffset = 120; // Adjust based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        console.log("Successfully scrolled to:", sectionId);
      } else if (attempt < maxAttempts) {
        // Try again with exponential backoff
        setTimeout(() => attemptScroll(attempt + 1, maxAttempts), attempt * 50);
      } else {
        console.error(
          "Element not found after",
          maxAttempts,
          "attempts. ID:",
          sectionId
        );
        // Debug: show all available IDs
        const allIds = Array.from(document.querySelectorAll("[id]")).map(
          (el) => el.id
        );
        console.log("Available IDs on page:", allIds);

        // Alternative: try to find the element by text content
        const headings = Array.from(document.querySelectorAll("h2, h3"));
        const matchingHeading = headings.find((h) =>
          h.textContent?.includes(sectionId.replace("-", " "))
        );
        if (matchingHeading) {
          console.log("Found heading by text content, scrolling to it");
          matchingHeading.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    attemptScroll();
  };

  // Debug effect to check when content is rendered
  useEffect(() => {
    console.log("BlogDetail rendered with postId:", postId);
    // Check for elements after component mounts
    setTimeout(() => {
      const allIds = Array.from(document.querySelectorAll("[id]")).map(
        (el) => el.id
      );
      console.log("All IDs found after mount:", allIds);
    }, 200);
  }, [postId]);

  // Generate table of contents based on current post
  const generateTOC = () => {
    switch (currentPost.id) {
      case 1:
        return [
          {
            id: "ai-personalization",
            title: "1. AI-Powered Personalization at Scale",
          },
          {
            id: "voice-search",
            title: "2. Voice Search Optimization Revolution",
          },
          {
            id: "interactive-content",
            title: "3. Interactive Content Experiences",
          },
          {
            id: "privacy-first",
            title: "4. Privacy-First Marketing Strategies",
          },
          { id: "micro-influencer", title: "5. Micro-Influencer Partnerships" },
        ];
      case 2:
        return [
          {
            id: "ppc-roi-fundamentals",
            title: "Understanding PPC ROI Fundamentals",
          },
          { id: "advanced-bidding", title: "Advanced Bidding Strategies" },
          {
            id: "audience-targeting",
            title: "Audience Segmentation and Targeting",
          },
          {
            id: "landing-page-optimization",
            title: "Landing Page Optimization",
          },
          {
            id: "performance-analysis",
            title: "Performance Analysis and Optimization",
          },
          { id: "ppc-conclusion", title: "Conclusion" },
        ];
      case 3:
        return [
          { id: "modern-seo", title: "Understanding Modern SEO" },
          {
            id: "keyword-research",
            title: "Keyword Research and Intent Mapping",
          },
          {
            id: "content-structure",
            title: "Content Structure and Optimization",
          },
          { id: "technical-seo", title: "Technical SEO Fundamentals" },
          { id: "link-building", title: "Content Promotion and Link Building" },
          { id: "seo-conclusion", title: "Conclusion" },
        ];
      case 4:
        return [
          {
            id: "authenticity-imperative",
            title: "The Authenticity Imperative",
          },
          { id: "platform-strategies", title: "Platform-Specific Strategies" },
          { id: "content-creation", title: "Content Creation and Curation" },
          {
            id: "community-management",
            title: "Community Management Excellence",
          },
          {
            id: "social-analytics",
            title: "Social Media Analytics and Optimization",
          },
          { id: "influencer-partnerships", title: "Influencer Partnerships" },
          { id: "social-conclusion", title: "Conclusion" },
        ];
      case 5:
        return [
          {
            id: "email-automation-foundation",
            title: "The Foundation of Effective Email Automation",
          },
          {
            id: "email-sequences",
            title: "Conversion-Focused Email Sequences",
          },
          {
            id: "email-personalization",
            title: "Personalization Beyond First Names",
          },
          { id: "email-testing", title: "Testing and Optimization" },
          {
            id: "email-deliverability",
            title: "Deliverability and Reputation Management",
          },
          { id: "email-conclusion", title: "Conclusion" },
        ];
      case 6:
        return [
          { id: "vanity-metrics", title: "Beyond Vanity Metrics" },
          {
            id: "kpi-indicators",
            title: "Establishing Key Performance Indicators",
          },
          {
            id: "attribution-modeling",
            title: "Advanced Attribution Modeling",
          },
          {
            id: "predictive-analytics",
            title: "Predictive Analytics and Forecasting",
          },
          {
            id: "real-time-reporting",
            title: "Real-Time Reporting and Dashboards",
          },
          { id: "data-governance", title: "Data Quality and Governance" },
          { id: "analytics-conclusion", title: "Conclusion" },
        ];
      default:
        // Default TOC for other posts - can be customized per post
        return [
          { id: "introduction", title: "Introduction" },
          { id: "main-content", title: "Main Content" },
          { id: "conclusion", title: "Conclusion" },
        ];
    }
  };

  const tocItems = generateTOC();

  // Generate related posts dynamically by filtering out current post and taking first 3
  const relatedPosts = blogPosts
    .filter((post) => post.id !== currentPost.id)
    .slice(0, 3)
    .map((post) => ({
      id: post.id,
      title: post.title,
      image: post.image,
      category: post.category,
      readTime: post.readTime,
      date: post.date,
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float animation-delay-2000"></div>

      {/* Header Navigation */}
      <div className="container mx-auto px-4 pt-10 pb-8 relative">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-600/50 hover:bg-blue-50 dark:hover:bg-slate-700/60"
            onClick={() => onBackClick?.()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-slate-600 dark:text-slate-400">
            <a
              href="#blog"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Blog
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-slate-900 dark:text-white">
              {currentPost.category}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Article */}
          <article className="lg:col-span-8">
            {/* Article Header */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-200/50 dark:border-slate-600/50 overflow-hidden shadow-xl mb-8">
              {/* Featured Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={currentPost.image}
                  alt={currentPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border-blue-200/50 dark:border-purple-400/30 text-blue-600 dark:text-purple-300">
                    {currentPost.category}
                  </Badge>
                </div>
              </div>

              {/* Article Meta */}
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  {currentPost.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <img
                      src={currentPost.authorImage}
                      alt={currentPost.author}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {currentPost.author}
                      </p>
                      <p className="text-sm">Digital Marketing Consultant</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(currentPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {currentPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {currentPost.views.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-700/30 rounded-2xl border border-slate-200/30 dark:border-slate-600/30">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLike}
                      className={`transition-all duration-300 ${
                        isLiked
                          ? "text-red-500 hover:text-red-600"
                          : "text-slate-600 dark:text-slate-400 hover:text-red-500"
                      }`}
                    >
                      <ThumbsUp
                        className={`w-4 h-4 mr-2 ${
                          isLiked ? "fill-current" : ""
                        }`}
                      />
                      {likes}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-500"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {currentPost.comments}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`transition-all duration-300 ${
                        isBookmarked
                          ? "text-yellow-500 hover:text-yellow-600"
                          : "text-slate-600 dark:text-slate-400 hover:text-yellow-500"
                      }`}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          isBookmarked ? "fill-current" : ""
                        }`}
                      />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400 mr-2">
                      Share:
                    </span>
                    {/* Social Links */}
                    <div>
                      <div className="flex space-x-3">
                        {/* LinkedIn - Official LinkedIn Blue Background */}
                        <a
                          href="#"
                          className="group flex items-center justify-center w-7 h-7 bg-[#0077B5]/80 backdrop-blur-md hover:bg-[#0077B5] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                        >
                          <svg
                            className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="white"
                              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                            />
                          </svg>
                        </a>
                        {/* X - Official Black Background */}
                        <a
                          href="#"
                          className="group flex items-center justify-center w-7 h-7 bg-black/80 backdrop-blur-md hover:bg-black rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black/25 hover:scale-105"
                        >
                          <svg
                            className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="white"
                              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                            />
                          </svg>
                        </a>
                        {/* Instagram - Official Instagram Gradient Background */}
                        <a
                          href="#"
                          className="group flex items-center justify-center w-7 h-7 bg-gradient-to-tr from-[#833AB4] via-[#C13584] to-[#E1306C] backdrop-blur-md hover:from-[#7c2d8e] hover:via-[#b12a75] hover:to-[#d42c5c] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105"
                        >
                          <svg
                            className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                            fill="white"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                          </svg>
                        </a>
                        {/* YouTube - Official Red Background */}
                        <a
                          href="#"
                          className="group flex items-center justify-center w-7 h-7 bg-[#FF0000]/80 backdrop-blur-md hover:bg-[#FF0000] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
                        >
                          <svg
                            className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                            fill="white"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-200/50 dark:border-slate-600/50 p-8 md:p-12 shadow-xl mb-8">
              <div
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50/50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />
            </div>

            {/* Author Bio */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-200/50 dark:border-slate-600/50 p-8 shadow-xl mb-8">
              <div className="flex items-start gap-6">
                <img
                  src={currentPost.authorImage}
                  alt={currentPost.author}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    About {currentPost.author}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {currentPost.authorBio}
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Follow Author
                  </Button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-600/50 p-6 shadow-xl">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-1 cursor-pointer"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl border border-blue-200/50 dark:border-purple-400/30 p-6 shadow-xl">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Stay Updated
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Get the latest digital marketing insights delivered to your
                  inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white placeholder-slate-500 text-sm"
                  />
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-600/50 p-6 shadow-xl">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group cursor-pointer"
                      onClick={() => onPostClick?.(post.id)}
                    >
                      <div className="flex gap-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex-1 min-w-0">
                          <Badge className="mb-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-200/50 dark:border-purple-400/30 text-blue-600 dark:text-purple-300">
                            {post.category}
                          </Badge>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-1">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <span>
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border-slate-200/50 dark:border-slate-600/50 hover:bg-blue-50 dark:hover:bg-slate-700/60"
                  onClick={() => onBackClick?.()}
                >
                  View All Articles
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom Padding */}
      <div className="h-20"></div>
    </div>
  );
}
