import React from "react";

const LessonVideo = ({ url }) => {
  return (
    <video controls className="LessonVideo w-75 mb-5">
      <source src="https://learningstuff-website.s3.eu-west-3.amazonaws.com/De%CC%81mystifier+Stripe+version+2019.mp4" />
    </video>
  );
};

export default LessonVideo;
