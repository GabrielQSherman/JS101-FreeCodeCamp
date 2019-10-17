//1.
//the first challenge is declaring a reusable function
function helloworld() {
    for (let i = 0; i < 50; i++) {
        console.log("hello World");9
     
    }
    
}
helloworld();

//2.
//the second challenge is to create a function with arguments
//in this case the function adds two parameters
function functionWithArgs(c, d) {
    console.log(c + d);
    return c + d;
  }
  functionWithArgs(123123, 14132);

//3.
// this challenge show how important it is to understand the scope of your variable and know how it can affect your code
var myGlobal = 10;

function fun1() {
  // this 'oopsGlobal' is defined without a 'var' so the variable will be defined globaly
  // if it had var or let infront the scope would only be within fun1
 oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//4.
// This shows how even if a variable is declared with var outside a function it will only overwrite that variable within the function itself
var outerWear = "T-Shirt";

function myOutfit() {
  
  var outerWear = "sweater";

  // Only change code above this line
  console.log(outerWear); //will log sweater
}
console.log(outerWear);//will log t-shirt
myOutfit();

//5.
// This function is meant to do simple math equations and return the result of that equation

//their function
function minusSeven(num) {
    return num - 7;
  }
  
  // my function
  function timesFive (num) {
    return num * 5;
  }
  
  console.log(timesFive(34));
  console.log(minusSeven(10));
  
