import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { Head } from './Head';

export const Table = () => {
  const { response } = useFetch(
    'https://api.spacexdata.com/v3/launches?limit=12'
  );

  console.log(response);

  return (
    <table className="w-full mt-4 table-auto">
      <Head />
      <tbody>
        {response.map((launch) => (
          <tr key={launch.flight_number}>
            <td>{launch.flight_number}</td>
            <td>{launch.launch_date_utc}</td>
            <td>{launch.launch_site.site_id.replace(/_/g, ' ')}</td>
            <td>{launch.mission_name}</td>
            <td className="text-center">
              {launch.rocket.second_stage.payloads[0].orbit}
            </td>
            <td className="text-center">
              {launch.upcoming
                ? 'Upcoming'
                : launch.launch_success
                ? 'Success'
                : 'Failed'}
            </td>
            <td className="text-center">{launch.rocket.rocket_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
