import React from "react";
import { stackGroups } from "./data/stack";

export const StackSection: React.FC = () => {
  return (
    <section
      className="kh-card kh-stack"
      aria-labelledby="stack-heading"
    >
      <div className="kh-section-heading">
        <p className="kh-section-heading__eyebrow">TECHNICAL STACK</p>
        <h2 className="kh-section-heading__title" id="stack-heading">
          Tools and technologies
        </h2>
      </div>
      <div className="kh-stack__groups">
        {stackGroups.map(({ group, items }) => (
          <div key={group} className="kh-stack-group">
            <p className="kh-stack-group__label">{group.toUpperCase()}</p>
            <div className="kh-stack-group__items">
              {items.map((item) => (
                <div key={item.name} className="kh-stack-item">
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    className="kh-stack-item__icon"
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
