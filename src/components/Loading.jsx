import React from "react";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

const Loading = () => {
  return (
    <div className="Loading">
      <UseAnimations animation={loading} size={56} strokeColor="#000000" />
    </div>
  );
};

export default Loading;
