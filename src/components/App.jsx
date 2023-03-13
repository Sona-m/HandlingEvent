import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [isMouseover, setIsMouseOver] = useState(false);

  function handleClick() {
    setHeading("Logged in");
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }
  function handleMouseOut() {
    setIsMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseover ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
