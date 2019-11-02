 //9.
//using protoype properties may not make a difrence if your making a hundred instances of a object constructor, but it is very important to understand how to use prototype when scaling a Js program
//because when you have millions of instances of the same object property and they are all the same value, it is using massive ammount of memory unnecessarily
function Dog(name) {
    this.name = name;
    
  }
  Dog.prototype.numLegs = 4;

  let beagle = new Dog("Snoopy"),
  ///////////////////////
  ownProps = [],
  prototypeProps = [];
  
 //10.
//You can iterate through all the properties in beagle with the first for loop, then using .hasOwnProperty as a check you can sort through prototypes and nonprototypes
  for (let prop in beagle) {
     if (beagle.hasOwnProperty(prop)) {
       ownProps.push(prop)
     } else {
       prototypeProps.push(prop)
     }
  }  

 //11.
// this is an example of how to use the 'Constructor' property which has the value of the function each instance was created from
//you can test the instance using (instance).contructor === (disired constructor), if it is true then that instance was created from the disired constructor

  // Test for the Dog constructor
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
      return "You joined the Dog Fraternity";
    } else {
      return false;
    }
  }
  function joinBirdFraternity(candidate) {
    if(candidate.constructor === Bird){
      return "You joined the Bird Fraternity";
    } else {
      return false;
    }
  }
  