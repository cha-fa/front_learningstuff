import { Card } from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";

const Comment = ({ comment }) => {
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
      </Card.Body>
    </Card>
  );
};

export default Comment;
