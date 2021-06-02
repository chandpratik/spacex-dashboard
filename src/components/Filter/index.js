import React, { useState } from 'react';

import { ChevronDownIcon, FilterIcon } from '@heroicons/react/outline';

import { filterlist } from '../../constants/filterlist';
import { useTableContext, usePaginationContext } from '../../context';

export function Filter() {
  const [open, setOpen] = useState(false);

  const { selection, setSelection, setQueryFilter } = useTableContext();
  const { setOffset, setActiveNumber } = usePaginationContext();

  const toggle = () => setOpen(!open);

  const handleOnClick = (filter) => {
    setOpen(!open);
    setSelection(filter.value);
    setQueryFilter(filter.queryParams);
    setOffset(0);
    setActiveNumber(1);
  };

  return (
    <div className="flex-column w-52 h-8 mt-4 ml-auto opacity-100 ">
      <div
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
        className="flex justify-around "
      >
        <FilterIcon className="inline-block h-4 w-4 mt-1 " />

        <div>
          <span className="font-semibold align-top text-gray-600 ">
            {selection}
          </span>
          <ChevronDownIcon className="inline-block h-4 w-4 ml-2 " />
        </div>
      </div>
      {open && (
        <ul className="py-2 border-2 rounded relative z-20 bg-white ">
          {filterlist.map((filter) => (
            <li key={filter.id} className="py-1 bg-white hover:bg-gray-100">
              <button onClick={() => handleOnClick(filter)}>
                <span className="font-sm pl-4">{filter.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
