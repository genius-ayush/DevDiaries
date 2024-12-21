import { NotebookText  } from "lucide-react";
import React from "react";



const Footer: React.FC = () => {
  return (
    <footer className="  text-white py-10 border-gray-700 border-t-[0.1px]">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4 w-2/3">
        {/* Brand Section */}

        <div className="mb-6 md:mb-0">

          <div className="flex items-center">
            <NotebookText className='text-white ' />

            <span className="text-lg md:text-2xl font-bold tracking-tight text-foreground hidden md:block text-white">DevDiaries</span>
          </div>
          <p className="mt-2 text-sm text-gray-200">because every line of code tells a story.</p>
        </div>

        {/* Dev Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Dev Links</h3>
          <ul>
            <li>
              <a href="#" className="text-sm hover:underline">App</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">Report</a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul>
            <li>
              <a href="#" className="text-sm hover:underline">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">Refund & Cancellation</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
