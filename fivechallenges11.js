 //1.
// this challenge is to use the equality operator within an if statement
function testEqual(val) {
    if (val == 42) { // test if value is equal to a number
      return "Equal";
    }
    return "Not Equal";
  }
  // test
  testEqual(10);

  //2.
 //there is a diffrence between '==' and '===' in a conditional
// === is strict equality, strings of the same value will not pass the test
function testStrict(val) {
  if (val === 777) { //this will only pass if the number is equaly the same value and same variable type
    return "Exactly Equal";
  } else if (vall == 777){
    return "Not Exactly Equal";
  }
  return "Not Equal";
}
testStrict(777);
 
 //3. 
// this works just the same if the comparison values are both 
function compareEquality(a, b) {
    if (a === b) { //this is a strict equality 
      return "Equal";
    }
    return "Not Equal";
  }
  compareEquality(10, "10");
 
 //4. 
// another very useful operater in conditional is != or 'not equal to'
function testNotEqual(val) {
    if (val != 99) { // this follows a similar format as the former lines of code but the returns for Equal and Not Equal are swtiched, becuase the operater works in the opposite fashion from the last
      return "Not Equal";
    }
    return "Equal";
  }
  // test
  testNotEqual(10);
  
 //5.
// the inequality operator has a strict variant as well
function testStrictNotEqual(val) {
    if (val !== 77) { 
      return "Not Equal";
    }
    return "Equal";
  }
  // test
  testStrictNotEqual(10);
  
 