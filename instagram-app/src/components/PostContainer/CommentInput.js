import React from "react";
import "./PostContainer.css";

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      count: 3
    };
  }

  onUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addNewComment(this.state.input);
    const newCount = 1;
    this.setState({
      input: "",
      count: newCount
    });
  };

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            id="what"
            placeholder="Add a comment..."
            value={this.state.input}
            onChange={this.onUpdate}
          />
          <button type="submit">Add comment</button>
        </form>
      </div>
    );
  }
}
export default CommentInput;
