import { combineReducers } from "@reduxjs/toolkit";
import { exampleSlice } from "./slices";

export const rootReducer = combineReducers({
	example: exampleSlice.reducer,
});
