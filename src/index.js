import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./components/greeting";
import Images from "./components/images";
import { Add, Minus, Divide, Multiply, Counter } from "./components/math";
import User from "./components/user";
import contacts from "./contacts";
import CreateNewCard from "./components/Card";

let topic = "Here are my favorite foods:";
let d = new Date();
let currentYear = d.getFullYear();

ReactDOM.render(
  <div>
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateNewCard)}
    </div>
    <CreateNewCard
      name="cloyd"
      phone="123"
      email="123@123.com"
      imgURL="https://avatars.githubusercontent.com/u/67862525?s=460&u=24cc823790da24441df311ab96cfbbd3cb972ed0&v=4"
    />
    <Greeting />
    <h2>{topic}</h2>
    <Images />
    <p>{Add(3, 4)}</p>
    <hr></hr>
    <User userName="labadcloyd" email="labadcloyd@1.com" tel="0923423456" />
    <Counter />
    <hr></hr>
    <p>Copyright {currentYear}</p>
  </div>,
  document.querySelector("#root")
);
