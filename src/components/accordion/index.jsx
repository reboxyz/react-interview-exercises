// Single selection Accordion
// Multiple selection Accordion

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  // current selected single-selection Accordion
  const [accordionMode, setAccordionMode] = useState("single"); // 'single', 'multiple'
  const [selected, setSelected] = useState([]);

  const handleSelection = (currentId) => {
    if (accordionMode === "single") {
      if (selected.includes(currentId)) {
        setSelected([]);
      } else {
        setSelected([currentId]);
      }
    }

    if (accordionMode === "multiple") {
      if (selected.includes(currentId)) {
        setSelected([...selected.filter((val) => val !== currentId)]);
      } else {
        setSelected([...selected, currentId]);
      }
    }
  };

  const handleModeSelection = (mode) => {
    setAccordionMode(mode);
    setSelected([]);
  };

  return (
    <div className="wrapper">
      <div className="mode_selection">
        Accordion mode:
        <input
          type="radio"
          id="single"
          name="accordion_mode"
          onClick={() => handleModeSelection("single")}
          onChange={() => handleModeSelection("single")}
          checked={accordionMode === "single"}
        />
        <label htmlFor="single">Single</label>
        <input
          type="radio"
          id="multiple"
          name="accordion_mode"
          onClick={() => handleModeSelection("multiple")}
          onChange={() => handleModeSelection("multiple")}
          checked={accordionMode === "multiple"}
        />
        <label htmlFor="multiple">Multiple</label>
      </div>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                aria-hidden="true"
                className="title"
                onClick={() => handleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected.indexOf(dataItem.id) !== -1 && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
