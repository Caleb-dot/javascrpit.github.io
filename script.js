var studentName = "Alex"; // declaring student's name
studentName = "Jordan" //updating the student's name;
var studentName = "Taylor"; // Re-declaring with var is possible

console.log(studentName)

let name = "Taylor";
let age = 22;

let message = `Hello, my name is ${Taylor} and I am ${22} years old.`;

console.log(message); // Output: Hello, my name is Alice and I am 30 years old.

let found = true;
let lost = false;
console.log(found);
console.log(lost );

found = false;
lost  =true

console.log(now found is ${found} and lost is${lost});






// BigInt 
let largeNumber = 12345678910n; // a large integer beyond the safe limit for Number


console.log(largeNumber );

let colors = ['Red', 'Green', 'Blue'];
console.log(colors[0]); // Accesses the first element, output: 'Red'
colors.push('Yellow'); // Adds a new element at the end
console.log(colors); // Output: ['Red', 'Green', 'Blue', 'Yellow']
colors.pop();
console.log(colors);

let person = {
    firstName: "john",
    lastName: "john doe ",
    age: 22
  };
  
  console.log(person.firstName);

  console.log(5 * 2); // Multiplication,
console.log(10 / 2); // Division
console.log(11 % 3); // Modulus (Remainder)

console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction

let y = '3';
console.log(y + 3);
let x = '3';
console.log(+x + 2);

let y = '3';
console.log(-y + 3);

let a = 1; 
a++; 
console.log(a);
a--;
a--;
console.log(a);

let flag = true; 
console.log(!flag);

let x = 5; 
let y = 10;
console.log("10" == y); // Equality
console.log("10" === 3); // Strict equality
console.log(x != y); // Inequality
console.log(x < y); // Less than
console.log(x > y); // Greater than
console.log(x <= y); // Less than or equal to
console.log(x >= y); // Greater than or equal to

let a = true;
let b = false;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR
console.log(!a); // Logical NOT