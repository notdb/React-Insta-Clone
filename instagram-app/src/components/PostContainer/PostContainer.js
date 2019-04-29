import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";

function PostContainer(props) {
  return (
    <div className="post-container">
      This is the post container
      <CommentSection />
    </div>
  );
}

export default PostContainer;
