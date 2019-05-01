import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      isLoggedIn: false
    };
  }

  onUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      this.setState({ isLoggedIn: false });
    } else {
      localStorage.setItem("user", "doug");
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    return (
      <div className="input-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            id="1"
            placeholder="username"
            value={this.state.username}
            onChange={this.onUpdate}
          />
          <input type="text" name="password" id="1" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
