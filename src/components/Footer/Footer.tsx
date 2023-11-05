import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#D5D2CD] text-[#9C8B7E] text-center p-4 font-semibold text-xl">
      <p>© {new Date().getFullYear()} Christopher Luu. All Rights Reserved.</p>
    </footer>
  );
};
