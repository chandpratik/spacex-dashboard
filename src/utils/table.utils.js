import moment from 'moment';

export const formatLaunchDate = (status, utcDate) => {
  let formattedDate;
  if (status) {
    formattedDate = moment.utc(utcDate).format(`DD MMMM YYYY HH:mm`);
  } else {
    formattedDate = moment.utc(utcDate).format(`DD MMMM YYYY [at] HH:mm`);
  }
  return formattedDate;
};

export const appendZero = (number) => {
  return number / 10 < 1 ? '0' + number : number;
};

export const setLaunchStatus = (upcoming, launch_success) => {
  const launchStatus = upcoming
    ? 'Upcoming'
    : launch_success
    ? 'Success'
    : 'Failed';

  return launchStatus;
};

export const setBadgeColour = (launchStatus) => {
  const badgeColour =
    launchStatus === 'Upcoming'
      ? 'bg-yellow-200'
      : launchStatus === 'Success'
      ? 'bg-green-200'
      : 'bg-red-200';
  return badgeColour;
};
