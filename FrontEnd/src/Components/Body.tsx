import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";

// Define the type for a blog post
interface BlogPost {
  _id: string;
  imgUrl: string;
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog posts from the backend
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get<BlogPost[]>(
          "https://dev-diaries-murex.vercel.app/blog/posts"
        );
        setBlogPosts(response.data); // Set the blog posts data
      } catch (err) {
        setError("Failed to fetch blog posts.");
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-200">
        Loading blog posts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 text-gray-200">
      <h1 className="text-3xl text-center font-bold mb-6">All Blogs</h1>
      {blogPosts.length === 0 ? (
        <p className="text-gray-400">No blogs available at the moment.</p>
      ) : (
        blogPosts.map((post) => (
          <BlogCard
            onClick={() => navigate(`/blog/${post._id}`)}
            key={post._id}
            title={post.title}
            summary={post.summary}
            imageUrl={post.imgUrl} // Placeholder image for now
            publishDate={new Date(post.createdAt).toLocaleDateString()} // Format the date
          />
        ))
      )}
    </div>
  );
}

export default Body;
