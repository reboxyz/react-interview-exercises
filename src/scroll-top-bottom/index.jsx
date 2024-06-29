import React, { useEffect, useRef } from "react";
import useFetch from "../components/use-fetch";

const ScrollToTopOrBottom = () => {
  const bottomRef = useRef(null);
  const { data, error, loading, fetchData } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) return <div>Loading data...</div>;

  if (error) return <div>Encountered an error: {error}</div>;

  return (
    <div>
      <h1>Scroll To Top and Bottom</h1>
      <h3>This is the top section</h3>
      <button onClick={() => handleScrollToBottom()}>Scroll to bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data?.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button onClick={() => handleScrollToTop()}>Scroll to top</button>
      <h3 ref={bottomRef}>This is the buttom section</h3>
    </div>
  );
};

export default ScrollToTopOrBottom;
