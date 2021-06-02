import { createContext, useState, useContext } from 'react';

export const ModalContext = createContext(null);

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const value = {
    showModal,
    setShowModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export function useModalContext() {
  return useContext(ModalContext);
}
