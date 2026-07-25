import { useState } from "react";

function App() {

  // State Variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Button Click Counter</h1>
      <hr />

      <h2>Himani Clicks: {count} Times</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      &nbsp;&nbsp;

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      &nbsp;&nbsp;

      <button onClick={() => setCount(0)}>
        Reset
      </button>

    </div>
  );
}

export default App;
