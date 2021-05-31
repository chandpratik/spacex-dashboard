import React from 'react';

import { Filter, Paginate, Table } from '../../components';
import { TableContextProvider, PaginationContextProvider } from '../../context';

export const Frame = () => {
  return (
    <TableContextProvider>
      <PaginationContextProvider>
        <div className="w-3/4 mx-auto">
          <Filter />
          <Table />
          <Paginate />
        </div>
      </PaginationContextProvider>
    </TableContextProvider>
  );
};
