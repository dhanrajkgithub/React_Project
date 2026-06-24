import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    setResult(Number(num1) / Number(num2));
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setResult(0);
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid gray",
        borderRadius: "10px",
        background: "#f0f8ff",
      }}
    >
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ width: "90%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ width: "90%", padding: "8px", marginBottom: "10px" }}
      />

      <div style={{ marginBottom: "10px" }}>
        <button onClick={add}>+</button>{" "}
        <button onClick={subtract}>-</button>{" "}
        <button onClick={multiply}>×</button>{" "}
        <button onClick={divide}>÷</button>
      </div>

      <button onClick={reset}>0 Reset</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;