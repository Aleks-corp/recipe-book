import Select, { SingleValue } from "react-select";
import { filterOptions, filterTypes } from "../domain/recipe/constants";
import { FilterOption, FilterType } from "../domain/recipe/types";
import { useAppDispatch } from "../shared/hooks/useAppDispatch";
import { setCurrentFilter } from "../application/recipe/slice";
import { useAppSelector } from "../shared/hooks/useAppSelector";
import { selectCurrentFilter } from "../application/recipe/selectors";

const FiltersPanel = () => {
  const dispatch = useAppDispatch();
  const { filter, filterType } = useAppSelector(selectCurrentFilter);

  const handleFilterTypeChange = (
    selectedOption: SingleValue<FilterOption>
  ) => {
    if (selectedOption) {
      dispatch(
        setCurrentFilter({
          filter: "",
          filterType: selectedOption.value as FilterType,
        })
      );
    }
  };

  const handleFilterChange = (selectedOption: SingleValue<FilterOption>) => {
    if (selectedOption && filterType) {
      dispatch(setCurrentFilter({ filter: selectedOption.value, filterType }));
    }
  };

  const handleClear = () => {
    dispatch(setCurrentFilter({ filter: "", filterType: "" }));
  };
  return (
    <div className="flex items-center gap-4 max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">Filter Recipes</h2>

      <div className="flex items-center gap-4">
        <div className="flex gap-2 items-center">
          <label className="text-sm font-medium text-gray-700">Type</label>
          <Select
            options={filterTypes}
            onChange={handleFilterTypeChange}
            placeholder="Choose Type..."
            value={
              filterType
                ? filterTypes.find((type) => type.value === filterType)
                : null
            }
            className="w-40"
          />
        </div>

        {filterType && (
          <div className="flex gap-2 items-center">
            <label className="text-sm font-medium text-gray-700">Filter</label>
            <Select
              options={filterOptions[filterType as FilterType]}
              onChange={handleFilterChange}
              placeholder={`Choose ${filterType}...`}
              value={
                filter
                  ? filterOptions[filterType as FilterType].find(
                      (opt) => opt.value === filter
                    )
                  : null
              }
              className="w-48"
            />
          </div>
        )}

        <button
          onClick={handleClear}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition h-10"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FiltersPanel;
