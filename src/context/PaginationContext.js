import { createContext, useState, useContext } from 'react';

export const PaginationContext = createContext(null);

export const PaginationContextProvider = ({ children }) => {
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [activeNumber, setActiveNumber] = useState(1);

  const value = {
    totalItemCount,
    setTotalItemCount,
    offset,
    setOffset,
    activeNumber,
    setActiveNumber,
  };
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};

export function usePaginationContext() {
  return useContext(PaginationContext);
}
