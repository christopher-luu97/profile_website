import React from "react";
import profileImage from "../../assets/LandingPageAssets/profile_image.png"; // Adjust the path as necessary

export const ProfileImage: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <img
        src={profileImage}
        alt="Profile"
        className="rounded-full shadow-lg h-full w-full"
      />
    </div>
  );
};
