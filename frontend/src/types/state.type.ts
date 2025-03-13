export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strSource: string;
}

export interface RecipesState {
  recipes: Recipe[];
  totalHits: number;
  currentFilter: { filter: string; filterType: string };
  selectedRecipes: Recipe | null;
  isLoading: boolean;
  error: string;
}

export interface State {
  recipes: RecipesState;
}
