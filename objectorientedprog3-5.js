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

let myDog = new Dog();
myDog.name = 'Aspen';
console.log(myDog.name);
