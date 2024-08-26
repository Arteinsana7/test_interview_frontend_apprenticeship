import React, { useState } from "react";
//Using hooks from react useState.
const Counter = () => {
  // I have declare a state variable named 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Then i have created a function to handle incrementing the count
  const increment = () => {
    setCount(count + 1);
  };

  // Then another function to handle decrementing the count
  const decrement = () => {
    setCount(count - 1);
  };
  // onClick event handler function to call Increment, and Decrement withing a button.
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
// export the component
export default Counter;
