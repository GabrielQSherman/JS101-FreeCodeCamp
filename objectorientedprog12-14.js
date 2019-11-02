//12.
//You can add prototype properties as an object adjoining the constructor
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // missing-- constructor: (Object name),
    numLegs: 4,
    eat: () => {"mucmunnchmnnc"},
    describe: () => {"this dogs name is", this.name}
  };
  //13.

  //When creating an (object).prototype Object you must assign the constructor to the original objects name, other wise it will take on the constructor name "Object"
  //Like this
//   function Dog(name) {
//     this.name = name;
//   }
//   Dog.prototype = {
//     numLegs: 4,
//    ** constructor: Dog, ** THIS LINE IS IMPORTANT
//     eat: function() {
//       console.log("nom nom nom");
//     },
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
//   };
  
//14.
//you can also check if a a variable was made with a particular constructor, if it was it will be a prototype of the constructor
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  console.log(  Dog.prototype.isPrototypeOf(beagle)); //returns true to the console
  
