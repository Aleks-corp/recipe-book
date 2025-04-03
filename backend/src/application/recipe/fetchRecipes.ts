import { IRecipeApi } from "../../domain/recipe/IRecipeApi";

export const fetchRecipes = (recipeApi: IRecipeApi) => {
  return async function (filters: {
    ingredient?: string;
    country?: string;
    category?: string;
  }) {
    return await recipeApi.fetchRecipes(filters);
  };
};
