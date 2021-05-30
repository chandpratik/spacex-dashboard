import React from 'react';

export const Head = () => {
  return (
    <thead>
      <tr className="bg-gray-100">
        <th className="text-left">No:</th>
        <th className="text-left">Launched (UTC)</th>
        <th className="text-left">Location</th>
        <th className="text-left">Mission</th>
        <th className="text-center">Orbit</th>
        <th className="text-center">Launch Status</th>
        <th className="text-center">Rocket</th>
      </tr>
    </thead>
  );
};
