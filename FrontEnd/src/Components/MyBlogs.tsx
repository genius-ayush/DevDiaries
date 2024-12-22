import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

interface BlogPost {
  _id: string;
  title: string;
  summary: string;
  imgUrl?: string;
  createdAt: string;
}

function MyBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = localStorage.getItem("userId"); 

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        if (!userId) {
          setError("User not logged in.");
          setLoading(false);
          return;
        }

        const response = await axios.get<BlogPost[]>(
          `https://dev-diaries-murex.vercel.app/blog/users/${userId}/posts`
        );

        setBlogs(response.data);
      } catch (err) {
        setError("Failed to fetch blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBlogs();
  }, [userId]);

  const handleDelete = async (postId: string) => {
    try {
      await axios.delete(`https://dev-diaries-murex.vercel.app/blog/posts/${postId}`);
      // Update state to remove deleted post
      setBlogs(blogs.filter((blog) => blog._id !== postId));
    } catch (err) {
      console.error("Failed to delete the blog post:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-200">
        Loading your blogs...
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
    <div className="min-h-screen py-8 px-4  text-gray-200">
      <h1 className="text-3xl text-center font-bold mb-6">My Blogs</h1>
      {blogs.length === 0 ? (
        <p className="text-gray-400">You have not written any blogs yet.</p>
      ) : (
        blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            summary={blog.summary}
            imageUrl={blog.imgUrl}
            publishDate={new Date(blog.createdAt).toLocaleDateString()}
            onClick={() => console.log(`Navigating to blog: ${blog._id}`)} // Replace with actual navigation
            onDelete={() => handleDelete(blog._id)} // Pass delete handler
          />
        ))
      )}
    </div>
  );
}

export default MyBlogs;
