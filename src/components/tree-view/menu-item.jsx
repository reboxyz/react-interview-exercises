import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({}); // Object or dictionary

  const handleToggleChildren = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      // Note! Negation of the following values gives true in javaScript: false; undefined; null; 0
      [currentLabel]: !displayCurrentChildren[currentLabel], // Note! true or false which when value exists becomes false due to negation
    });
  };

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item?.children?.length > 0 && (
          <span
            aria-hidden="true"
            onClick={() => handleToggleChildren(item.label)}
          >
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        )}
      </div>

      {item?.children?.length > 0 && displayCurrentChildren[item.label] && (
        <MenuList list={item?.children} />
      )}
    </li>
  );
};

export default MenuItem;
