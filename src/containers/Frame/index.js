import React from 'react';

import { Paginate, Table } from '../../components';
import { FilterContainer } from '../FilterContainer';

export const Frame = () => {
  return (
    <div className="w-3/4 mx-auto">
      <FilterContainer />
      <Table />
      <Paginate />
    </div>
  );
};
