import React, { useRef, useState } from "react";
import useOutsideClick from ".";

const TestUseOutsideClickHook = () => {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref} style={{ backgroundColor: "greenyellow" }}>
          <h1>This is random content</h1>
          <p>Please click outside of this component to close.</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default TestUseOutsideClickHook;
