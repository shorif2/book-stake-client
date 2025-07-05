import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./features/bookSlice";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
