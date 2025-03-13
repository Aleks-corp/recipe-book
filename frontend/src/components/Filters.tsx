import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { filterOptions, filterTypes } from "../constant/filterConstant";
import { FilterOption, FilterType } from "../types/filter.types";
import { useAppDispatch } from "../redux/hooks";
import { setCurrentFilter } from "../redux/recipesSlice";

const Filters = () => {
  const dispatch = useAppDispatch();
  const [filterType, setFilterType] = useState<FilterType | "">("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilterTypeChange = (
    selectedOption: SingleValue<FilterOption>
  ) => {
    if (selectedOption) {
      setFilterType(selectedOption.value as FilterType);
      setSelectedFilter("");
    }
  };

  const handleFilterChange = (selectedOption: SingleValue<FilterOption>) => {
    if (selectedOption) {
      setSelectedFilter(selectedOption.value);
      dispatch(
        setCurrentFilter({
          filter: selectedOption.value,
          filterType: filterType,
        })
      );
    }
  };

  const handleClear = () => {
    setFilterType("");
    setSelectedFilter("");
    dispatch(setCurrentFilter({ filter: "", filterType: "" }));
  };

  return (
    <div className="flex items-center gap-4 max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold  text-center text-gray-800">
        Filter Recipes
      </h2>

      <div className="flex items-center gap-4">
        <div className="flex gap-2 items-center">
          <label className="text-sm font-medium text-gray-700 mb-1">Type</label>
          <Select
            options={filterTypes}
            onChange={handleFilterTypeChange}
            placeholder="Choose Type..."
            className="w-full"
          />
        </div>

        {filterType && (
          <div className="flex gap-2 items-center">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Filter
            </label>
            <Select
              options={filterType ? filterOptions[filterType] : []}
              onChange={handleFilterChange}
              placeholder={`Choose ${filterType}...`}
              value={
                selectedFilter
                  ? { value: selectedFilter, label: selectedFilter }
                  : null
              }
              className="w-full"
            />
          </div>
        )}

        <button
          onClick={handleClear}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none transition h-10"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
