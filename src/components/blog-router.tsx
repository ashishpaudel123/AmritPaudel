import { useNavigate } from "react-router-dom"
import { BlogSection } from "./blog-section"

export function BlogRouter() {
  const navigate = useNavigate()

  const handlePostClick = (postId: number) => {
    // Save current scroll position before navigating
    sessionStorage.setItem('blogScrollPosition', window.scrollY.toString())
    navigate(`/blog/${postId}`)
  }

  return <BlogSection onPostClick={handlePostClick} />
}