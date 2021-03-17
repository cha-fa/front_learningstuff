import React from "react";
import Comment from "./Comment";

const LessonForum = ({ comments }) => {
  return (
    <div className="LessonForum">
      <ul>
        {comments &&
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </ul>
    </div>
  );
};

export default LessonForum;
