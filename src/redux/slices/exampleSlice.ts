import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
	name: "example",
	initialState: {},
	reducers: {
		doThing: (state, action: PayloadAction) => {},
	},
});
