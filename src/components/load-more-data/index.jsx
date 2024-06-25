import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  const LIMIT = 20;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${page * LIMIT}`
      );
      const result = await response.json();
      console.log(result);

      if (result?.products?.length > 0) {
        //setProducts(result.products);
        setProducts((prevData) => [...prevData, ...result.products]); // Accumulate data
        setTotalProducts(result.total);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) return <div>Loading data ...</div>;

  if (error) return <div>Unexpected Error: {error}</div>;

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products?.map((item) => (
          <div key={item.id} className="product">
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button
          onClick={() => setPage(page + 1)}
          disabled={(page + 1) * LIMIT >= totalProducts} // Note! Page + 1
        >
          Load More Products
        </button>
      </div>
    </div>
  );
}
