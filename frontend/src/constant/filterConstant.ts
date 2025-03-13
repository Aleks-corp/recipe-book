import { FilterOptions } from "../types/filter.types";

export const filterTypes = [
  { value: "ingredient", label: "Ingredient" },
  { value: "category", label: "Category" },
  { value: "country", label: "Country" },
];

export const filterOptions: FilterOptions = {
  ingredient: [
    { value: "chicken_breast", label: "Chicken Breast" },
    { value: "beef", label: "Beef" },
    { value: "tomato", label: "Tomato" },
  ],
  category: [
    { value: "Seafood", label: "Seafood" },
    { value: "Vegetarian", label: "Vegetarian" },
  ],
  country: [
    { value: "Canadian", label: "Canadian" },
    { value: "Italian", label: "Italian" },
  ],
};
