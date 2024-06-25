import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import "./styles.css";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0); // Note! Rating starts at 1
  const [hover, setHover] = useState(0); // Number of stars that are hovered

  const handleClick = (currentIndex) => {
    //console.log("handleClick", currentIndex);
    setRating(currentIndex);
  };

  const handleMouseEnter = (currentIndex) => {
    //console.log("handleMouseEnter", currentIndex);
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    //console.log("handleMouseLeave");
    setHover(rating); // Note! Set to current rating
  };

  return (
    <div className="star-rating">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={uuid()}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
