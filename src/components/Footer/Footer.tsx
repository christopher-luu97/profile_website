import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white text-center p-4">
      <p>© {new Date().getFullYear()} Christopher Luu. All Rights Reserved.</p>
    </footer>
  );
};
