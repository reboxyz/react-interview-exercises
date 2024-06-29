import React from "react";

const Suggestions = ({ data, onSelect }) => {
  return (
    <ul>
      {data?.length > 0 &&
        data.map((item) => (
          <li key={item} onClick={() => onSelect(item)} aria-hidden="true">
            {item}
          </li>
        ))}
    </ul>
  );
};

export default Suggestions;
