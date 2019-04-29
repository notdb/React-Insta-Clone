import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";

function PostContainer(props) {
  return (
    <div className="post-container">
      {props.dummyObj.username}
      {props.dummyObj.comments.map(comment => (
        <CommentSection key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default PostContainer;
