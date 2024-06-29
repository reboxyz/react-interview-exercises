import { /*useEffect,*/ useState } from "react";

export default function useFetch(url, options = {}) {
  // states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, { ...options });

      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(`Error encountered: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  /* Note! Do not preload
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  */

  return { data, error, loading, fetchData };
}
