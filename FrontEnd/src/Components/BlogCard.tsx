
import { motion } from "framer-motion";
interface BlogCardProps {
    title: string;
    summary: string;
    imageUrl?: string;
    publishDate: string;
    chaptersCount?: number;
}

const BlogCard = ({ title, summary, imageUrl, publishDate, chaptersCount }: BlogCardProps) => {
    return (
        <div className='flex justify-center mb-5'>
           
                <motion.a
                whileHover={{ scale: 1.02 }}>
                <div className='flex justify-center'>
                <div className="w-3/5  transition-all duration-300 justify-center">
                    
                    <div className="flex items-center  gap-6 p-4 rounded-lg border-gray-700 border-[0.1px] text-white h-64">
                        {/* Image Container */}
                        <div className="flex-shrink-0">
                            <div className="w-44 h-44 overflow-hidden rounded-lg">
                                <img
                                    src={imageUrl || "/api/placeholder/64/64"}
                                    alt={title}
                                    className="w-full h-full object-cover "
                                />
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-3">{title}</h3>
                            {summary && (
                                <p className="text-gray-400 text-base mb-3 line-clamp-2">{summary}</p>
                            )}
                        </div>

                        {/* Right Side Info */}
                        <div className="flex-shrink-0 text-right">
                            {chaptersCount && (
                                <div className="text-base font-medium mb-2">
                                    {chaptersCount} Chapters
                                </div>
                            )}
                            <div className="text-base text-gray-400">
                                {publishDate}
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </motion.a>
        </div>
    );
};

export default BlogCard;
