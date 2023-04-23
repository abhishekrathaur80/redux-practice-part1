import { configureStore } from "@reduxjs/toolkit";
import authslice from "./auth";
import counterSlice from "./counter";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authslice.reducer },
});
export const counterAction = counterSlice.actions;
export const authAction = authslice.actions;

export default store;
