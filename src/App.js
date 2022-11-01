import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const firstNumber = () => {
    setCount(count + 1);
  };
  const secondNumber = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter">
      <button onClick={secondNumber}>-{count}</button>
      <input value={count} />
      <button onClick={firstNumber}>+{count}</button>
    </div>
  );
}

export default App;
