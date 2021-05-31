import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { Head } from './Head';
import { Row } from './Row';

export const Table = () => {
  const { response } = useFetch(
    'https://api.spacexdata.com/v3/launches?limit=12'
  );

  return (
    <table className="w-full h-100 mt-4 table-auto border-2">
      <Head />
      <tbody>
        {response.map((launch) => (
          <Row key={launch.flight_number} {...launch} />
        ))}
      </tbody>
    </table>
  );
};
