import { useEffect, useState } from "react";
import "./styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({
  url = "https://picsum.photos/v2/list",
  page = 1,
  limit = 5,
}) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        console.log(data);
        setImages(data);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const handlePrevious = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1); // last image
    } else {
      setCurrentSlide(currentSlide - 1); // previous image
    }
  };

  const handleNext = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0); // first image
    } else {
      setCurrentSlide(currentSlide + 1); // next image
    }
  };

  if (loading) {
    return <div>Loading data... please wait!</div>;
  }

  if (error !== null) {
    return <div>Error occured! {error}</div>;
  }

  return (
    <div className="image-slider">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={() => handlePrevious()}
      />
      {images.length > 0 &&
        images.map((image, index) => (
          <img
            key={image.id}
            alt={image.url}
            src={image.download_url}
            className={
              currentSlide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          />
        ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={() => handleNext()}
      />
      <span className="circle-indicators">
        {images.length > 0 &&
          images.map((image, index) => (
            <button
              key={image.id}
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "current-indicator inactive-current-indicator"
              }
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
      </span>
    </div>
  );
}
