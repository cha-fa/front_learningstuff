import useFetch from "hooks/useFetch";
import React, { useState } from "react";
import { Form } from "react-bootstrap"; 
import { useTranslation } from "react-i18next";
import { AiOutlineSend } from "react-icons/ai";


const NewReplyComment = ({handleNewReply, ids, comment, user}) => {
  
  const [reply, setReply] = useState();
  const {post}=useFetch();
  const { t } = useTranslation("lesson");
 

  const handleSubmit = (event) =>{
    event.preventDefault();
    post(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/comments/${comment.ids}/reply_comments`, 
      {
        content: reply,
        user_id:  user.id,
        comment_id: comment.id
      },
      handleNewReply
    );
    setReply("");
  };

return (
<div className='NewReplyComment'>
<Form inline className="NewComment mb-3 mt-3">
      <Form.Group className="w-100">
        <Form.Control
          className="w-75"
          rows={3}
          type="text"
          value={reply}
          placeholder={t("reply")}
          onChange={() => setReply(event.target.value)}
        />
        <AiOutlineSend
          className="ml-5"
          size={30}
          style={{ color: "#FF8A00", cursor: "pointer" }}
          onClick={handleSubmit}
        />
      </Form.Group>
    </Form>
</div>
);
};
  
export default NewReplyComment;