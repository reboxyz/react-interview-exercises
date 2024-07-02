import React, { useRef } from "react";

const ScrollToSection = () => {
  const sectionRef = useRef();

  const data = [
    {
      label: "First Section",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Section",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Third Section",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fourth Section",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
        ref: useRef(),
      },
    },
    {
      label: "Fifth Section",
      style: {
        width: "100%",
        height: "600px",
        background: "gray",
      },
    },
  ];

  const handleScrollToSection = () => {
    let pos = sectionRef?.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={() => handleScrollToSection()}>Scroll to section</button>

      {/* Note! This is hard-coded solution as useRef() cannot be called dynamically */}
      {data.map((dataItem, index) => {
        return (
          <div
            ref={index === 2 ? sectionRef : null}
            key={dataItem.label}
            style={dataItem.style}
          >
            <h3>{dataItem.label}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollToSection;
