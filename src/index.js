import React from "react";
import ReactDOM from "react-dom";

let topic = "food";
let favFoods = ["French Fries", "Chicken Breasts", "Burger"];
var d = new Date();
var currentYear = d.getFullYear();

ReactDOM.render(
  <div>
    <h1 contentEditable="true">{topic}</h1>
    <div>
      <img
        className="image"
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg"
        alt=""
      />
      <img
        className="image"
        src="https://www.thespruceeats.com/thmb/R4NQu-Fi4kEX-Ys3teC41dJoMy0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simple-fried-chicken-breast-cutlets-3056859-Hero-5b8d4b3646e0fb0025e8f8ec.jpg"
        alt=""
      />
      <img
        className="image"
        src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps36597_SD153319C10_07_6b.jpg"
        alt=""
      />
    </div>
    <hr></hr>
    <p>Copyright {currentYear}</p>
  </div>,
  document.querySelector("#root")
);
