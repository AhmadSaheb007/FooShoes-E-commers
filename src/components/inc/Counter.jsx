// Filename - App.js

import React, { useState } from "react";

// Importing app.css is css file to add styling
// import "./App.css";

const Counter = () => {
  // Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div>
          <div className="d-flex">
            <button className="btn cart-button text-light fs-2 fw-medium border-2 border-light" onClick={handleClick1}>+</button>
            <div className="mx-3 py-4 fs-4">{counter}</div>
            <button className="btn pb-2 cart-button text-light fs-1 fw-medium border-2 border-light" onClick={handleClick2}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
