import { useState, useEffect } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import useFetch from "hooks/useFetch";

const LessonForum = ({ ids }) => {
  const { data, get } = useFetch();

  const handleNewComment = () => {
    get(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/comments`
    );
  };

  useEffect(() => {
    get(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/comments`
    );
  }, []);

  return (
    <div className="LessonForum">
      <NewComment ids={ids} handleNewComment={handleNewComment} />
      <ul>
        {data &&
          data.map((comment) => <Comment handleNewComment={handleNewComment} ids={ids} key={comment.id} comment={comment} />)}
      </ul>
    </div>
  );
};

export default LessonForum;
