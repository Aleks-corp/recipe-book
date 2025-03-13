import { Request, Response } from "express";
import axios from "axios";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const { ingredient, country, category } = req.query;
    let url = `${API_BASE_URL}/search.php?s=`;

    if (ingredient) url = `${API_BASE_URL}/filter.php?i=${ingredient}`;
    if (country) url = `${API_BASE_URL}/filter.php?a=${country}`;
    if (category) url = `${API_BASE_URL}/filter.php?c=${category}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipe details" });
  }
};
