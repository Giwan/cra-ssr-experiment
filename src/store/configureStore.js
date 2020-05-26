import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers/index";
// import { composeWithDevTools } from "redux-devtools-extension";

// const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(
//   createStore
// );

// export default function configureStore(initialState = {}) {
//   return createStoreWithMiddleware(rootReducer, initialState);
// }

const getReducerData = (a, b) => (a && Object.keys(a).length > 0 ? () => a : b);

const configureStore = (initialState = rootReducer) =>
  createStore(
    getReducerData(initialState, rootReducer),
    compose(applyMiddleware(reduxThunk))
  );

export default configureStore;
