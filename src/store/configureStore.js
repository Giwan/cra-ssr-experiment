import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers/index";

const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(
  createStore
);

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
