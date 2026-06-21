import React from "react";
import { mediaLinks } from "../Header/mediaLinks";

export const ContactSection: React.FC = () => {
  const linkedin = mediaLinks.find((l) => l.name === "LinkedIn");
  const github = mediaLinks.find((l) => l.name === "GitHub");

  return (
    <section
      className="kh-card kh-contact"
      aria-labelledby="contact-heading"
    >
      <h2 className="kh-contact__headline" id="contact-heading">
        Let's connect.
      </h2>
      <p className="kh-contact__text">
        Open to engineering, data, AI, and consulting opportunities across
        government, healthcare, and technology. Based in Australia.
      </p>
      <div className="kh-contact__actions">
        {linkedin && (
          <a
            href={linkedin.link}
            className="kh-button kh-button--primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
          >
            Connect on LinkedIn
          </a>
        )}
        {github && (
          <a
            href={github.link}
            className="kh-button kh-button--outline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile"
          >
            View GitHub
          </a>
        )}
      </div>
    </section>
  );
};
