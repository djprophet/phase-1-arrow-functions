// //functions, by default, do not persist data between function calls, meaning that their variables are destroyed once the function has completed execution. However, there are ways to make data persist within a function, such as using closures, global variables or static variables.
// //A closure is a function object that remembers values in the enclosing scope even if they are not present in memory. A global variable is a variable that is accessible from any scope, meaning it can be accessed and modified from any function in the program. And a static variable is a variable that is only accessible within the function it is defined in, but it maintains its value between function calls.
// //So, it's not true that functions does not persist data unless it is expression.

// //Function Declaration
// function foof() {
//     return 'bar';
//   }
// // function expression 
//   const foo = function() {
//     return 'bar';
//   }
  
//   const sum = 1 + 1
//     console.log(sum);


//     const cookies = function() {
//         return 1* 3
    
//     };

// console.log(cookies());

// const add = (parameter1, parameter2) =>  parameter1 + parameter2;

// const twoAdder = x => x + 2;

// const twoAddera = (x) => x +2;

// //If we need to do more work than return a single expression, we'll need {} to wrap the multiple lines of code, and we'll have to declare a return. That sweet no-return syntax is only available if your function body is one expression long.

// const sem = (param4, param3) => {
//     console.log(`Adding ${param4}`);
//     console.log(`Adding ${param3}`);
// return param3 + param4
// }

// sem(1, 2);

// const nums = [1,2,3];
// const squares = nums.map(x => x * 2);
// squares;
// nums; 

// let sq =squares;
// console.log(sq)


// let overdueTodoItems = ["tmmrw","Yday","latertoday"];


// finishedItems =overdueTodoItems.map (item => item.className = "complete");
// //Headers.innerText = `You finished ${finishedItems.length} items!`;

// const laspedUserAccounts = "Yes"

//  //laspedUserAccounts.map(u => sendBillTo(u.address));
// //return "Yes"


const divide = (x)  => 2000/100;

const square = (s) => s**s;

const add = (add2, add1) => add1 + add2