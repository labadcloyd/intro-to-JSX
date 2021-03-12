import React from "react";
import { useState } from "react";

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
    setCount(count++);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
    </div>
  );
}
export { Add, Minus, Divide, Multiply, Counter };
