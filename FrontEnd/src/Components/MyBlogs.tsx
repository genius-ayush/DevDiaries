import BlogCard from "./BlogCard"


function MyBlogs() {
  return (
    <div className="min-h-screen  py-8 px-4">
      <BlogCard 
        title="Getting Started with React"
        summary="Learn the fundamentals of React, including components, props, and state management in this comprehensive guide..."
        imageUrl="https://picsum.photos/200/300"
        publishDate="December 21, 2024"
      />
    </div>
  )
}

export default MyBlogs