import React from 'react';
import Pagination from 'react-js-pagination';

import { usePaginationContext } from '../../context';

export const Paginate = ({ totalItemsCount }) => {
  const { setOffset, activeNumber, setActiveNumber } = usePaginationContext();
  const handleChange = (pageNo) => {
    setOffset((pageNo - 1) * 12);
    setActiveNumber(pageNo);
  };

  return (
    <div className="float-right">
      <Pagination
        activePage={activeNumber}
        itemsCountPerPage={12}
        totalItemsCount={totalItemsCount}
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
    </div>
  );
};
