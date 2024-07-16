import { configureStore } from '@reduxjs/toolkit';
import rentalsReducer from './features/Rentals/rentalsSlice';
import tasksReducer from "./features/TaskManager/taskManagerSlice";
// import usersReducer from './app/pages/Login/LoginSlice';
import { apiSlice } from './api/apiSlice';

/* RTK QUERY NOTES
  We can reuse the apiSlice.reducerPath field as a computed key in the reducer parameter, to ensure that the caching reducer is added in the right place.

  We need to keep all of the existing standard middleware like redux-thunk in the store setup, and the API slice's middleware typically goes after those. We can do that by supplying the middleware argument to configureStore, calling the provided getDefaultMiddleware() method, and adding apiSlice.middleware at the end of the returned middleware array.
*/

// create store
export const store = configureStore({
  reducer: {
    rentals: rentalsReducer,
    tasks: tasksReducer,
    // users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Since we are using TS, we need the to infer the "Rootstate" and "AppDispatch" type from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
