function App()
{
  const name = "Himani Malankar T016"
  const math = 85;
  const sci = 90;


  function calculator(mark1 , mark2){return mark1 + mark2}


  return(
    <div>
      <h1> Student Marks </h1>
      <hr />
      <p>Name: {name}</p>
      <p>Mathematics Marks: {math}</p>
      <p>Science Marks : {sci}</p>
      <hr/>
      <p>Total Marks: {calculator(math , sci)}</p>
    </div>
  );
}


export default App
