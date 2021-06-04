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
        totalItemsCount={totalItemsCount} //Total count of items which you are going to display
        pageRangeDisplayed={10} //Range of pages in paginator, exclude navigation blocks (prev, next, first, last pages)
        prevPageText={'<'}
        nextPageText={'>'}
        hideFirstLastPages={true}
        innerClass={'inline-flex mt-4 shadow-sm'} //Class name of <ul> tag
        itemClass={
          'text-gray-600 inline-flex items-center px-3 py-1 border text-sm font-sm cursor-pointer'
        } //Default class of the <li> tag
        activeClass={'bg-gray-300'} //Class name of active <li> tag
        disabledClass={'cursor-default opacity-20'} //Class name of the first, previous, next and last <li> tags when disabled
        onChange={handleChange}
      />
    </div>
  );
};
