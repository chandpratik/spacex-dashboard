import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import { ChevronDownIcon, FilterIcon } from '@heroicons/react/outline';

import { filterlist } from '../../constants/filterlist';

function Filter() {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState('All Launches');
  const toggle = () => setOpen(!open);

  Filter.handleClickOutside = () => setOpen(false);

  const handleOnClick = (item) => {
    setSelection([item]);
  };

  return (
    <div className="flex-column w-52 h-8 mt-4 ml-auto z-20 opacity-100 ">
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
              <button onClick={() => handleOnClick(filter.value)}>
                <span className="font-sm pl-4">{filter.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Filter.handleClickOutside,
};

export default onClickOutside(Filter, clickOutsideConfig);
