import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./Authentication/authReducer";
import flashReducer from "./Flashmessages/flashReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  flash: flashReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
