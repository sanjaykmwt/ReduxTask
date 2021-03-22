import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from "redux-persist";
import {logger} from "redux-logger";
import promise from "redux-promise-middleware";
import rootReducer from "./root.-reducer"

export const middlewares = [promise,thunk,logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
export default {store,persistor};