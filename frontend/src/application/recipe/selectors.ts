import { RootState } from "../../app/store";

export const selectRecipes = (state: RootState) => state.recipes.recipes;

export const selectTotalHits = (state: RootState) => state.recipes.totalHits;

export const selectCurrentFilter = (state: RootState) =>
  state.recipes.currentFilter;

export const selectRecipe = (state: RootState) => state.recipes.selectedRecipes;

export const selectIsLoading = (state: RootState) => state.recipes.isLoading;

export const selectError = (state: RootState) => state.recipes.error;
