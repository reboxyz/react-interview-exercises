import { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorMode, setColorMode] = useState("hex"); // hex or rgb
  const [color, setColor] = useState("#000000"); // default is black color

  const handleCreateRandomColor = () => {
    if (colorMode === "hex") createRandomHexColor();
    else createRandomRGBColor();
  };

  const createRandomHexColor = () => {
    // #234344 format
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumberUtil(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  };

  const createRandomRGBColor = () => {
    // rgb(NN,NN,NN) format
    let red = randomNumberUtil(256);
    let green = randomNumberUtil(256);
    let blue = randomNumberUtil(256);

    let rgbColor = `rgb(${red},${green},${blue})`;
    setColor(rgbColor);
    console.log(rgbColor);
  };

  const randomNumberUtil = (length) => {
    return Math.floor(Math.random() * length);
  };

  useEffect(() => {
    handleCreateRandomColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setColorMode("hex")}>Create Hex Color</button>
      <button onClick={() => setColorMode("rgb")}>Create RGB Color</button>
      <button onClick={() => handleCreateRandomColor()}>
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{colorMode.toUpperCase()}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
