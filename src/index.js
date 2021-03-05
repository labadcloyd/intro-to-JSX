import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./greeting";
import Images from "./images";

let topic = "Here are my favorite foods:";
let d = new Date();
let currentYear = d.getFullYear();

ReactDOM.render(
  <div>
    <Greeting />
    <h2>{topic}</h2>
    <Images />
    <hr></hr>
    <p>Copyright {currentYear}</p>
  </div>,
  document.querySelector("#root")
);
