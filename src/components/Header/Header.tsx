import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mediaLinks } from "./mediaLinks";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMac, setIsMac] = useState<boolean>(false);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.platform));
  }, []);

  const openPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }),
    );
  };

  const closeMenu = (): void => setIsMenuOpen(false);
  const toggleMenu = (): void => setIsMenuOpen((prev) => !prev);

  const renderMediaLinks = (iconClassName = "kh-header__social-icon") =>
    mediaLinks.map((link) => (
      <a
        key={link.name}
        href={link.link}
        className="kh-header__social-link"
        aria-label={link.description}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={link.icon} alt={link.name} className={iconClassName} />
      </a>
    ));

  return (
    <>
      <header className="kh-header">
        <div className="kh-header__inner">
          <div className="kh-header__brand">
            <Link to="/" className="kh-header__logo" onClick={closeMenu}>
              <span className="kh-header__logo-text">CHRIS LUU</span>
            </Link>
          </div>

          <nav className="kh-header__desktop-nav" aria-label="Site navigation">
            <button
              type="button"
              className="kh-header__palette-btn"
              onClick={openPalette}
              aria-label="Open command palette"
            >
              <span className="kh-header__palette-hint">
                {isMac ? "⌘" : "Ctrl"}K
              </span>
              <span className="kh-header__palette-label">Jump to…</span>
            </button>
            {renderMediaLinks()}
          </nav>

          <button
            type="button"
            onClick={toggleMenu}
            className="kh-header__menu-button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`kh-header__menu-line ${isMenuOpen ? "is-open" : ""}`}
            />
            <span
              className={`kh-header__menu-line ${isMenuOpen ? "is-open" : ""}`}
            />
            <span
              className={`kh-header__menu-line ${isMenuOpen ? "is-open" : ""}`}
            />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="kh-mobile-menu" role="dialog" aria-modal="true">
          <div className="kh-mobile-menu__backdrop" onClick={closeMenu} />

          <div className="kh-mobile-menu__panel">
            <div className="kh-mobile-menu__top">
              <p className="kh-mobile-menu__eyebrow">MENU</p>
              <button
                type="button"
                onClick={closeMenu}
                className="kh-mobile-menu__close"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <div className="kh-mobile-menu__content">
              <Link to="/" className="kh-mobile-menu__link" onClick={closeMenu}>
                HOME
              </Link>

              <div className="kh-mobile-menu__coming-soon">
                <p className="kh-mobile-menu__coming-soon-title">
                  More sections coming soon
                </p>
                <p className="kh-mobile-menu__coming-soon-text">
                  Projects and blog sections are in the works, showcasing my
                  work and thoughts on software, systems, and delivery.
                </p>
              </div>
            </div>

            <div className="kh-mobile-menu__footer">
              <div className="kh-mobile-menu__socials">
                {renderMediaLinks("kh-mobile-menu__social-icon")}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
