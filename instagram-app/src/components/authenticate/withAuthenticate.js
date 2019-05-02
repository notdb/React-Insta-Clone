import React from "react";

const withAuthenticate = FirstComponent => SecondComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem("user") == "doug") {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }

    render() {
      if (localStorage.getItem("user")) {
        return <FirstComponent />;
      } else {
        return <SecondComponent />;
      }
    }
  };

export default withAuthenticate;
