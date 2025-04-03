import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipesState } from "../../domain/recipe/types";
import {
  handlePending,
  handleRejected,
  handleFulfilledGetRecipes,
  handleFulfilledGetRecipesById,
} from "./handlers";
import { fetchRecipes, fetchRecipeById } from "./thunks";

export const initialState: RecipesState = {
  recipes: [],
  totalHits: 0,
  currentFilter: { filter: "", filterType: "" },
  selectedRecipes: null,
  isLoading: false,
  error: "",
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
      .addCase(fetchRecipes.pending, handlePending)
      .addCase(fetchRecipes.fulfilled, handleFulfilledGetRecipes)
      .addCase(fetchRecipeById.pending, handlePending)
      .addCase(fetchRecipeById.fulfilled, handleFulfilledGetRecipesById)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

export const { setCurrentFilter } = recipesSlice.actions;
export default recipesSlice.reducer;
