import React from "react";
import "./search-bar.css";
import styled from "styled-components";
import instalogo from "./instalogo.png";
import logobar from "./logobar.png";

const SearchBarDiv = styled.header`
  display: flex;
  justify-content: space-around;
`;

const StyledForm = styled.form`
  display: flex;
  margin-top: 20px;
  align-content: center;
  height: 30px;
  button {
    border: none;
    margin-left: 5px;
  }
`;

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

  logMeOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  render() {
    return (
      <SearchBarDiv>
        <img src={instalogo} alt="logo" />
        <StyledForm onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            id="what"
            placeholder="Type usernames here..."
            value={this.state.input}
            onChange={this.onUpdate}
          />
          <button type="submit">Filter Posts</button>
          <button type="logout" onClick={this.logMeOut}>
            Log Out
          </button>
        </StyledForm>
        <img src={logobar} alt="another logo" />
      </SearchBarDiv>
    );
  }
}

export default SearchBar;
