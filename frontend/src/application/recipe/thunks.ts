import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchRecipesApi,
  fetchRecipeByIdApi,
} from "../../infrastructure/recipeApi";
import { Recipe } from "../../domain/recipe/types";

interface Query {
  page?: number;
  limit?: number;
  filter?: string;
  filterType?: string;
}

export const fetchRecipes = createAsyncThunk<Recipe[], Query>(
  "recipes/fetchRecipes",
  async ({ filter = "", filterType = "" }, thunkAPI) => {
    try {
      return await fetchRecipesApi(filter, filterType);
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

export const fetchRecipeById = createAsyncThunk<Recipe, string>(
  "recipes/fetchRecipeById",
  async (id, thunkAPI) => {
    try {
      return await fetchRecipeByIdApi(id);
    } catch (e) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);
