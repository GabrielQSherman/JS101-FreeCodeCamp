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
  