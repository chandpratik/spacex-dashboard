import React from 'react';

import { Filter } from '../../components';

export const Frame = () => {
  return (
    <div className="flex-column w-3/4 mx-auto">
      <Filter />
      <div className="border-2 h-60 mt-4"></div>
    </div>
  );
};
