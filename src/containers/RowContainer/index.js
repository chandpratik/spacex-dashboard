import React from 'react';

import { Badge, Modal, Row } from '../../components';

import { useModalContext } from '../../context';
import {
  formatLaunchDate,
  appendZero,
  setBadgeColour,
  setLaunchStatus,
} from '../../utils/table.utils';

export const RowContainer = (props) => {
  const { showModal } = useModalContext();
  const {
    flight_number,
    launch_date_utc,
    launch_site,
    mission_name,
    rocket,
    upcoming,
    launch_success,
  } = props;
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
    <>
      <Row>
        <Row.DataCell textAlign="text-center">{no}</Row.DataCell>
        <Row.DataCell textALign="text-left">{launch_date}</Row.DataCell>
        <Row.DataCell textALign="text-left">
          {launch_site.site_name}
        </Row.DataCell>
        <Row.DataCell textALign="text-left">{mission_name}</Row.DataCell>
        <Row.DataCell textAlign="text-center">
          {rocket.second_stage.payloads[0].orbit}
        </Row.DataCell>
        <Row.DataCell textALign="text-center">
          <Badge
            status={launchStatus}
            badgeColour={badgeColour}
            badgeTextColour={textColour}
          />
        </Row.DataCell>
        <Row.DataCell textAlign="text-center">
          {rocket.rocket_name}
        </Row.DataCell>
      </Row>
      {showModal && (
        <Modal
          {...props}
          date={launch_date}
          badgeComponent={
            <Badge
              status={launchStatus}
              badgeColour={badgeColour}
              badgeTextColour={textColour}
            />
          }
        />
      )}
    </>
  );
};
