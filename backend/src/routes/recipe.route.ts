import { Router } from "express";
import { getRecipes, getRecipeById } from "../controllers/recipe.controller";

const recipeRouter = Router();

recipeRouter.get("/", getRecipes);
recipeRouter.get("/:id", getRecipeById);

export default recipeRouter;
