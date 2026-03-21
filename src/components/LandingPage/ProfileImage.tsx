import React from "react";
import profileImage from "../../assets/LandingPageAssets/profile_image.png";

export const ProfileImage: React.FC = () => {
  return (
    <div className="kh-hero__image-wrap">
      <img src={profileImage} alt="Profile" className="kh-hero__image" />
    </div>
  );
};
