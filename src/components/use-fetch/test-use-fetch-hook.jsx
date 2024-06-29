import React from "react";
import useFetch from ".";

const TestUseFetchHook = () => {
  const { data, error, loading, fetchData } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(data, error, loading);

  if (loading) return <div>Loading data ...</div>;

  if (error) return <div>Error encountered: {error}</div>;

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      <button onClick={() => fetchData()}>Fetch data </button>
      {data?.products?.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default TestUseFetchHook;
