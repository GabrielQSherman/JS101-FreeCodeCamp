//0.
//how to create an object in JS, this is an object for my dog Aspen who happens to have 4 legs
let myDog = {
    name: 'aspen',
    numLegs: 4,
    sayLegs: () => {return "This dog has", myDog.numLegs, "legs."}
};

//1. 
//You can access an objects properties with dot notation like myDog.numLegs to get the value of 4 from the object
console.log(myDog.name);


//2.
//inside the myDog object I created a method (a function within an object) that would return the value of the number of legs in an english sentence
  myDog.sayLegs();
  


//3.
//fortunetly for those who dont like to repeate themselves javascript allows use to use the keyword this when refering to an object within itself. '.this' can be very handy
let myObj = {
    prop1: "hello",
    prop2: "world",
    num1: 3.14,
    num2: 42,
    whatAmI: function() {console.log(this.prop1, this.prop2);}
};

myObj.whatAmI();



//4.
//Constructors; They can be thought of as a blueprints for a type of object you might want to make more than once in your code and dont want to be repetitive
//in clean code standard they are defined with Capital letters to distiguish them from a typical functions
//always use 'this.' for new properties. constructors define properties and behaviors and do not typically return values like functions would

function Dog() {
    this.color = "red";
    this.name = "Cliford";
    this.numLegs = 4;
} 



//5. 
//Using a constructor to make a new object
//if you declare a variable just using 'let newDog = new Dog();' it will inherit the property values of the constructor, but these properties can easily be moddified

let ourDog = new Dog();
ourDog.name = 'Aspen';
console.log(ourDog.name);



//6.
//you can add paraters to your construction to have dynamic property values
//if a property is assigned without using a parameter it will be the same for every new object you create unless you reassign its value at a later point in the program
function Dog(name, color) {
    this.color = color;
    this.name = name;
    this.numLegs = 4;
}
let sammy = new Dog("black+white","boston terrier");



//7.
//instance of is useful for finding if an object/variable was created using a particular constructor(returns boolean value)

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House(42);
  console.log(myHouse instanceof House, myHouse.numBedrooms); // returns 'true 42' to console



//8.
//each instance of the 'Bird' constructor will have seperate properties from every other instance of the contructor
//you can use a for loop, declare a variable that takes on the properties of any instance and interates through each property, then you can do what youd like to those properties
//in this case they are pushed to a single dimension array that is for the bird 'canary'
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let canarysOwnProperties = [];
  
  for(let prop in canary) {
    if (canary.hasOwnProperty(prop)){
      canarysOwnProperties.push(prop);
    }
  }

  //one could also make a two dimensional array of each instance of bird
   var Birds = [
      canary,
      robin = new Bird("Red"),
      rhode = new Bird("Runner")
    ],
    birdsProps = [];

  for (let i = 0; i < Birds.length; i++) {
    birdsProps.push([]);
        birdsProps[i].push(Birds[i].name, Birds[i].numLegs );
  }

  console.log(Birds,"\n",birdsProps);
  


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
  
  let theBeagle = new Dog("Snoopy");
  console.log(  Dog.prototype.isPrototypeOf(theBeagle)); //returns true to the console
  


//15. 
// it may seem confusing at first but just about every type of object has its own prototype
// for this current challange it is important to understand that constructors (which are functions) have a prototype of Object.prototype (its prototype is a function object)
function Dog(name) {
    this.name = name;
  }
  
  let myBeagle = new Dog("Loopy");
  
  Dog.prototype.isPrototypeOf(myDog);  // => true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);



  //16.
  //Creating a supertype (or parent) constructor is super important to creating dry code
  //you can set each child constructor's parent by including 'constructor: (Parent/ConstructorSupertype name)'

  //Animal 1
  function Cat(name) {
    this.name = name;
  }
  Cat.prototype = {
    constructor: Animal,
  };
  //Animal 2
  function Bear(name) {
    this.name = name;
  }
  Bear.prototype = {
    constructor: Animal,
  };
  
  //Parent constructor 
  function Animal() { } //paramerters are only created as prototypes because 'Animal' includes paramerters that all of the 'Animals' children constructors will inherent
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };

