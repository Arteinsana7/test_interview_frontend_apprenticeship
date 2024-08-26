import React from "react";
// Passing a pops 'name'then be called in the App.js. this leave the freedom to change the name everytime for another name.

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
// export the component
export default Greeting;
