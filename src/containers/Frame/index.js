import React from 'react';

import { FilterContainer } from '../FilterContainer';
import { TableContainer } from '../TableContainer';

export const Frame = () => {
  return (
    <div className="w-3/4 mx-auto mt-10">
      <FilterContainer />
      <TableContainer />
    </div>
  );
};
