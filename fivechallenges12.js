//1.
//this set of challenges with teach me about comparison operators

//this first challenge is on the greater than operator
// the greater than operator will return a true or false, if the value on the right is of greater value than that on the left, it will return true
function testGreaterThan(val) {
    if (val > 100 ) {  // if the value is equal to 100 it will still return false
      return "Over 100";
    }
  
    if (val > 10) {  // if the value is less than or equal 10 it will return false
      return "Over 10";
    }
  
    return "10 or Under";
  }
  testGreaterThan(10);
  
//2. next is the combination of equal to and greater than
function testGreaterOrEqual(val) {
    if (val >= 20) { 
      return "20 or Over";
    }
  
    if (val >= 10) { 
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Change this value to test
  testGreaterOrEqual(10);

//3. the next challenge is on the less than operator
function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
  
    if (val < 55) {  
      return "Under 55";
    }
    return "55 or Over";
  }
  // i notice that when using a greater than operator you must put the greatest number of comparison at the first if statement
  // when using a less than operator the greatest number must be the last one to be compared
  testLessThan(10);
  

//4.
//similar to challenge 2 i will combined the less than and equal to operator to return only values that are less than or equal to 12/24
function testLessOrEqual(val) {
    if (val <= 12) { 
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
}
  testLessOrEqual(10);


//5.

// the last challenge for this section is a logical test using the 'And' operator, you can use more than one comparitive operator in one if statement so that
//This
// function testLogicalAnd(val) {
//     // Only change code below this line
  
//     if (val <= 50) {
//       if (val val >= 25) {
//         return "Yes";
//       }
//     }
  
//     // Only change code above this line
//     return "No";
//   }

//Becomes This
function testLogicalAnd(val) {
      if (val <= 50 && val >= 25) {
        return "Yes";
      }
    return "No";
  }