import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import PropTypes from "prop-types";
import PostsPage from "./components/PostsPage";
import Login from "./components/Login/Login";
import withAuthenticate from "./components/authenticate/withAuthenticate.js";

/*
function App() {
  return (
    <div className="App">
      <p>AAAA</p>
    </div>
  );
}

export default App;
*/

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummy: []
    };
  }

  componentDidMount() {
    this.setState({ dummy: dummyData });
  }

  searchFilter = event => {
    let emptyArray = [];
    let newArray = this.state.dummy.map(obj => {
      if (obj.username === event) {
        emptyArray.push(obj);
      }
    });

    this.setState({ dummy: emptyArray });
    console.log(emptyArray);
  };

  render() {
    console.log(this.state.dummy[1]);
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

App.propTypes = {
  dummy: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
};

App.defaultProps = {
  dummy: []
};

export default App;
