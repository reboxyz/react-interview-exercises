import React from "react";
import MenuItem from "./menu-item";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list?.length > 0
        ? list.map((listItem) => (
            <MenuItem item={listItem} key={listItem.label} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
