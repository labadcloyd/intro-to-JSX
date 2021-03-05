import React from "react";
import ReactDOM from "react-dom";

let topic = "Here are my favorite foods:";
let favFoods = ["French Fries", "Chicken Breasts", "Burger"];
let d = new Date();
let currentYear = d.getFullYear();
let greeting = "Hello!";
let greetingStyle = {
  fontSize: "1.7rem",
  color: "#000000"
};
let currentHour = new Date().getHours();
console.log(currentHour);

if (currentHour > 7 && currentHour <= 10) {
  greeting = "Good Morning";
  greetingStyle = {
    color: "#3295a8"
  };
} else if (currentHour > 10 && currentHour <= 12) {
  greeting = "Good Noon";
  greetingStyle = {
    color: "#36a832"
  };
} else if (currentHour > 12 && currentHour <= 18) {
  greeting = "Good Afternoon";
  greetingStyle = {
    color: "#a88932"
  };
} else if (currentHour > 18 && currentHour <= 24) {
  greeting = "Good Night";
  greetingStyle = {
    color: "#4232a8"
  };
}

ReactDOM.render(
  <div>
    <h1 style={greetingStyle}>{greeting}</h1>
    <h2>{topic}</h2>
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
