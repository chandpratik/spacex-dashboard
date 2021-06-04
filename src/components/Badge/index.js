import React from 'react';

export const Badge = ({ status, badgeColour, badgeTextColour }) => {
  return (
    <div
      className={` max-w-min py-1 mx-auto rounded-full bg-gray-200 text-xs text-gray-800 ${badgeColour}`}
    >
      <span className={`text-xs mx-2 font-semibold ${badgeTextColour}`}>
        {status}
      </span>
    </div>
  );
};
