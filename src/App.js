import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { setMessage } from "./store/reducers/appReducer";
import { Link } from "react-router-dom";
import { fetchListOfBooks } from "./actions/bookActions";
import routes from "./routes";
import { Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="App">
      <h1>SSR example using redux and React-router</h1>
      <p>
        This demo page will show two separate components. The first component
        lets you see all the books that are available.
      </p>
      <p>The other component looks at a particular book in detail</p>
      <nav>
        <Link to="/books">Book Shop</Link>
      </nav>

      <Switch>
        {routes.map((route) => (
          <Route {...route} key={route.path} {...props} />
        ))}
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ app = {} }) => ({
  message: app.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessage: (txt) => dispatch(setMessage(txt)),
  fetchListOfBooks,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
