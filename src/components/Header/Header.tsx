import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mediaLinks } from "./mediaLinks";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderMediaLinks = (additionalStyles = "") =>
    mediaLinks.map((link) => (
      <a
        key={link.name}
        href={link.link} // Replace with actual URLs when available
        className={`mx-4 ${additionalStyles}`}
        aria-label={link.description}
        target="_blank" // to open link in new tab
        rel="noopener noreferrer"
      >
        <img src={link.icon} alt={link.name} className="w-6 h-6" />
      </a>
    ));

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl ml-9">
            CHRIS LUU
          </Link>

          {/** TODO: Create Projects and Blog page */}

          {/* <div className="hidden sm:flex">
          <Link to="/projects" className="mx-2">
            Projects
          </Link>
          <Link to="/blog" className="mx-2">
            Blog
          </Link>
        </div> */}
        </div>

        {/* Hamburger menu button for small screens */}
        <div className="sm:hidden z-30 relative">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "X" : "☰"} {/* Replace with icons */}
          </button>
        </div>

        {/* Navigation Links - Visible on larger screens */}
        <nav className="hidden sm:flex items-center">{renderMediaLinks()}</nav>

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
                <p className="py-2 px-4 text-white">
                  Projects and Blog coming soon!
                </p>
                {/** TODO: Create Projects and Blog page */}
                {/* <Link
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
              </Link> */}
              </div>
              {/* Social links */}
              <div className="flex justify-center pb-4">
                {renderMediaLinks("w-8 h-8")} {/* Adjust size as necessary */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
