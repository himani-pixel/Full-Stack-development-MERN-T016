// Creating object
let student = {
   rollNo : "T016",
   name : "Himani Malankar",
   marks : 90
}


console.log("Original Object");
console.log(student);


//Accessing object Properties
console.log("\nAccessing object Properties");
console.log("Name:",student.name);
console.log("Marks:",student.marks);


//Updating Properties
student.marks = 95;
console.log("\nAfter Updating Marks");
console.log(student);


//Adding new property
student.city = "Mumbai";
console.log("\nAfter adding new property");
console.log(student);


//Delete a property
delete student.rollNo
console.log("\nAFter deleteing one property");
console.log(student)
