import { useState } from "react";

function App() {

  // State Variable
  const [count, setCount] = useState(0);

  // Increase Function
  const increase = () => {
    setCount(count + 1);
  };

  // Decrease Function
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Button Click Counter</h1>
      <hr />

      <h2>Himani Clicks: {count} Times</h2>

      <button onClick={increase}>Increase</button>

      &nbsp;&nbsp;

      <button onClick={decrease}>Decrease</button>

      &nbsp;&nbsp;

      <button onClick={reset}>Reset</button>

    </div>
  );
}

export default App;
