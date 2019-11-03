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

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
//in this case. all 'Dog' objects will have all of Animals contents, which means .eat() can be called from beagle

//19.
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
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
let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
