import { configureStore, combineReducers } from "@reduxjs/toolkit";
import quizSlice from "../redux/app";
const rootReducer = combineReducers({
  quizSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
