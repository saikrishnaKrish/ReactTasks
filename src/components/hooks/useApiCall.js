import React, { useEffect, useState } from "react";

const useApiCall = ( initialUrl, initialData = null ) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
        setIsLoading(true);
        const response = await fetch(initialUrl);
        const result = await response.json();
        setData(result);

    } catch (error) {
        setError(error)
    } finally {
        setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, [initialUrl]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useApiCall;
