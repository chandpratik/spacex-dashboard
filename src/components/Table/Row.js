import React from 'react';

import {
  formatLaunchDate,
  appendZero,
  setBadgeColour,
  setLaunchStatus,
} from '../../utils/table.utils';
import { Badge } from '../Badge';

export const Row = ({
  flight_number,
  launch_date_utc,
  launch_site,
  mission_name,
  rocket,
  upcoming,
  launch_success,
}) => {
  const launch_date = formatLaunchDate(launch_success, launch_date_utc);
  const no = appendZero(flight_number);
  const launchStatus = setLaunchStatus(upcoming, launch_success);
  const badgeColour = setBadgeColour(launchStatus);

  const textColour =
    launchStatus === 'Upcoming'
      ? 'text-yellow-900'
      : launchStatus === 'Success'
      ? 'text-green-800'
      : 'text-red-800';

  return (
    <tr>
      <td className="text-sm text-center font-normal pr-3">{no}</td>
      <td className="text-sm font-normal">{launch_date}</td>
      <td className="text-sm font-normal">{launch_site.site_name}</td>
      <td className="text-sm font-normal">{mission_name}</td>
      <td className="text-sm text-center font-normal">
        {rocket.second_stage.payloads[0].orbit}
      </td>
      <td className="text-sm text-center font-normal">
        <Badge
          status={launchStatus}
          badgeColour={badgeColour}
          badgeTextColour={textColour}
        />
      </td>
      <td className="text-sm text-center font-normal">{rocket.rocket_name}</td>
    </tr>
  );
};
