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
