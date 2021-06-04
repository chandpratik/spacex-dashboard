import React from 'react';

import {
  Spinner,
  EmptyState,
  Table,
  Paginate,
  ErrorState,
} from '../../components';
import { RowContainer } from '../RowContainer';

import { useFetch } from '../../hooks/useFetch';
import { useTableContext, usePaginationContext } from '../../context';
import { ModalContextProvider } from '../../context';

export const TableContainer = () => {
  const { queryFilter } = useTableContext();
  const { offset } = usePaginationContext();

  const baseUrl = 'https://api.spacexdata.com/v3/launches';
  const apiUrl = `${baseUrl}${queryFilter}&offset=${offset}`;

  const { response, error, loading, totalItemsCount } = useFetch(apiUrl);

  return (
    <>
      <div className="border-2 min-h-500 rounded-md">
        <Table>
          <Table.Header>
            <Table.HeaderRow>
              <Table.HeaderCell textAlign="text-center" cellWidth="w-1/16">
                No:
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="text-left" cellWidth="w-1/10">
                Launched (UTC)
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="text-left" cellWidth="w-1/10">
                Location
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="text-left" cellWidth="w-1/10">
                Mission
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="text-center" cellWidth="w-1/16">
                Orbit
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="text-center" cellWidth="w-1/16">
                Launch Status
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="text-center" cellWidth="w-1/16">
                Rocket
              </Table.HeaderCell>
            </Table.HeaderRow>
          </Table.Header>
          {loading ? (
            <Spinner />
          ) : response.length < 1 && !error ? (
            <EmptyState />
          ) : error ? (
            <ErrorState error={error} />
          ) : (
            <Table.Body>
              {response.map((launch) => (
                <ModalContextProvider>
                  <RowContainer
                    key={`${launch.flight_number}_${launch.launch_date_unix}`}
                    {...launch}
                  />
                </ModalContextProvider>
              ))}
            </Table.Body>
          )}
        </Table>
      </div>
      <Paginate totalItemsCount={totalItemsCount} />
    </>
  );
};
