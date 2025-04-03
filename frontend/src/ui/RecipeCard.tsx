import { Link } from "react-router-dom";
import { Recipe } from "../domain/recipe/types";
import { useEffect, useState } from "react";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50); // трохи затримки для анімації
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Link
      to={`/recipe/${recipe.idMeal}`}
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-out hover:scale-105 ${
        show ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
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
  );
};

export default RecipeCard;
