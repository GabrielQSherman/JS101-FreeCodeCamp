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
  