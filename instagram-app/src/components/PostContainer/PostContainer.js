import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";
import CommentInput from "./CommentInput.js";
import moment from "moment";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tummy: this.props.dummyObj };
  }

  /*
  componentDidMount() {
    let dummyObj = this.props.dummyObj;
    this.setState({ tummy: dummyObj });
    console.log(this.state.tummy);
  }
*/
  addNewComment = event => {
    const newComment = [
      ...this.state.tummy.comments,
      { id: Date.now(), username: "testUser", text: event }
    ];
    const newObj = {
      ...this.state.tummy,
      comments: newComment
    };

    this.setState({ tummy: newObj });
  };

  likeUpdate = () => {
    const newObj = {
      id: this.state.tummy.id,
      username: this.state.tummy.username,
      thumbnailUrl: this.state.tummy.thumbnailUrl,
      imageUrl: this.state.tummy.imageUrl,
      likes: this.state.tummy.likes + 1,
      comments: this.state.tummy.comments
    };
    this.setState({ tummy: newObj });

    console.log("nothing");
  };

  /*
  componentDidUpdate(prevProps, prevState) {
    if (this.state.tummy !== prevState.tummy) {
      console.log("tummy");
      this.setState({ tummy: this.state.tummy });
      console.log(this.state);
    }
  }
*/
  render() {
    return (
      <div className="post-container">
        <header className="header">
          <img
            className="thumb-img"
            src={this.props.dummyObj.thumbnailUrl}
            alt=""
          />
          <p>{this.props.dummyObj.username}</p>
        </header>
        <img className="post-img" src={this.props.dummyObj.imageUrl} alt="" />
        <div className="icons">
          <div className="row">
            <p>Icon</p>
            <p onClick={this.likeUpdate}> Icon</p>
          </div>
          <p>{this.state.tummy.likes} likes</p>
        </div>
        <div className="comment-thing">
          {this.state.tummy.comments.map(comment => (
            <CommentSection key={comment.id} comment={comment} />
          ))}
        </div>
        <CommentInput addNewComment={this.addNewComment} />
      </div>
    );
  }
}

export default PostContainer;
