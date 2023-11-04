import React from "react";

export const ProfileImage: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <img
        src="/path-to-your-profile-image.jpg" // Replace with the actual path to your image
        alt="Profile"
        className="rounded-full shadow-lg h-64 w-64"
      />
    </div>
  );
};
