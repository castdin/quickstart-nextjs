import { configureStore } from "@reduxjs/toolkit";
import {
	useDispatch as useReduxDispatch,
	useSelector as useReduxSelector,
	type TypedUseSelectorHook,
} from "react-redux";
import { rootReducer } from "./rootReducer";

export const store = () =>
	configureStore({
		reducer: rootReducer,
	});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof store>;
type AppDispatch = AppStore["dispatch"];

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
