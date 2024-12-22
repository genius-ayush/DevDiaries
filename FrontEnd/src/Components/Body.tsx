import  { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";

// Define the type for a blog post
interface BlogPost {
  _id: string;
  imgUrl : string ; 
  title: string;
  summary: string;
  author: {
    _id: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

function Body() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog posts from the backend
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get<BlogPost[]>("http://localhost:3000/blog/posts");
        setBlogPosts(response.data); // Set the blog posts data
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    
    <div className="mb-48">
      {blogPosts.map((post) => (
        <BlogCard
        onClick={() => navigate(`/blog/${post._id}`)}
          key={post._id}
          title={post.title} // Assuming "content" is the blog title; adjust as needed
          summary={post.summary}
          imageUrl={post.imgUrl}// Placeholder image for now
          publishDate={new Date(post.createdAt).toLocaleDateString()} // Format the date
        />
      ))}
    </div>
  );
}

export default Body;
