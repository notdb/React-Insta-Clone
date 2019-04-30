import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";
import moment from "moment";

class PostContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let today = this.props.dummyObj.timestamp;
    return (
      <div className="post-container">
        <header className="header">
          <img className="thumb-img" src={this.props.dummyObj.thumbnailUrl} />
          <p>{this.props.dummyObj.username}</p>
        </header>
        <img className="post-img" src={this.props.dummyObj.imageUrl} />
        <div className="icons">
          <div className="row">
            <p>Icon</p>
            <p> Icon</p>
          </div>
          <p>373 likes</p>
        </div>
        <div className="comment-thing">
          {this.props.dummyObj.comments.map(comment => (
            <CommentSection key={comment.id} comment={comment} />
          ))}
        </div>
        <div className="comment-form">
          <p>Input form goes here</p>
          <p>...</p>
          {moment()
            .startOf(today)
            .fromNow()}
        </div>
      </div>
    );
  }
}

export default PostContainer;
