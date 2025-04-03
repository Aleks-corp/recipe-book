import axios from "axios";
import { IRecipeApi } from "../../domain/recipe/IRecipeApi";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const createThemeMealApi = (): IRecipeApi => ({
  async fetchRecipes({ ingredient, country, category }) {
    let url = `${API_BASE_URL}/search.php?s=`;

    if (ingredient) url = `${API_BASE_URL}/filter.php?i=${ingredient}`;
    if (country) url = `${API_BASE_URL}/filter.php?a=${country}`;
    if (category) url = `${API_BASE_URL}/filter.php?c=${category}`;

    const response = await axios.get(url);
    return response.data;
  },

  async fetchById(id: string) {
    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`);
    return response.data;
  },
});
