import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card />
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        Coded by <a href="#">Your Name Here</a>
      </div>
    </div>
  );
}

export default App;
