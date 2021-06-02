import { createContext, useState, useContext } from 'react';

export const TableContext = createContext(null);

export const TableContextProvider = ({ children }) => {
  const [selection, setSelection] = useState('All Launches');
  const [queryFilter, setQueryFilter] = useState('/?limit=12');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const value = {
    selection,
    setSelection,
    queryFilter,
    setQueryFilter,
    isDropdownOpen,
    setIsDropdownOpen,
  };
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export function useTableContext() {
  return useContext(TableContext);
}
