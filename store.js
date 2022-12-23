import { configureStore,combineReducers } from '@reduxjs/toolkit'
import CounterReducer from './slices/CounterSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}
const counterReducerr = combineReducers({
  counter:CounterReducer,
}) 
const persistedReducer = persistReducer(persistConfig, counterReducerr)

export const store = configureStore({
  reducer: persistedReducer,
   middleware: [thunk]
})

export const persistor = persistStore(store)