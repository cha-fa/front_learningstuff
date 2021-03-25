import React, {useState} from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Card } from "react-bootstrap";

const ReplyComment = ({reply, comment}) => {

  return (
    <div className='ReplyComment'>
     {reply.comment.id === comment.id &&
      <Card>
        <Card.Body>
          <blockquote className="blockquote">
            {reply &&
              <h6>{reply.content}</h6>
            }
            <div className="blockquote-footer">
            {reply.user.first_name} {reply.user.last_name}{" "}
            {reply.user.role === "teacher" && (
              <FaChalkboardTeacher size={25} />
            )}
            <p> {new Date(reply.created_at).toLocaleString()}</p>
            </div>
        </blockquote>
        </Card.Body>
      </Card>  
      }    
    </div>
);
};
  
export default ReplyComment;