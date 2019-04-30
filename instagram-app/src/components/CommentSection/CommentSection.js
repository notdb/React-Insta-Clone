import React from "react";
import "./CommentSection.css";

function CommentSection(props) {
  return (
    <div className="comment-section">
      <p>
        <b>{props.comment.username}</b> {props.comment.text}
      </p>
    </div>
  );
}

export default CommentSection;
