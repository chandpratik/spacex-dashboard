import { createContext, useState, useContext } from 'react';

export const TableContext = createContext(null);

export const TableContextProvider = ({ children }) => {
  const [selection, setSelection] = useState('All Launches');
  const [queryFilter, setQueryFilter] = useState('/?limit=12');

  const value = {
    selection,
    setSelection,
    queryFilter,
    setQueryFilter,
  };
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export function useTableContext() {
  return useContext(TableContext);
}
