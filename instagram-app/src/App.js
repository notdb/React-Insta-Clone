import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import PropTypes from "prop-types";

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
        <SearchBar searchFilter={this.searchFilter} />
        {this.state.dummy.map(obj => (
          <PostContainer key={obj.timestamp} dummyObj={obj} />
        ))}
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
