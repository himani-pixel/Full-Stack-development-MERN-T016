import React, { useState } from "react";
import Form from "./components/FormComponents";
import Display from "./components/Display";

function App() {
  const [student, setStudent] = useState({
    name: "",
    rollno: "",
    branch: "",
    cgpa: ""
  });

  return (
    <div>
      <h1>Student Information Form</h1>

      <Form student={student} setStudent={setStudent} />

      <Display student={student} />
    </div>
  );
}

export default App;
