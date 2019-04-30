import React from "react";
import "./PostContainer.css";

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
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
        </form>
      </div>
    );
  }
}
export default CommentInput;
