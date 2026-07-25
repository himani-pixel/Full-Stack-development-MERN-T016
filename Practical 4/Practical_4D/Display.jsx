import React from "react";

function Display(props) {
  return (
    <div>
      <hr />

      <h3>Student Details</h3>

      <p><b>Name:</b> {props.student.name}</p>
      <p><b>Roll No:</b> {props.student.rollno}</p>
      <p><b>Branch:</b> {props.student.branch}</p>
      <p><b>CGPA:</b> {props.student.cgpa}</p>
    </div>
  );
}

export default Display;
