import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";

function PostContainer(props) {
  return (
    <div className="post-container">
      <p>{props.dummyObj.id}</p>
      <p>{props.dummyObj.username}</p>
      {props.dummyObj.comments.map(comment => (
        <CommentSection key={comment.id} comment={comment} />
      ))}
      <p>Input form goes here</p>
    </div>
  );
}

export default PostContainer;
