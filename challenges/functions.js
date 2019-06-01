/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume (a, b, cb){
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
* Create a function named add that returns the sum of two numbers
* Create a function named multiply that returns the product of two numbers 
* Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2){
  return num1 + num2;
}


function multiply(num1, num2){
  return num1 * num2;
}

function greeting(firstName, lastName){
  return `Hello ${firstName} ${lastName} nice to meet you`
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
let product1 = consume(2,2,add);
console.log(product1)

let product2 = consume(10,16,multiply);
console.log(product2);

let product3 = consume("Mary","Poppins", greeting);
console.log(product3); 


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/* Because of the order of the function and where it can grab from. I understan the concept of it but can't put it into words well. I guess that nesting is needed so that you can't take functions and variables from there properties which can impact the code. 
*/


const external = "I'm outside the function";

function myFunction() {
console.log(external);
const internal = "Hello! I'm inside myFunction!";

function nestedFunction() {
  console.log(internal);
};
nestedFunction();
}
myFunction();