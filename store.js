import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CounterReducer from './slices/CounterSlice'
 import storage from 'redux-persist/lib/storage'
 import { combineReducers } from "@reduxjs/toolkit";
 import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
 const persistConfig = {
  key:"root",
  version:1,
  storage
 }
 const reducer = combineReducers({counter:CounterReducer})
 const persistReduce = persistReducer(persistConfig,reducer)
 

export default   configureStore({
  reducer: persistReduce,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})