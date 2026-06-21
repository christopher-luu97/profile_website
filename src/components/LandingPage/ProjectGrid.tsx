import React, { useMemo, useState } from "react";
import { projects } from "./ProjectData";
import { mediaLinks } from "../Header/mediaLinks";

export const ProjectsGrid: React.FC = () => {
  const [displayCount, setDisplayCount] = useState<number>(3);
  const [expandedDesc, setExpandedDesc] = useState<Record<string, boolean>>({});

  const visibleProjects = useMemo(
    () => projects.slice(0, displayCount),
    [displayCount],
  );

  const handleSeeMore = (): void => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  const handleShowLess = (): void => {
    setDisplayCount(3);
    setExpandedDesc({});
  };

  const toggleDescription = (id: string): void => {
    setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getMediaIcon = (mediaName: string): string | undefined => {
    return mediaLinks.find((media) => media.name === mediaName)?.icon;
  };

  const hoverSupported =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  return (
    <section className="kh-projects">
      <div className="kh-section-heading">
        <p className="kh-section-heading__eyebrow">PUBLIC BUILDS AND EXPERIMENTS</p>
        <h2 className="kh-section-heading__title">Public builds</h2>
      </div>

      <p className="kh-projects__intro">
        Personal experiments and open-source builds. These projects were built
        for learning, curiosity, and fun — they don't represent the full scope
        of professional delivery.
      </p>

      <div className="kh-projects__grid">
        {visibleProjects.map((project) => (
          <article key={project.id} className="kh-project-card">
            <div className="kh-project-card__image-wrap">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="kh-project-card__image"
              />
              <div className="kh-project-card__image-overlay" />
            </div>

            <div className="kh-project-card__body">
              <div>
                <p className="kh-project-card__label">PROJECT</p>
                <h3 className="kh-project-card__title">{project.name}</h3>
                <p
                  className={`kh-project-card__description ${
                    !expandedDesc[project.id]
                      ? "kh-project-card__description--clamped"
                      : ""
                  }`}
                  onClick={() => toggleDescription(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      toggleDescription(project.id);
                    }
                  }}
                >
                  {project.projectDescription}
                </p>
              </div>

              <div className="kh-project-card__footer">
                <div className="kh-project-card__links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub`}
                    >
                      <img
                        src={getMediaIcon("GitHub")}
                        alt="GitHub"
                        className={`kh-project-card__icon ${
                          !hoverSupported ? "kh-project-card__icon--pulse" : ""
                        }`}
                      />
                    </a>
                  )}

                  {project.articleUrl && (
                    <a
                      href={project.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} Medium article`}
                    >
                      <img
                        src={getMediaIcon("Medium")}
                        alt="Medium"
                        className={`kh-project-card__icon ${
                          !hoverSupported ? "kh-project-card__icon--pulse" : ""
                        }`}
                      />
                    </a>
                  )}

                  {project.youtubeUrl && (
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} YouTube video`}
                    >
                      <img
                        src={getMediaIcon("Youtube")}
                        alt="YouTube"
                        className={`kh-project-card__icon ${
                          !hoverSupported ? "kh-project-card__icon--pulse" : ""
                        }`}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="kh-projects__actions">
        {displayCount < projects.length && (
          <button
            type="button"
            onClick={handleSeeMore}
            className="kh-button kh-button--primary"
          >
            See more
          </button>
        )}

        {displayCount > 3 && (
          <button
            type="button"
            onClick={handleShowLess}
            className="kh-button kh-button--secondary"
          >
            Show less
          </button>
        )}
      </div>
    </section>
  );
};
