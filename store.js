import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CounterReducer from './slices/CounterSlice'
 import storage from 'redux-persist/lib/storage'
 import {persistReducer} from 'redux-persist'
 import { combineReducers } from "@reduxjs/toolkit";
 
 const persistConfig = {
  key:"root",
  version:1,
  storage
 }
 const reducer = combineReducers({counter:CounterReducer})
 const persistReduce = persistReducer(persistConfig,reducer)
 

export default   configureStore({
  reducer: persistReduce,
})