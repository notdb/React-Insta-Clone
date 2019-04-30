import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";
import CommentInput from "./CommentInput.js";
import moment from "moment";

class PostContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let dummyObj = this.props.dummyObj;
    this.setState({ tummy: dummyObj });
    console.log(this.state.tummy);
  }

  addNewComment = event => {
    console.log(this.state.tummy);

    const newComment = [
      ...this.state.tummy.comments,
      { id: "4", username: "testUser", text: event }
    ];
    this.setState((this.state.tummy.comments = newComment));
  };

  render() {
    let today = this.props.dummyObj.timestamp;
    console.log(this.state);
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
        <CommentInput addNewComment={this.addNewComment} />
      </div>
    );
  }
}

export default PostContainer;
