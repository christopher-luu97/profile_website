import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="kh-footer">
      <div className="kh-footer__inner">
        <div className="kh-footer__line" />
        <p className="kh-footer__text">
          © {new Date().getFullYear()} Christopher Luu
        </p>
        <p className="kh-footer__subtext">
          Technical engineering, systems thinking, and modern digital delivery
        </p>
      </div>
    </footer>
  );
};
