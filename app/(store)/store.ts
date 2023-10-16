"use client";
import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./todoSlice";
export default configureStore({
  reducer: {
    TodoSlice,
  },
});
