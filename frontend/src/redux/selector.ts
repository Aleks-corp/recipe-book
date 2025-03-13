import { State } from "../types/state.type";

export const selectRecipes = (state: State) => state.recipes.recipes;

export const selectTotalHits = (state: State) => state.recipes.totalHits;

export const selectCurrentFilter = (state: State) =>
  state.recipes.currentFilter;

export const selectRecipe = (state: State) => state.recipes.selectedRecipes;

export const selectIsLoading = (state: State) => state.recipes.isLoading;

export const selectError = (state: State) => state.recipes.error;
