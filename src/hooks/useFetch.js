import { useState, useEffect } from 'react';
export const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        // const result = await json.data;
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error };
};
