export type FilterOption = {
  value: string;
  label: string;
};

export type FilterOptions = {
  ingredient: FilterOption[];
  category: FilterOption[];
  country: FilterOption[];
};

export type FilterType = keyof FilterOptions;
