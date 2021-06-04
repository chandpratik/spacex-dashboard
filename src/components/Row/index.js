import React from 'react';

import { useModalContext } from '../../context';

export const Row = ({ children }) => {
  const { showModal, setShowModal } = useModalContext();

  return (
    <tr
      className="cursor-pointer relative h-9.5"
      onClick={() => setShowModal(!showModal)}
    >
      {children}
    </tr>
  );
};

Row.DataCell = function RowDataCell({ children, textAlign }) {
  return <td className={`text-sm font-normal ${textAlign}`}>{children}</td>;
};
