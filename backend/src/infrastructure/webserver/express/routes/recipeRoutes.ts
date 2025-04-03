import { Router } from "express";
import {
  getRecipesHandler,
  getRecipeByIdHandler,
} from "../controllers/RecipeController";

const router = Router();

router.get("/", getRecipesHandler);
router.get("/:id", getRecipeByIdHandler);

export default router;
