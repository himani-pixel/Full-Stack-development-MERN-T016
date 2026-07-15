//Array of objects
let student = [
   {
       rollNo : "T005",
       name : "Ritesh",
       marks : 85
   },
   {
       rollNo : "T014",
       name : "Saqlain",
       marks : 90
   },
   {
       rollNo : "T016",
       name : "Himani",
       marks : 90
   }
];


//function display
function display(s)
{
   console.log("===== STUDENT DETAILS =====");
   console.log("----------------------------");
   for (let stud of s)
   {
       console.log(`Roll No : ${stud.rollNo}`);
       console.log(`Name : ${stud.name}`);
       console.log(`Marks : ${stud.marks}`);
       console.log("---------------------------");
   }
}


//Function Call
display(student);
