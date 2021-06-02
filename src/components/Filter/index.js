import React from 'react';

import { useTableContext } from '../../context';

export function Filter({ children }) {
  return (
    <div className="flex-column w-52 h-8 mt-4 ml-auto opacity-100 ">
      {children}
    </div>
  );
}

Filter.Frame = function FilterFrame({ children, action }) {
  const { isDropdownOpen, setIsDropdownOpen } = useTableContext();
  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div
      tabIndex={0}
      role="button"
      onKeyPress={handleClick}
      onClick={handleClick}
      className="flex justify-around"
    >
      {children}
    </div>
  );
};

Filter.Innerframe = function FilterInnerframe({ children }) {
  return <div>{children}</div>;
};

Filter.Dropdown = function FilterDropdown({ children }) {
  return (
    <ul className="py-2 border-2 rounded relative z-20 bg-white">{children}</ul>
  );
};
