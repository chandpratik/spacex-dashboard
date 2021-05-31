import React from 'react';

import { Head } from './Head';
import { Row } from './Row';

import { useFetch } from '../../hooks/useFetch';
import { useTableContext, usePaginationContext } from '../../context';

export const Table = () => {
  const { queryFilter } = useTableContext();
  const { offset } = usePaginationContext();

  const apiUrl = `https://api.spacexdata.com/v3/launches${queryFilter}&offset=${offset}`;

  const { response, loading } = useFetch(apiUrl);

  return (
    <table className="w-full h-100 mt-4 table-fixed border-2">
      <Head />
      {loading ? (
        'Loading....'
      ) : response.length < 1 ? (
        'No results for specified filter'
      ) : (
        <tbody>
          {response.map((launch) => (
            <Row
              key={`${launch.flight_number}${launch.launch_date_unix}`}
              {...launch}
            />
          ))}
        </tbody>
      )}
    </table>
  );
};
