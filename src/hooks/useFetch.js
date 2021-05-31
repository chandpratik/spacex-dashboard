import { useState, useEffect } from 'react';

import { usePaginationContext } from '../context';

export const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setTotalItemCount } = usePaginationContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        setTotalItemCount(res.headers.get('spacex-api-count'));
        const json = await res.json();
        setLoading(false);
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url, setTotalItemCount]);

  return { response, error, loading };
};
