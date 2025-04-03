export interface IRecipeApi {
  fetchRecipes(filter: {
    ingredient?: string;
    country?: string;
    category?: string;
  }): Promise<any>;

  fetchById(id: string): Promise<any>;
}
