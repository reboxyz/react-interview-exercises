import React from "react";
import Tabs from "./tabs";

function RandomComponent() {
  return <div>This is from RandomComponent!</div>;
}

const TabComponent = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is the contents for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>The content for Tab 2 here</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabComponent;
