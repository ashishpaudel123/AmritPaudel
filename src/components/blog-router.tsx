import { useState } from "react"
import { BlogSection } from "./blog-section"
import { BlogDetail } from "./blog-detail"

export function BlogRouter() {
  const [currentView, setCurrentView] = useState<'list' | 'detail'>('list')
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null)

  const showDetail = (postId: number) => {
    setSelectedPostId(postId)
    setCurrentView('detail')
    // No automatic scrolling - let user stay at current position
  }

  const showList = () => {
    setCurrentView('list')
    setSelectedPostId(null)
    // Scroll to blog section when returning to list
    const blogSection = document.getElementById('blog')
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (currentView === 'detail') {
    return <BlogDetail postId={selectedPostId} onBackClick={showList} onPostClick={showDetail} />
  }

  return <BlogSection onPostClick={showDetail} />
}