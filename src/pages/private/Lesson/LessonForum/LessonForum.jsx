import { useState, useEffect } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import useFetch from "hooks/useFetch";

const LessonForum = ({ ids }) => {
  const [newComment, setNewComment] = useState();
  const { data, get } = useFetch();

  const handleNewComment = (newComment) => {
    setNewComment(newComment);
  };

  useEffect(() => {
    get(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/comments`
    );
  }, [newComment]);

  return (
    <div className="LessonForum">
      <NewComment ids={ids} handleNewComment={handleNewComment} />
      <ul>
        {data &&
          data.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </ul>
    </div>
  );
};

export default LessonForum;
