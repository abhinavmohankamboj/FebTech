import React from "react";
import { FaHome, FaRegBell, FaDownload } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-52 border-r border-gray-300 dark:border-gray-700 h-screen p-4 space-y-4">
      <Link to="/" className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
        <FaHome/> <span>Home</span>
      </Link>
      <Link to="/shorts" className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
        <SiYoutubeshorts /> <span>Shorts</span>
      </Link>
      <Link to="/subscriptions" className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
        <FaRegBell /> <span>Subscriptions</span>
      </Link>

    <Link
                to="/login"
                className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded"
              >
            <FaSignInAlt/><span>Sign in</span>
              </Link>
      
      
      <Link to="/downloads" className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
        <FaDownload /> <span>Downloads</span>
      </Link>
    </aside>
  );
}
export default Sidebar;
