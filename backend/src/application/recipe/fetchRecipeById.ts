import { IRecipeApi } from "../../domain/recipe/IRecipeApi";

export const fetchRecipeById = (recipeApi: IRecipeApi) => {
  return async function (id: string) {
    return await recipeApi.fetchById(id);
  };
};
