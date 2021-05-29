import React from 'react';

import logo from '../../images/logo.png';

export const Header = () => {
  return (
    <div className="flex items-center place-content-center h-16 border-b-2 border-gray-50 shadow-md">
      <img src={logo} alt="" />
    </div>
  );
};
