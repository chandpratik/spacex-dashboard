import React from 'react';
import { ChevronDownIcon, FilterIcon } from '@heroicons/react/outline';

import { Filter } from '../../components';
import { filterlist } from '../../constants/filterlist';

import { useTableContext, usePaginationContext } from '../../context';

export const FilterContainer = () => {
  const {
    selection,
    setSelection,
    isDropdownOpen,
    setIsDropdownOpen,
    setQueryFilter,
  } = useTableContext();
  const { setOffset, setActiveNumber } = usePaginationContext();

  const handleOnClick = (filterObj) => {
    setIsDropdownOpen(!isDropdownOpen);
    setSelection(filterObj.value);
    setQueryFilter(filterObj.queryParams);
    setOffset(0);
    setActiveNumber(1);
  };
  return (
    <Filter>
      <Filter.Frame>
        <FilterIcon className="inline-block h-4 w-4 mt-1 " />
        <Filter.Innerframe>
          <span className="font-semibold align-top text-gray-600 ">
            {selection}
          </span>
          <ChevronDownIcon className="inline-block h-4 w-4 ml-2 " />
        </Filter.Innerframe>
      </Filter.Frame>

      {isDropdownOpen && (
        <Filter.Dropdown>
          {filterlist.map((filter) => (
            <li key={filter.id} className="py-1 bg-white hover:bg-gray-100">
              <button onClick={() => handleOnClick(filter)}>
                <span className="font-sm pl-4">{filter.value}</span>
              </button>
            </li>
          ))}
        </Filter.Dropdown>
      )}
    </Filter>
  );
};
