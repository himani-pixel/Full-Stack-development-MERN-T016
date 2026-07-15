let a = 30;
let b = 20;
let day = 2;


//Comparison Operators
console.log("\nComparison Operators");
console.log("a > b :", a > b);
console.log("a < b :", a < b);
console.log("a == b :", a == b);
console.log("a != b :", a != b);


//if-else Statement
console.log("\nIf-Else Statement");
if (a > b){
   console.log("a is greater than b");
}else{
   console.log("b is greater than a or equal to a");
}


console.log("\nSwitch Statement");
switch(day){
   case 1:
       console.log("Monday");
       break;
  
   case 2:
       console.log("Tuesday");
       break;
  
   case 3:
       console.log("Wednesday");
       break;


   default:
       console.log("Invalid Day");
  
}
