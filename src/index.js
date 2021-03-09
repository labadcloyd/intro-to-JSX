import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./components/greeting";
import Images from "./components/images";
import { Add, Minus, Divide, Multiply } from "./components/math";
import User from "./components/user";
import contacts from "./contacts";
import Card from "./components/Card";
import { createNewCard } from "./components/Card";

let topic = "Here are my favorite foods:";
let d = new Date();
let currentYear = d.getFullYear();

ReactDOM.render(
  <div>
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createNewCard)}
    </div>
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
