import React, { Component } from 'react';
import './App.css';
import Loadable from "react-loadable";

const AsyncLoader = Loadable({
  loader: () => import("./components/AsyncComponent/AsyncComponent"),
  loading: () => <div>Loading...</div>
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This H1 is rendered on the server!</h1>
        <AsyncLoader />
      </div>
    );
  }
}

export default App;
