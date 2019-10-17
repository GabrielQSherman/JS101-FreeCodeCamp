//1.
//this example shows us how when inside a function we do not use a 'return' or a console.log we actually have a value that is returned undefined
// their function that returns undefined
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// my function that returns undefined
function addFive() {
 sum = sum + 5;
}
addThree();
addFive();

//2.
//this shows how we can set a variables value to a function
//this is because the function is processed before the variable assignment is done
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// they want processed to equal 2
processed = processArg(7);

//3.
//creating a javascript array queue
function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    return arr.shift();  // Change this line
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  

  function nextInLine(arr, item) {
    //My code 
    arr.push(item);
    return arr.shift(); 
  }
  
  // Test Array
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  //4. 
  //these functions return a boolean value, whos value can only be true or false
  function welcomeToBooleansTrue() {
    return true;
  }
  function welcomeToBooleansFalse() {
    return false;
  }

  //5.
  //the last challenge is to create a if statement that returns a booleans state. true or false
  function trueOrFalse(wasThatTrue) {

    if(wasThatTrue) {
      return "It was true";
    } else {
      return "It was false";
    }
    
    }
    
    // Change this value to test
    trueOrFalse(true);
    

  

  