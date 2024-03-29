'use client'
import { BlogCard } from "@/components/BlogCard";
import useBlogs from "@/components/BlogsFetch"

export default function Page() {
  const { blogs } = useBlogs();
  return <div className="flex justify-center">
    <div>
      {blogs && blogs.map(blog =>
        <BlogCard
          id={blog.id}
          authorName={blog.author.name || "Anonymous"}
          title={blog.title}
          content={blog.content}
          publishedData={blog.createdAt}
          key={blog.id}
        />)}
    </div>
  </div>
}
