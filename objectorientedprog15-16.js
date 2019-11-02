//15. 
// it may seem confusing at first but just about every type of object has its own prototype
// for this current challange it is important to understand that constructors (which are functions) have a prototype of Object.prototype (its prototype is a function object)
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // => true
  
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