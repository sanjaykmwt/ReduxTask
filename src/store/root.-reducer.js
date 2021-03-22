import {combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import user from "./reducers/user";

const persistConfig={
  key:'root',
  storage:storage,
}

const rootReducer = combineReducers({
  user
});


export default persistReducer(persistConfig,rootReducer)