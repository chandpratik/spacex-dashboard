import React from 'react';

export const Head = () => {
  return (
    <thead>
      <tr className="h-10 bg-gray-100">
        <th className="text-sm font-medium text-center select-none w-1/16">
          No:
        </th>
        <th className="text-sm font-medium text-left select-none w-1/10">
          Launched (UTC)
        </th>
        <th className="text-sm font-medium text-left select-none w-1/10">
          Location
        </th>
        <th className="text-sm font-medium text-left select-none w-1/10">
          Mission
        </th>
        <th className="text-sm font-medium text-center select-none w-1/16">
          Orbit
        </th>
        <th className="text-sm font-medium text-center select-none w-1/12">
          Launch Status
        </th>
        <th className="text-sm font-medium text-center select-none w-1/12">
          Rocket
        </th>
      </tr>
    </thead>
  );
};
