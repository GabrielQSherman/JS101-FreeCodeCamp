//the .push() method is very useful for minipulating arrays
//here they would like me to add a [dog, 3] subarray to this two dimensional array
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

//the .pop() method allows you to remove an item at the end of an array or subarray
var myArray = [["John", 23], ["cat", 2]];

// they want us to use .pop() to remove the 'cat' array and store it in a new variable
var removedFromMyArray = myArray.pop(); //["cat", 2]

//the next array method to learn is .shift() this removes the first element of an array
var removedFromMyArray0 = myArray.shift();// ["John", 23]

// the method .unshift() adds an element to the front of an array like push()
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// they want myArray to equal [["Paul", 35], ["dog", 3]]
myArray.unshift(["Paul", 35]);

//next i will make a shoping list that is a two dimensional array
var myList = [],
    myFoods = ["pizza", "bread", "oranges", "eggs", "carrots", "beans"],
    myFoodNums = [2,3,4,6,2,3];
for (let i = 0; i < myFoods.length; i++) {
    myList.push(myFoods[i], myFoodNums[i]);
    
}
console.group("My List:")
console.log(myList);

