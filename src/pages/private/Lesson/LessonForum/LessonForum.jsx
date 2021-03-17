import React from "react";

const LessonForum = ({ comments }) => {
  return (
    <div className="LessonForum">
      FORUM OF A LESSON
      <ul>
        {comments &&
          comments.map((comment) => (
            <li key={comment.id}>
              {comment.content} {comment.user_id}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LessonForum;
