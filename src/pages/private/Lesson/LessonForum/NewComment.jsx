import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Button } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";
import useFetch from "hooks/useFetch";

const NewComment = ({ ids, handleNewComment }) => {
  const [comment, setComment] = useState();
  const { t } = useTranslation("lesson");
  const { post } = useFetch();

  const handleSubmit = (event) => {
    event.preventDefault();
    post(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/comments`,
      {
        content: comment,
      }
    );
    handleNewComment(comment);
  };

  return (
    <Form inline className="NewComment mb-3 mt-3">
      <Form.Group className="w-100">
        <Form.Control
          className="w-75"
          as="textarea"
          rows={3}
          type="text"
          value={comment}
          placeholder={t("write_a_comment")}
          onChange={() => setComment(event.target.value)}
        />
        <AiOutlineSend
          className="ml-5"
          size={50}
          style={{ color: "#FF8A00", cursor: "pointer" }}
          onClick={handleSubmit}
        />
      </Form.Group>
    </Form>
  );
};

export default NewComment;
