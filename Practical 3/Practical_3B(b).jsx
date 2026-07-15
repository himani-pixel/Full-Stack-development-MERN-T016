function App()
{
  const studentName = "Himani";
  const totalClasses = 60;
  const attendedClasses = 54;


  const attendance = (attendedClasses / totalClasses) * 100;


  return (
    <div>
      <h1>Atendance Details</h1>
      <hr />
      <p>Name: {studentName}</p>
      <p>Total Classes: {totalClasses}</p>
      <p>Classes Attended: {attendedClasses}</p>
      <p>Attendence: {attendance.toFixed(2)}%</p>
      <h2>
        Status: {attendance >= 75? "Eligible for Exam" : "Not Eligible"}
      </h2>
    </div>
  );
}


export default App
