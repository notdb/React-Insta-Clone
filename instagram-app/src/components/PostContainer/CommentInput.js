import React from "react";
import "./PostContainer.css";

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
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
    this.setState({
      input: ""
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
