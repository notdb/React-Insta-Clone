import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";

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
      dummy: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummy.map(obj => (
          <PostContainer key={obj.timestamp} dummyObj={obj} />
        ))}
      </div>
    );
  }
}

export default App;
