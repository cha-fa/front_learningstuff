import React from "react";
import { Row } from "react-bootstrap";

const Comment = ({ comment }) => {
  return (
    <Row className="Comment">
      <p>{comment.content}</p>
      <p className="text-muted">
        {comment.user.first_name} {comment.user.last_name}
      </p>
    </Row>
  );
};

export default Comment;
