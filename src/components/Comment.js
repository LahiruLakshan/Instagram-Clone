import React from "react";

function Comment(props) {
  return (
    <div>
      <div className="top-section w-100 my-4 mx-3 d-flex align-items-center">
        <div className="mr-1 profile me-sm-3">
          <img src={props.profilePicture} />
        </div>
        <div className="fw-bold username me-sm-2">{props.username}</div>
        <div className="caption-text">{props.commentText}</div>
      </div>
    </div>
  );
}

export default Comment;
