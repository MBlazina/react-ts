import { useState, useEffect, createContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ThemeContextProvider } from "./context/ThemeContext";
function App() {
  const [details, setDetails] = useState<{ count: number; name: string }>({ count: 0, name: "" });

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

  const handleName = (e: string): void => {
    setDetails((prev) => ({
      ...prev,
      name: e,
    }));
  };

  useEffect(() => {
    document.title = `count: ${details.name}`;
    console.log("updated with useEffect");
  }, [details.name]);

  return (
    <ThemeContextProvider>
      <div className="App">
        <Header text="HEADER" />
        <input type="text" onChange={(e) => handleName(e.target.value)} />
        <p>
          {details.name} has clicked: {details.count}
        </p>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
