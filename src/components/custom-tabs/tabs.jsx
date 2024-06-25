import React, { useState } from "react";
import "./tabs.css";

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClick = (currentIndex) => {
    setCurrentTabIndex(currentIndex);
    onChange(currentIndex);
  };

  return (
    <div className="tabs-wrapper">
      <div className="tabs-heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            key={tabItem.label}
            aria-hidden={true}
            onClick={() => handleClick(index)}
          >
            <span className="tabs-heading-label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabsContent[currentTabIndex]?.content}
      </div>
    </div>
  );
};

export default Tabs;
