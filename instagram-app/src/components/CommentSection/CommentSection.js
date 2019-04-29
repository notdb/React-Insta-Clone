import React from "react";
import "./CommentSection.css";

function CommentSection(props) {
  return (
    <div className="comment-section">
      <p>{props.comment.text}</p>
      <p>input form will go here</p>
    </div>
  );
}

export default CommentSection;
