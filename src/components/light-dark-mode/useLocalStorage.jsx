import { useEffect, useState } from "react";

// Custom Hook
export default function useLocalStorage(key, defaultValue) {
  // Note! This is state that returns the value from localStorage
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  // Note! This will store the key-value pair to the localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue]; // value and setter
}
