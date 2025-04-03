import { instance } from "./api/axios";
import { Recipe } from "../domain/recipe/types";

export const fetchRecipesApi = async (
  filter = "",
  filterType = ""
): Promise<Recipe[]> => {
  const query = filter && filterType ? `${filterType}=${filter}` : "";
  const response = await instance.get(`/api/recipes?${query}`);
  return response.data.meals;
};

export const fetchRecipeByIdApi = async (id: string): Promise<Recipe> => {
  const response = await instance.get(`/api/recipes/${id}`);
  return response.data.meals[0];
};
