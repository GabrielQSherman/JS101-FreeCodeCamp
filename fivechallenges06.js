//1.
//Using bracket notation you can not change the elementn of a string, you must reasign the whole variable again
var myStr = "Jello World";

myStr = "Hello World"; 
//instead of myStr[0] = "H";

//2.
// in JS you are able to find any element of a string with bracket notation, but the number inside the bracket starts at 0 (being the first element)
var lastName = "Lovelace";
// learning computer computation and not human computational thinking, you can start counting from 0 and get to the 3rd element, the index will be 2

var thirdLetterOfLastName = lastName[2];

//3.
//.length is very important when indexing with bracket notations, this is because you can use it to start from the end and count backwards
var lastName = "sherman";

//the length is counting the elements so subracting 1 gives us the idex number of the last element
var lastLetterOfLastName = lastName[lastName.length - 1];

//4.
//the challenge is to count backwards from the last element to find which index the letter 'c' is in
var lastName = "Lovelace";

// always subract 1 from human counting to get the index number
var secondToLastLetterOfLastName = lastName[lastName.length -2];

//5. 
//the challenge is creating a madlib
function wordBlanks(myNoun, myPluralNoun, myAdjective, myVerb, myAdverb , myGame) {
    // Your code below this line
    var result = "A vacation is when you take a trip to some " + myAdjective +  " place with your " + myAdjective + " family. Usually you go to some place that is near a/an " + myNoun + " or up on a\/an " + myPluralNoun + ". A good vacation place is one where you can ride " + myPluralNoun + " or play " + myGame + " or go hunting for " + myPluralNoun;
  
    // Your code above this line
    console.log(result);
    
    return result;
  }
  
  // Change the words here to test your function
  wordBlanks("dog", "people", "humongous", "ran", "quickly", "football");