import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  summary: string;
  imageUrl?: string;
  publishDate: string;
  chaptersCount?: number;
  onClick: () => void;
  onDelete?: () => void; // Optional delete handler
}

const BlogCard = ({ title, summary, imageUrl, publishDate, chaptersCount, onClick, onDelete }: BlogCardProps) => {
  return (
    <div className="flex justify-center mb-5">
      <motion.div whileHover={{ scale: 1.02 }}>
        <div className="w-3/5 transition-all duration-300">
          <div className="flex items-center gap-6 p-4 rounded-lg text-white h-64 border-gray-800 border-[0.1px] bg-gray-800">
            {/* Image Container */}
            <div className="flex-shrink-0">
              <div className="w-44 h-44 overflow-hidden rounded-lg">
                <img
                  src={imageUrl || "/api/placeholder/64/64"}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 cursor-pointer" onClick={onClick}>
                {title}
              </h3>
              {summary && <p className="text-gray-400 text-base mb-3 line-clamp-2">{summary}</p>}
            </div>

            {/* Right Side Info */}
            <div className="flex-shrink-0 text-right">
              {chaptersCount && (
                <div className="text-base font-medium mb-2">{chaptersCount} Chapters</div>
              )}
              <div className="text-base text-gray-400 mb-2">{publishDate}</div>

              {/* Optional Delete Button */}
              {onDelete && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering onClick
                    onDelete();
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogCard;