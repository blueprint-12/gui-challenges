import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [isSummary, setIsSummary] = useState(true);

  return (
    <div className="App">
      <div id="main-layout">
        <Card />
        <Card isSummary={isSummary} />
      </div>
    </div>
  );
}

export default App;
