import React from "react";

const LessonVideo = ({ url }) => {
  return (
    <video controls className="LessonVideo w-75 mb-5">
      <source src={url} />
    </video>
  );
};

export default LessonVideo;
