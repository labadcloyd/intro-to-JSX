import React, { useState } from "react";
function Add(a, b) {
  return a + b;
}
function Minus(a, b) {
  return a - b;
}
function Divide(a, b) {
  return a / b;
}
function Multiply(a, b) {
  return a * b;
}
function Counter() {
  let [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}
function HourGetter() {
  let [currentTime, timeGetter] = useState("Time");
  function getHour() {
    let d = new Date().toLocaleTimeString();
    timeGetter(d);
  }
  return (
    <div>
      <h2>{currentTime}</h2>
      <button onClick={getHour}>Get Time</button>
    </div>
  );
}
export { Add, Minus, Divide, Multiply, Counter, HourGetter };
