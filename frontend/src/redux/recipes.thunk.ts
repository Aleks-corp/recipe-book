import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../api/axios";

interface Query {
  page?: number;
  limit?: number;
  filter?: string;
  filterType?: string;
}

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async ({ filter = "", filterType = "" }: Query, thunkAPI) => {
    try {
      const response = await instance.get(
        `/api/recipes?${filter && filterType ? `${filterType}=${filter}` : ``}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchRecipeById",
  async (id: string, thunkAPI) => {
    try {
      const response = await instance.get(`/api/recipes/${id}`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);
