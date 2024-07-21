import { useMemo } from "react";
import { useRouter } from "next/router";

interface useUrlQueryReturnType {
  query: { [key: string]: string | string[] | undefined };
  queryParams: URLSearchParams;
  updateQueryParam: (param: string, value: string, path?: string) => void;
  deleteQueryParam: (param: string) => void;
  getQueryString: () => string; // Add this function to get the query string
}

function useUrlQuery(): useUrlQueryReturnType {
  const router = useRouter();
  const { query, pathname } = router;
  const queryParams = useMemo(() => {
    const params = new URLSearchParams();
    Object.keys(query).forEach((key) => {
      const value = query[key];
      if (Array.isArray(value)) {
        value.forEach((v) => params.append(key, v));
      } else if (value !== undefined) {
        params.set(key, value);
      }
    });
    return params;
  }, [query]);

  const updateHistory = (path?: string) => {
    router.replace(
      {
        pathname: path || pathname,
        query: Object.fromEntries(queryParams.entries()),
      },
      undefined,
      { shallow: true }
    );
  };

  const updateQueryParam = (param: string, value: string, path?: string) => {
    queryParams.set(param, value);
    updateHistory(path);
  };

  const deleteQueryParam = (param: string) => {
    queryParams.delete(param);
    updateHistory();
  };

  const getQueryString = () => queryParams.toString(); // This function will return the query string which is useful when you want to get all the query params as a string and pass it to next url

  return {
    query,
    queryParams,
    updateQueryParam,
    deleteQueryParam,
    getQueryString,
  };
}

export default useUrlQuery;
