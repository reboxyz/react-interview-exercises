import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color";
import Accordion from "../accordion";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import TabComponent from "../custom-tabs/tab-component";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  // Note! 'key' must match with the keys in the 'enabledFlags'
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
    {
      key: "showCustomTab",
      component: <TabComponent />,
    },
  ];

  const checkEnabledFlags = (currentKey) => {
    return enabledFlags[currentKey];
  };

  if (loading) return <h3>Loading data...</h3>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? (
          <div key={componentItem.key}>{componentItem.component}</div>
        ) : null
      )}
    </div>
  );
};

export default FeatureFlags;
