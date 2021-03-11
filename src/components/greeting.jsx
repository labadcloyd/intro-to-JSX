import React from "react";

function Greeting() {
  let greeting = "Hello!";
  let greetingStyle = {
    fontSize: "1.7rem",
    color: "#000000"
  };
  let currentHour = new Date().getHours();

  if (currentHour > 5 && currentHour <= 10) {
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
  return (
    <div>
      <h1 style={greetingStyle}>{greeting}</h1>
      {currentHour > 8 ? (
        <h2>Start working</h2>
      ) : (
        <h2>You should be sleeping</h2>
      )}
    </div>
  );
}

export default Greeting;
