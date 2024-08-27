import React from "react";
import "./App.css"; // Optional: if you have custom styles
// Import the Greeting component
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import ListRendering from "./components/ListRendering";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

const names = ["Alice", "Bob", "Charlie", "David"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Alice" />{" "}
      </header>
      <div className="components-container">
        <div className="counter-container">
          <Counter />
        </div>
        <ListRendering names={names} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
