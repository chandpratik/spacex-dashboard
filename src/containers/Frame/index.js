import React from 'react';
import Pagination from 'react-js-pagination';

import { Filter, Table } from '../../components';

export const Frame = () => {
  return (
    <div className="w-3/4 mx-auto">
      <Filter />
      <Table />
      <Pagination
        activePage={1}
        itemsCountPerPage={10}
        totalItemsCount={200}
        pageRangeDisplayed={5}
        onChange={console.log('changed')}
        prevPageText={'<'}
        nextPageText={'>'}
        hideFirstLastPages={true}
        innerClass={'inline-flex mt-4 shadow-sm'}
        itemClass={
          ' text-gray-600 relative inline-flex items-center px-3 py-1 border text-sm font-sm '
        }
      />
    </div>
  );
};
