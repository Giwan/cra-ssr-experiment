import React, { Component } from "react";
import "./App.css";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { setMessage } from "./store/appReducer";
import Book from "./components/Book/Book";

const AsyncLoader = Loadable({
  loader: () => import("./components/AsyncComponent/AsyncComponent"),
  loading: () => <div>Loading...</div>,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "click me" };
  }
  componentDidMount() {
    if (!this.props.message) {
      this.props.updateMessage("message from the client");
    }
  }
  render() {
    return (
      <div className="App">
        <h1>This H1 is rendered on the server!</h1>
        message: {this.props.message}
        <h2 onClick={() => this.setState({ value: "bla" })}>
          {this.state.value}
        </h2>
        <Book />
      </div>
    );
  }
}

const mapStateToProps = ({ app = {} }) => ({
  message: app.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessage: (txt) => dispatch(setMessage(txt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
