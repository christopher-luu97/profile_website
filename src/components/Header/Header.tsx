import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Website Title and some navigation links */}
      <div className="flex items-center">
        <Link to="/" className="font-bold text-xl mr-6">
          CHRIS LUU
        </Link>
        <div className="hidden sm:flex">
          <Link to="/projects" className="mx-2">
            Projects
          </Link>
          <Link to="/blog" className="mx-2">
            Blog
          </Link>
        </div>
      </div>

      {/* Hamburger menu button for small screens */}
      <div className="sm:hidden z-30 relative">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "X" : "☰"} {/* Replace with icons */}
        </button>
      </div>

      {/* Navigation Links - Visible on larger screens */}
      <nav className="hidden sm:flex items-center">
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
      </nav>

      {/* Mobile menu (full-screen overlay) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-20">
          <div
            className="fixed inset-0 bg-black bg-opacity-75"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <nav className="fixed top-0 right-0 bottom-0 w-full bg-gray-800 p-4 flex flex-col justify-between">
            {/* Close button */}
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                X {/* Replace with icon */}
              </button>
            </div>
            {/* Navigation links */}
            <div className="flex flex-col items-center">
              <Link
                to="/"
                className="py-2 px-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="py-2 px-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/blog"
                className="py-2 px-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
            {/* Social links */}
            <div className="flex justify-center pb-4">
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
          </nav>
        </div>
      )}
    </header>
  );
};
