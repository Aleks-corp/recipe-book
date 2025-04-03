import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { fetchRecipes } from "../application/recipe/thunks";
import { useAppDispatch } from "../shared/hooks/useAppDispatch";
import { useAppSelector } from "../shared/hooks/useAppSelector";
import { selectCurrentFilter } from "../application/recipe/selectors";
import FiltersPanel from "../ui/FiltersPanel";
import RecipeCard from "../ui/RecipeCard";

const RecipeListPage = () => {
  const dispatch = useAppDispatch();
  const { recipes, isLoading, error } = useSelector(
    (state: RootState) => state.recipes
  );
  const { filter, filterType } = useAppSelector(selectCurrentFilter);

  useEffect(() => {
    if (filter && filterType) {
      dispatch(fetchRecipes({ filter, filterType }));
    }
    if (!filter && !filterType) {
      dispatch(fetchRecipes({}));
    }
  }, [dispatch, filter, filterType]);

  if (isLoading)
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <FiltersPanel />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default RecipeListPage;
