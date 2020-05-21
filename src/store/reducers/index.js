import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { bookReducer } from "./bookReducer";

const rootReducer = combineReducers({
  app: appReducer,
  bookReducer,
});

export default rootReducer;
