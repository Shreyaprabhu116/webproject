import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#3498db");
  const [copied, setCopied] = useState(false);

  const generateColor = () => {
    const randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setColor(randomHex);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="container">
      <h1>Dynamic Color Generator</h1>
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <p className="color-code">{color}</p>
      <div className="buttons">
        <button onClick={generateColor}>Generate Color</button>
        <button onClick={copyToClipboard}>Copy Color Code</button>
      </div>
      {copied && <p className="copied-msg">Copied!</p>}
    </div>
  );
}

export default App