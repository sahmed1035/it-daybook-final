import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// we will bring other reducers into the rootReducer
import rootReducer from "./reducers";

/**
 * initial app level state with and empty object.
 * create a middleware varialbe. any middleware we use put here in and array.
 * create a store with createStore we brought in.
 * store takes in rootReducer to know which reducer we are working with. initial state and middleware
 */

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) // doing this way will also add dev functionality
);

export default store;
