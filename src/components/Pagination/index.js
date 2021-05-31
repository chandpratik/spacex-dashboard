import React from 'react';
import Pagination from 'react-js-pagination';

import { usePaginationContext } from '../../context';

export const Paginate = () => {
  const { totalItemCount, setOffset, activeNumber, setActiveNumber } =
    usePaginationContext();
  const handleChange = (n) => {
    setOffset((n - 1) * 12);
    setActiveNumber(n);
  };

  return (
    <Pagination
      activePage={activeNumber}
      itemsCountPerPage={12}
      totalItemsCount={Number(totalItemCount)}
      pageRangeDisplayed={10}
      prevPageText={'<'}
      nextPageText={'>'}
      hideFirstLastPages={true}
      innerClass={'inline-flex mt-4 shadow-sm'}
      itemClass={
        'text-gray-600 inline-flex items-center px-3 py-1 border text-sm font-sm cursor-pointer'
      }
      activeClass={'bg-gray-300'}
      disabledClass={'cursor-default opacity-20'}
      onChange={handleChange}
    />
  );
};
