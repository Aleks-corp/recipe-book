import { Request, Response } from "express";
import { createThemeMealApi } from "../../../api/themeMealApi";
import { fetchRecipes } from "../../../../application/recipe/fetchRecipes";
import { fetchRecipeById } from "../../../../application/recipe/fetchRecipeById";

const api = createThemeMealApi();
const fetchRecipesUseCase = fetchRecipes(api);
const fetchByIdUseCase = fetchRecipeById(api);

export const getRecipesHandler = async (req: Request, res: Response) => {
  try {
    const { ingredient, country, category } = req.query;
    const result = await fetchRecipesUseCase({
      ingredient: ingredient as string,
      country: country as string,
      category: category as string,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

export const getRecipeByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await fetchByIdUseCase(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recipe details" });
  }
};