//The code above a pretty good example of DRY code
//This is an example of WET code
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
//because the describe function is repeated two times unnecessarily



//17.
// There are many ways to create a new object from a prototype. previously we used the 'new' keyword, this is similar but diffrent to using Object.create('parent object'.prototype)
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
// defined two new 'animals' using this new method of creating child objects
let duck = Object.create(Animal.prototype);
//let beagle = Object.create(Animal.prototype); 
duck.eat(); // Should print "nom nom nom"
// beagle.eat(); 
// would return error, becuase it cant call 'beagle' before its initialization



//18.
//You are also able to have other object constructors inherit the atributes of parent objects.

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let pittbull = new Dog();
pittbull.eat();  // Should print "nom nom nom"
//in this case. all 'Dog' objects will have all of Animals contents, which means .eat() can be called from beagle



//19.
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let swan = new Bird();
swan.constructor // function Animal(){...}
//in this code duck is inheriting code for its supertype constructor "Animal" and so in line 36 duck shows its constructor to be Animal, but it is a prototype of Bird
//to set its constructor to bird all you must do is write this line of code
//Bird.prototype.constructor = Bird;
//now duck.constructor will return Bird 
//this code will fix the constructor being set to the value of the supertype

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;



//20.
//You can add new functions to the prototype object like so
Bird.prototype.fly = function() {
    console.log("I'm flying!");
  };
// now duck can access fly()
function Animal() { }

Dog.prototype.bark = function() {
    console.log("Woof!");
}
let dalmation = new Dog();

dalmation.eat(); // Should print "nom nom nom"
dalmation.bark(); // Should print "Woof!"



//21.
/* This is the order in which Javascript searches for an objects methods when called upon 

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};

var duck = new Bird();
THEN
duck.eat() ---- will return peck peck peck
    
    duck => Is eat() defined here? No.
    Bird => Is eat() defined here? => Yes. Execute it and stop searching.
    Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
    Object => JavaScript stopped searching before reaching this level.
*/

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {return "Alas, this is a flightless bird."; };

let penguin = new Penguin();
console.log(penguin.fly()); //expected console output is "Alas, this is a flightless bird."



//22.
//Method 'mixin`s' are really easy and effienct ways to add methods to two or more objects that dont have the same constructor class/protoype
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("ssswwwwwssh");
  
    }
  }
  
  glideMixin(bird);
  glideMixin(boat);
  //This will add the method 'glide' to any objects that are called as an argument of 'glideMixin'



  //23.
  //so-called private object variab+les are created when a varible is created within the scope of just the object, in this case the variable cant be changed or overridden by just objName.property = data;
  function Bird() {
    let weight = 42;
     this.getWeight = function(){
         console.log(weight);
    };
   
   }
   
let ducky = new Bird();
ducky.getWeight();




//24. Immediately Invoked Function Expression
/*
(function IIFE() {
    console.log("This is an immediately invocted function");
  })(); 
*/  
// this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
//this is a nifty way to call a function directly after the fuction code block  // this saves writing 'functionName'(); somewhere else in the code
// this function below is anonymous meaning it would and could be only called if it is inside another fuction or code block or in this case invoked immediately after the fuction definiton
(function () {
    console.log("This is an Anonymous IIFE (function)");
  })();




//25. 
//This is how to create a module of methods that can be added to any object, becuase the function is anonymous and ut us a IIFE it cant be altered after creating the module and will automaticly add methods with a short syntax
// Syntax to add method to object 'moduleName.MixinName(objectName); --------------- to call method... objectName.methodName();

let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true
        };
      },
      singMixin : function(obj) {
        obj.sing = function() {
          console.log("la La la LAAAA!");
        };
      }
    }
  
  })();
  
