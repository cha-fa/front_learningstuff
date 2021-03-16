import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFlash } from "stores/flashmessages/flashActions";

const FlashMessage = () => {
  const category = useSelector((state) => state.flash.category);
  const title = useSelector((state) => state.flash.title);
  const content = useSelector((state) => state.flash.content);

  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`alert alert-${category} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{title}</strong> {content}
        <button
          type="button"
          className="close"
          onClick={() => dispatch(removeFlash())}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
};

export default FlashMessage;
