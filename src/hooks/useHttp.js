import { useCallback, useState } from 'react';

function useHttp() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const responseData = await response.json();
      applyData(responseData);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
}

export default useHttp;
