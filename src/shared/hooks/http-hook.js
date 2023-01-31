import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // A reference here in the end is just a piece of data
  // which will not change when this function(useHttpClient) runs again
  // useHttpClient run again whenever the component which uses this hook rerenders
  // this will basically store data across renderer cycles
  const activeHttpRequests = useRef([]);

  // The function never gets recreated when the component that uses this hook renders
  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        return responseData;
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  useEffect(() => {
    const ctrlArray = activeHttpRequests.current;
    return () => {
      ctrlArray.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
