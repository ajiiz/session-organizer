import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./dateSlice";

export const store = configureStore({
  reducer: {
    calendar: dateReducer
  },
  // Disabling due to non-seriazable date errors in the dateSlice
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
