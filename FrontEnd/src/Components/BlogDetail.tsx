import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "lucide-react";

interface BlogDetailProps {
  _id: string;
  imgUrl: string;
  title: string;
  content: string;
  author: {
    _id: string;
    email: string;
  };
  createdAt: string;
}

function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogDetailProps | null>(null);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        
        const response = await axios.get<BlogDetailProps>(`https://dev-diaries-murex.vercel.app/blog/posts/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    
    if (id){
      setIsDataLoading(true);
      fetchBlog();
      setIsDataLoading(false);
    } 

  }, [id]);

  if (!blog) {
    return <p className="text-center text-lg text-gray-400 mt-10">Loading blog...</p>;
  }

  return (
    <div className="min-h-screen  text-gray-200">
      {isDataLoading ? <Loader/> :<div className="max-w-4xl mx-auto p-6 bg-gray-800 bg-opacity-70 shadow-lg rounded-lg mt-10">
        <img
          src={blog.imgUrl}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6 border border-gray-700"
        />
        <h1 className="text-4xl font-bold text-gray-100 mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-400 mb-6">
          By <span className="font-semibold text-gray-300">{blog.author.email}</span> | Published on{" "}
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <div className="text-lg text-gray-300 leading-relaxed">{blog.content}</div>
      </div>}
    </div>
  );
}

export default BlogDetail;
