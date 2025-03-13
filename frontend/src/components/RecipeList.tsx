import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../redux/recipes.thunk";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectCurrentFilter } from "../redux/selector";
import Filters from "./Filters";

const RecipeList = () => {
  const dispatch = useAppDispatch();
  const { recipes, isLoading, error } = useSelector(
    (state: RootState) => state.recipes
  );
  const { filter, filterType } = useAppSelector(selectCurrentFilter);

  useEffect(() => {
    if (filter && filterType) {
      dispatch(fetchRecipes({ filter, filterType }));
    } else {
      dispatch(fetchRecipes({}));
    }
  }, [dispatch, filter, filterType]);

  if (isLoading)
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Filters />
      <h2 className="text-2xl font-semibold text-center mb-6">
        {filter ? `Filtered by ${filterType}` : "All Recipes"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.idMeal}
            to={`/recipe/${recipe.idMeal}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {recipe.strMeal}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
