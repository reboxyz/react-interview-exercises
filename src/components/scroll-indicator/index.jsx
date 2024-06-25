import React, { useEffect, useState } from "react";
import "./styles.css";

const ScrollIndicator = ({
  url = "https://dummyjson.com/products",
  limit = 20,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data?.products?.length > 0) {
        setData(data.products);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleScrollPercentage = () => {
    console.log("document.body.scrollTop", document.body.scrollTop);
    console.log(
      "document.documentElement.scrollTop",
      document.documentElement.scrollTop
    );
    console.log(
      "document.documentElement.scrollHeight",
      document.documentElement.scrollHeight
    );
    console.log(
      "document.documentElement.clientHeight",
      document.documentElement.clientHeight
    );

    // Compute
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100); // Note! Convert to percent
  };

  useEffect(() => {
    fetchData(`${url}?limit=${limit}`);
  }, [url, limit]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    // cleanup
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) return <div>Loading data...</div>;

  if (errorMessage) return <div>Error encountered: {errorMessage}</div>;

  //console.log(data);
  console.log("scrollPercentage", scrollPercentage);

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data?.length > 0 &&
          data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)}
      </div>
    </div>
  );
};

export default ScrollIndicator;
