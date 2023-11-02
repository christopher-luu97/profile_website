import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Home Link */}
        <Link to="/" className="mr-6 font-bold">
          Home
        </Link>

        {/* Social Media Icons */}
        <a href="https://youtube.com" className="mx-2">
          YouTube Icon
        </a>
        <a href="https://github.com" className="mx-2">
          GitHub Icon
        </a>
        <a href="https://linkedin.com" className="mx-2">
          LinkedIn Icon
        </a>
        <a href="https://medium.com" className="mx-2">
          Medium Icon
        </a>
      </div>
      <div>
        {/* Navigation Links */}
        <Link
          to="/projects"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Projects
        </Link>
        <Link
          to="/blog"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Blog
        </Link>
      </div>
    </header>
  );
};
