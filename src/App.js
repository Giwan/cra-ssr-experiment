import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { setMessage } from "./store/reducers/appReducer";
import Book from "./components/Book/Book";

const App = (props) => {
  const [value, setValue] = useState("click me");

  useEffect(() => {
    if (!props.message) {
      props.updateMessage("message from the client");
    }
  });

  return (
    <div className="App">
      <h1>This H1 is rendered on the server!</h1>
      message: {props.message}
      <h2 onClick={() => setValue("bla")}>{value}</h2>
      <Book />
    </div>
  );
};

const mapStateToProps = ({ app = {} }) => ({
  message: app.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessage: (txt) => dispatch(setMessage(txt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
