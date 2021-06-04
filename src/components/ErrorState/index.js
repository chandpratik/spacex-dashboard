import React from 'react';

export const ErrorState = ({ error }) => {
  return (
    <p className="text-center text-gray-500 absolute top-135/100 left-38/100">
      {error}
    </p>
  );
};
