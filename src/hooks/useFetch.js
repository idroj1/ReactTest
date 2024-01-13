import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [hookState, setHookState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setHookState({
      ...hookState,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    // console.log(data);
    setHookState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: hookState.data,
    isLoading: hookState.isLoading,
    hasError: hookState.hasError,
  };
};