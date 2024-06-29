import React from "react";
import useWindowResize from ".";

const TestUseWindowResizeHook = () => {
  const windowSize = useWindowResize();
  console.log(windowSize);

  return (
    <div>
      Window Resize (Responsive Screen)
      <p>Width is {windowSize.width}</p>
      <p>Height is {windowSize.height}</p>
    </div>
  );
};

export default TestUseWindowResizeHook;
