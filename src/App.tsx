import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [details, setDetails] = useState({ count: 0, name: "" });

  const handleIncrease = (): void => {
    setDetails((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };

  const handleDecrease = (): void => {
    setDetails((prev) => ({
      ...prev,
      count: prev.count - 1,
    }));
  };

  const handleName = (e:string): void => {
    setDetails((prev) => ({
      ...prev,
      name: e,
    }));
  };

  return (
    <div className="App">
      <Header text="HEADER" />
      <input type="text" onChange={(e) => handleName(e.target.value)} />
      <p>
        {details.name} has clicked: {details.count}
      </p>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default App;
