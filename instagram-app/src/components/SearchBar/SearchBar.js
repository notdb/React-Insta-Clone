import React from "react";
import "./search-bar.css";

class SearchBar extends React.Component {
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

    this.props.searchFilter(this.state.input);
    const newCount = 1;
    this.setState({
      input: "",
      count: newCount
    });
  };

  render() {
    return (
      <div className="search-bar">
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

export default SearchBar;
