import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./greeting";
import Images from "./images";
import { Add, Minus, Divide, Multiply } from "./math";
import User from "./user";

let topic = "Here are my favorite foods:";
let d = new Date();
let currentYear = d.getFullYear();

ReactDOM.render(
  <div>
    <Greeting />
    <h2>{topic}</h2>
    <Images />
    <p>{Add(3, 4)}</p>
    <hr></hr>
    <User userName="labadcloyd" email="labadcloyd@1.com" tel="0923423456" />
    <hr></hr>
    <p>Copyright {currentYear}</p>
  </div>,
  document.querySelector("#root")
);
