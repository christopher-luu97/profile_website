import React from "react";
import { capabilities } from "./data/capabilities";

export const CapabilitiesSection: React.FC = () => {
  return (
    <section
      className="kh-card kh-capabilities"
      aria-labelledby="capabilities-heading"
    >
      <div className="kh-section-heading">
        <p className="kh-section-heading__eyebrow">WHAT I BUILD</p>
        <h2 className="kh-section-heading__title" id="capabilities-heading">
          Capabilities
        </h2>
      </div>

      <div className="kh-capabilities__grid">
        {capabilities.map((cap, i) => (
          <div
            key={cap.id}
            className="kh-capability-card"
            data-reveal=""
            style={{ "--reveal-delay": `${i * 0.07}s` } as React.CSSProperties}
          >
            <img
              src={cap.icon}
              alt=""
              aria-hidden="true"
              className="kh-capability-card__icon"
            />
            <div>
              <h3 className="kh-capability-card__title">{cap.name}</h3>
              <p className="kh-capability-card__description">
                {cap.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
