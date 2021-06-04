export const filterlist = [
  {
    id: 1,
    value: 'All Launches',
    queryParams: '?limit=12',
  },
  {
    id: 2,
    value: 'Upcoming Launches',
    queryParams: '/upcoming/?limit=12',
  },
  {
    id: 3,
    value: 'Successful Launches',
    queryParams: '/?launch_success=true&limit=12',
  },
  {
    id: 4,
    value: 'Failed Launches',
    queryParams: '/?launch_success=false&limit=12',
  },
];
