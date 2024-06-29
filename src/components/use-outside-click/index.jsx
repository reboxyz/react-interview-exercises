import { useEffect } from "react";

const useOutsideClick = (ref, handler) => {
  const listener = (evt) => {
    // Check if ref element is null or target is within the current ref element
    if (!ref.current || ref.current.contains(evt.target)) {
      return;
    }

    handler(evt);
  };

  useEffect(() => {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handler, ref]);
};

export default useOutsideClick;
