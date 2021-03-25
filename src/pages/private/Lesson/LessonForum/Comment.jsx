import useFetch from "hooks/useFetch";
import React, {useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";
import NewReplyComment from "./NewReplyComment";
import ReplyComment from "./ReplyComment";
import { useSelector } from "react-redux";
const Comment = ({ comment, ids }) => {


const {get, data} = useFetch();
const currentUser = useSelector((state) => state.auth.currentUser);

const handleNewReply = () => {
  get(
    `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/comments/${comment.id}/reply_comments`
  );
};


  useEffect(() => {
    get(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/comments/${comment.id}/reply_comments`
    );
  }, []);

  return (
    <Card className="mb-1 p-0">
      <Card.Body className="p-1">
        <blockquote className="blockquote">
          <p>{comment.content}</p>
          <div className="blockquote-footer">
            {comment.user.first_name} {comment.user.last_name}{" "}
            {comment.user.role === "teacher" && (
              <FaChalkboardTeacher size={25} />
            )}
            <p> {new Date(comment.created_at).toLocaleString()}</p>
          </div>
        </blockquote>
          <ul>
            {data &&
              data.map((reply) => <ReplyComment comment={comment} key={reply.id} reply={reply}/> )}
              <NewReplyComment handleNewReply={handleNewReply} user={currentUser} ids={ids} comment={comment} />
          </ul>
      </Card.Body>
    </Card>
  );
};

export default Comment;
