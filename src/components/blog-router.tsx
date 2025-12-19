import { useNavigate } from "react-router-dom"
import { BlogSection } from "./blog-section"

export function BlogRouter() {
  const navigate = useNavigate()

  const handlePostClick = (postId: number) => {
    navigate(`/blog/${postId}`)
  }

  return <BlogSection onPostClick={handlePostClick} />
}