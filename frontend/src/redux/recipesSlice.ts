import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipesState, Recipe } from "../types/state.type";
import { fetchRecipeById, fetchRecipes } from "./recipes.thunk";

export const initialState: RecipesState = {
  recipes: [],
  totalHits: 0,
  currentFilter: { filter: "", filterType: "" },
  selectedRecipes: null,
  isLoading: false,
  error: "",
};

const handlePending = (state: RecipesState) => {
  state.isLoading = true;
};
const handleRejected = (state: RecipesState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilledGetRecipes = (
  state: RecipesState,
  action: PayloadAction<{ meals: Recipe[] }>
): void => {
  state.recipes = action.payload.meals;
  state.totalHits = action.payload.meals.length;
  state.isLoading = false;
};

export const handleFulfilledGetRecipesById = (
  state: RecipesState,
  action: PayloadAction<{ meals: Recipe[] }>
): void => {
  state.selectedRecipes = action.payload.meals[0];
  state.isLoading = false;
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setCurrentFilter(
      state,
      action: PayloadAction<{ filter: string; filterType: string }>
    ) {
      state.currentFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.fulfilled, handleFulfilledGetRecipes)
      .addCase(fetchRecipeById.fulfilled, handleFulfilledGetRecipesById)
      .addMatcher(
        ({ type }) => type.endsWith("/rejected") && type.startsWith("posts"),
        handleRejected
      )
      .addMatcher((action) => action.type.endsWith("pending"), handlePending);
  },
});

export const { setCurrentFilter } = recipesSlice.actions;

export default recipesSlice.reducer;
