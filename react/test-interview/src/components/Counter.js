import React, { useState } from "react";
import "./Counter.css"; // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Count: {count}</h1>
      <div>
        <button className="counter-button increment-button" onClick={increment}>
          Increment +
        </button>
      </div>
      <div>
        <button className="counter-button decrement-button" onClick={decrement}>
          Decrement -
        </button>
      </div>
    </div>
  );
};

export default Counter;
