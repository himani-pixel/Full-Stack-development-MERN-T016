import { useState } from "react";

function App() {
  // State Variable
  const [subjects] = useState([
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "JavaScript"
  ]);

  return (
    <div>
      <h1>Subjects List</h1>
      <hr />

      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
