import { useEffect, useState } from "react";

const ApiCallHoc = (WrappedComponent, initialUrl) => {
  const ApiWrapper = (props) => {
    const [fetchUrl, setFetchUrl] = useState(initialUrl);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsLoading(true);
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const fetchUpdatedUrl = (newUrl) => {
      setFetchUrl(newUrl);
    };

    return (
      <WrappedComponent
        data={data}
        isLoading={isLoading}
        error={error}
        {...props}
        fetchUpdatedUrl={fetchUpdatedUrl}
      />
    );
  };
  return ApiWrapper;
};

export default ApiCallHoc;
