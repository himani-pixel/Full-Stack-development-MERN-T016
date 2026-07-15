function calculateSalary(name , basicSalary){
   let bonus = 5000;
   let totalSalary = basicSalary + bonus;


   console.log("===== Employee Details =====");
   console.log("Employee Name: ",name);
   console.log("Basic Salary: ",basicSalary);
   console.log("Bonus: ",bonus);
   console.log("Total Salary: ",totalSalary);
}
//Calling Function
calculateSalary("Himani" , 200000);
