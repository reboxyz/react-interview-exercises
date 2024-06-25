import QRCode from "react-qr-code";
import "./styles.css";
import { useState } from "react";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div className="qr-code-container">
      <h1>QR Code Generator</h1>
      <div className="input-wrapper">
        <input
          type="text"
          name="qr-code"
          placeholder="Enter value"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={handleGenerateQRCode} disabled={input?.trim() === ""}>
          Generate
        </button>
      </div>
      <div>
        <QRCode
          id="qr-code-component"
          value={qrCode}
          size={400}
          bgColor="#fff"
        />
      </div>
    </div>
  );
}
