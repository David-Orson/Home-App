import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "./reducers/userReducer";

/* interface initialState {
  authenticated: boolean;
} */

const initialState: any = {
  authenticated: false,
};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
});

const store: any = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
