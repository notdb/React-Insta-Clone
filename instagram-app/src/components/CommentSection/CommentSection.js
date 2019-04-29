import React from "react";
import "./CommentSection.css";

function CommentSection(props) {
  return (
    <div className="comment-section">
      <p>
        {props.comment.username} says: {props.comment.text}
      </p>
    </div>
  );
}

export default CommentSection;
