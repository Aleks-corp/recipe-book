import { RecipesState, Recipe } from "../../domain/recipe/types";
import { PayloadAction } from "@reduxjs/toolkit";

export const handlePending = (state: RecipesState) => {
  state.isLoading = true;
};

export const handleRejected = (
  state: RecipesState,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilledGetRecipes = (
  state: RecipesState,
  action: PayloadAction<Recipe[]>
) => {
  state.recipes = action.payload;
  state.totalHits = action.payload.length;
  state.isLoading = false;
};

export const handleFulfilledGetRecipesById = (
  state: RecipesState,
  action: PayloadAction<Recipe>
): void => {
  state.selectedRecipes = action.payload;
  state.isLoading = false;
};
