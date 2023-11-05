import React from "react";
import { About } from "./About";
import { ProjectsGrid } from "./ProjectGrid";

export const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#9C8B7E] min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#9C8B7E]">
            <div className="pb-16 "></div>
            <About />
          </div>
        </div>
        <div className="bg-[#9C8B7E]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            style={{ height: "150px", width: "100%" }}
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 
         58-18 88-18s
         58 18 88 18 
         58-18 88-18 
         58 18 88 18
         v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#D5D2CD" />
            </g>
          </svg>
        </div>
      </div>
      <div className="bg-[#D5D2CD]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#D5D2CD]">
          <ProjectsGrid />
        </div>
        <div className="pb-4 bg-[#D5D2CD]"></div>
      </div>
    </div>
  );
};
