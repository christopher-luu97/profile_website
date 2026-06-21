import React, { useCallback, useEffect, useRef, useState } from "react";
import "./CommandPalette.css";

interface PaletteItem {
  id: string;
  label: string;
  description: string;
  href: string;
}

const ITEMS: PaletteItem[] = [
  { id: "about",        label: "About",        description: "Who I am and what I do",                  href: "#about"        },
  { id: "capabilities", label: "Capabilities",  description: "What I build and how I specialise",       href: "#capabilities"  },
  { id: "experience",   label: "Experience",    description: "Professional background and sectors",     href: "#experience"    },
  { id: "case-studies", label: "Case Studies",  description: "Planned write-ups and technical demos",  href: "#case-studies"  },
  { id: "stack",        label: "Stack",         description: "Languages, tools, and platforms I use",   href: "#stack"         },
  { id: "projects",     label: "Public Builds", description: "Open-source experiments and side work",  href: "#projects"      },
  { id: "contact",      label: "Contact",       description: "Get in touch or find me online",          href: "#contact"       },
];

export const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = query.trim()
    ? ITEMS.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )
    : ITEMS;

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      close();
      // Small delay so the overlay closes before the scroll triggers
      setTimeout(() => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
    },
    [close],
  );

  // Global keyboard shortcut to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
        setActiveIndex(0);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  // Reset active index when filtered list changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const active = listRef.current.querySelector<HTMLLIElement>(
      `[data-index="${activeIndex}"]`,
    );
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIndex]) {
        navigate(filtered[activeIndex].href);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  };

  if (!open) return null;

  return (
    <div
      className="kh-palette__backdrop"
      onClick={close}
      role="presentation"
    >
      <div
        className="kh-palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette — navigate sections"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="kh-palette__search">
          <svg
            className="kh-palette__search-icon"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="kh-palette__input"
            placeholder="Jump to section…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-autocomplete="list"
            aria-controls="kh-palette-list"
            aria-activedescendant={
              filtered[activeIndex] ? `kh-palette-item-${filtered[activeIndex].id}` : undefined
            }
            spellCheck={false}
            autoComplete="off"
          />
          <kbd className="kh-palette__esc-hint">Esc</kbd>
        </div>

        {/* Results list */}
        <ul
          id="kh-palette-list"
          ref={listRef}
          className="kh-palette__list"
          role="listbox"
          aria-label="Sections"
        >
          {filtered.length === 0 ? (
            <li className="kh-palette__empty" role="option" aria-selected="false">
              No sections match &ldquo;{query}&rdquo;
            </li>
          ) : (
            filtered.map((item, index) => (
              <li
                key={item.id}
                id={`kh-palette-item-${item.id}`}
                data-index={index}
                className={`kh-palette__item${index === activeIndex ? " kh-palette__item--active" : ""}`}
                role="option"
                aria-selected={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => navigate(item.href)}
              >
                <span className="kh-palette__item-label">{item.label}</span>
                <span className="kh-palette__item-desc">{item.description}</span>
              </li>
            ))
          )}
        </ul>

        {/* Footer hint */}
        <div className="kh-palette__footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> go</span>
          <span><kbd>Esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
};
