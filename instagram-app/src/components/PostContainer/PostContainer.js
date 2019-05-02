import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";
import CommentInput from "./CommentInput.js";
import styled from "styled-components";

const ThumbImg = styled.img`
  width: 472px;
`;

const ThumbImgTwo = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin-top: 10px;
  margin-left: 5px;
`;

const Header = styled.header`
  display: flex;
  align-content: center;
`;

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
      { id: Date.now(), username: localStorage.getItem("user"), text: event }
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
        <Header>
          <ThumbImgTwo
            className="thumb-img"
            src={this.props.dummyObj.thumbnailUrl}
            alt=""
          />
          <p>{this.props.dummyObj.username}</p>
        </Header>
        <ThumbImg src={this.props.dummyObj.imageUrl} alt="" />
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
