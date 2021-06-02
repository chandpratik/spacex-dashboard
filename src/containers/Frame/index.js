import React from 'react';

import { Filter, Paginate, Table } from '../../components';

export const Frame = () => {
  return (
    <div className="w-3/4 mx-auto">
      <Filter />
      <Table />
      <Paginate />
    </div>
  );
};
