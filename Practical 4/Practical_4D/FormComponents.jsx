import React from "react";

function FormComponents(props) {

  const handleChange = (e) => {
    props.setStudent({
      ...props.student,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <label>Name:</label><br />
      <input
        type="text"
        name="name"
        value={props.student.name}
        onChange={handleChange}
      />

      <br /><br />

      <label>Roll No:</label><br />
      <input
        type="text"
        name="rollno"
        value={props.student.rollno}
        onChange={handleChange}
      />

      <br /><br />

      <label>Branch:</label><br />
      <input
        type="text"
        name="branch"
        value={props.student.branch}
        onChange={handleChange}
      />

      <br /><br />

      <label>CGPA:</label><br />
      <input
        type="text"
        name="cgpa"
        value={props.student.cgpa}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormComponents;
