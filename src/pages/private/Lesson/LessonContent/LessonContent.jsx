import MarkdownConverter from "components/MarkdownConverter";
import React from "react";

const LessonContent = ({ content }) => {
  return (
    <div className="LessonContent">
      <MarkdownConverter text={content.text} />
    </div>
  );
};

export default LessonContent;
