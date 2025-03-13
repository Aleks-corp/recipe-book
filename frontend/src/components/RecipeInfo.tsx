import { useEffect } from "react";
import { fetchRecipeById } from "../redux/recipes.thunk";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectError, selectIsLoading, selectRecipe } from "../redux/selector";

const RecipeInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const selectedRecipe = useAppSelector(selectRecipe);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeById(id));
    }
  }, [id, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      {selectedRecipe ? (
        <div>
          <img
            src={selectedRecipe.strMealThumb}
            alt={selectedRecipe.strMeal}
            className="w-full h-80 object-cover rounded-lg mb-4"
          />

          <h2 className="text-3xl font-bold text-center mb-2">
            {selectedRecipe.strMeal}
          </h2>
          <h3 className="text-lg text-gray-600 text-center mb-4">
            {selectedRecipe.strArea}
          </h3>

          <p className="text-gray-800 leading-relaxed mb-6">
            {selectedRecipe.strInstructions}
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mb-3">
            Ingredients:
          </h4>
          <ul className="bg-gray-100 p-4 rounded-lg">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => {
              const ingredient =
                selectedRecipe[
                  `strIngredient${num}` as keyof typeof selectedRecipe
                ];
              const measure =
                selectedRecipe[
                  `strMeasure${num}` as keyof typeof selectedRecipe
                ];

              return ingredient ? (
                <li
                  key={num}
                  className="flex justify-between py-1 text-gray-800"
                >
                  <span>{ingredient}</span>
                  <span className="text-gray-600">{measure}</span>
                </li>
              ) : null;
            })}
          </ul>

          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Go back to Recipe List
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg">No recipe found!</div>
      )}
    </div>
  );
};

export default RecipeInfo;
