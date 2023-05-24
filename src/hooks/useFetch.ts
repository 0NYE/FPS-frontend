import { useState, useEffect } from "react";

export const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(error as Error);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};
