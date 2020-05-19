import React, { Component } from "react";
import Book from "./components/Book/Book.js";
import "./App.css";

class App extends Component {
  state = {
    value: "tst",
  };
  render() {
    return (
      <div className="App">
        <h1>This H1 is rendered on the server!</h1>
        <h2 onClick={() => this.setState({ value: "bla" })}>
          {this.state.value}
        </h2>
        <Book />
      </div>
    );
  }
}

export default App;
