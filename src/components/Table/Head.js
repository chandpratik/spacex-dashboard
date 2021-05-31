import React from 'react';

export const Head = () => {
  return (
    <thead>
      <tr className="h-10 bg-gray-100">
        <th className="text-sm font-medium text-center select-none">No:</th>
        <th className="text-sm font-medium text-left select-none">
          Launched (UTC)
        </th>
        <th className="text-sm font-medium text-left select-none">Location</th>
        <th className="text-sm font-medium text-left select-none">Mission</th>
        <th className="text-sm font-medium text-center select-none">Orbit</th>
        <th className="text-sm font-medium text-center select-none">
          Launch Status
        </th>
        <th className="text-sm font-medium text-center select-none">Rocket</th>
      </tr>
    </thead>
  );
};
