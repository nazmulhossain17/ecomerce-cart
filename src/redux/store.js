import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage for web (localStorage)
import cartReducer from './features/cart/cartSlice'; // Update the path based on your file structure
import { combineReducers } from 'redux';
import { api } from './api/apiSlice';
import userReducer from './user/userSlice';
import productSlice from './features/product/productSlice';

// Configuration for persisting the user reducer
const userPersistConfig = {
  key: 'user', // Unique key for user reducer
  storage,
};

// Persist the user reducer
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  [api.reducerPath]: api.reducer,
  user: persistedUserReducer,
  product: productSlice, // Add the productSlice to the combined reducers
  // Add other reducers here
});

// Configuration for persist
const persistConfig = {
  key: 'root', // Key for the root level of the state
  storage,
  blacklist: [api.reducerPath], // Exclude api from persistence
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check for Redux Persist
    }).concat(api.middleware), // Add the api middleware
});

// Create the persistor
export const persistor = persistStore(store);

export default store;
