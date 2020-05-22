import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { setMessage } from "./store/reducers/appReducer";
import Book from "./components/Book/Book";
import { Link } from "react-router-dom";

const App = (props) => {
  const [value, setValue] = useState("click me");

  useEffect(() => {
    if (!props.message) {
      props.updateMessage("message from the client");
    }
  });

  return (
    <div className="App">
      <h1>SSR example using redux and React-router</h1>
      <nav>
        <Link to="/test">Alternative test page</Link>
      </nav>
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
