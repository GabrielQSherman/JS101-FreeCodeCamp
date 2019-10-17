//1.
//javascript arrays allow you to store an ordered list of elements and since you can store almost any type of java script variable it is very useful to use arrays in some of your code
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["Name", 34];

//2.
//MultiDimensional arrays are very cool and interesting to play around with
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [["the light", 777],["galaxys", 3.1415926535]];

//3.
//Indexing Arrays. it is very useful to learn as much as you can about computer computation when it comes to indexing
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// they want my data to equal 50 so this is the easiest way to do that.
var myData = myArray[0]

//4.
//you can also modify the indexes individualy which is diffrent from the indexs of string variables
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// expected log of myArray [45,64,99]
myArray[0] = 45;

//5.
//you can also access multidimensional arrays in a very similar fashion
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// expected output of myData is 8
var myData = myArray[2][1];
