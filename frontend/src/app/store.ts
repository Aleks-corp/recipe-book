import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../application/recipe/slice";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
