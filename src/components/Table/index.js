import React from 'react';

import { Head } from './Head';
import { Row } from './Row';
import { Spinner } from '../Spinner';
import { EmptyState } from '../EmptyState';

import { useFetch } from '../../hooks/useFetch';
import { useTableContext, usePaginationContext } from '../../context';
import { ModalContextProvider } from '../../context';

export const Table = () => {
  const { queryFilter } = useTableContext();
  const { offset } = usePaginationContext();

  const apiUrl = `https://api.spacexdata.com/v3/launches${queryFilter}&offset=${offset}`;

  const { response, loading } = useFetch(apiUrl);

  return (
    <div className="border-2 min-h-500 rounded-md mt-4">
      <table className="w-full table-fixed relative">
        <Head />
        {loading ? (
          <Spinner />
        ) : response.length < 1 ? (
          <EmptyState />
        ) : (
          <tbody>
            {response.map((launch) => (
              <ModalContextProvider>
                <Row
                  key={`${launch.flight_number} ${launch.launch_date_unix}`}
                  {...launch}
                />
              </ModalContextProvider>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};
