// src/App.js
import React from "react";
import "./App.css"; // Optional: if you have custom styles
import Greeting from "./components/Greeting"; // Import the Greeting component
import Counter from "./components/Counter";
import ListRendering from "./components/ListRendering";
import "bootstrap/dist/css/bootstrap.min.css";

const names = ["Alice", "Bob", "Charlie", "David"]; // Define the array of names

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" /> <Greeting name="Pedro" />{" "}
      {/* Use the Greeting component with a name of our choise on prop */}
      <Counter /> {/* Render the Counter component */}
      <header className="App-header">
        <ListRendering names={names} />{" "}
        {/* Render the ListRendering component with the names array */}
      </header>
    </div>
  );
}

export default App;
