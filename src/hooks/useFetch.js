import axios from 'axios';

import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get(url);
      setResponse(result.data);
      setLoading(false);
      setTotalItemsCount(Number(result.headers['spacex-api-count']));
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { response, error, totalItemsCount, loading };
};
