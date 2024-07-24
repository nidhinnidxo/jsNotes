//This is my first javascript code!
console.log("hello world");
let name = "Nidxo";
console.log(name);

//Rules:-//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
//Are case-sensitive

//Strings
let firstName = "Nidhin";
let lastName = "Nidxo";
let name001 = `He if often called "Nidhin"`;//Templates are strings enclosed in backticks(`This is a template string`).
let nameLength = name001.length;//String length

//CONSTANTS
const interestRate = 0.3;
//if I put "interestRate = 1;"//shows an error
console.log(interestRate);

let name1 = "Nidhin"; //String Literal
let age = 30; // Number Literal
let isApproved = true; //Boolean Literal
let firstName1 = undefined;
let selectedColor = null;
console.log(name1);

//OBJECT
let person = {
  name: "Nidhin",
  age: 30,
};

//Dot Notation
person.name = "Nidhin";
console.log(person.name);

//Bracket Notation
let selection = "name";
person[selection] = "nidxo";
console.log(person.name);

//ARRAYS
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

//FUCTIONS
//Performing a task
function greet(name, lastName2) {
  console.log("Hello World " + name + " " + lastName2);
}
greet("Nidhin", "Nidxo");

//Calculating a value
function square(number) {
  return number * number;
}
//Example
console.log(square(4));
document.write("Hi, Im Nidhin<br><br>");

//Objects
const phone = { type: "iphone", model: "16 pro", color: "Black" }; //type:"iphone"=> property:"value"

//Can access objects properties in two ways:
//objectName.propertyName  or  //objectName["propertyName"];

//Objects methods => function definitions stored as property values
const man = {
  first_Name: "Nidhin",
  last_name: "Nidxo<br><br>",
  age: 18,
  eyecolor: "blue",
  fullName: function () {
    return this.first_Name + " " + this.last_name;
  },
};
document.write(man.fullName());

//In javaScript , almost "everything is objects"
//Objects are Mutable:

//const x = fruit;//Any changes to x will also change person
//eg:
const animal = {
  firstName: "Elephant",
  age: 50,
};

const y = animal;
y.age = 10;
console.log(animal.age);

//for deleting properties , use the keyword "delete"
//eg:
delete animal.age;
//The delete keyword deletes both the value of the property and the property itself.

//Nested Objects  //eg:
const myFriend = {
  name: "Rigzin",
  lastName: "Angtak",
  age: 20,
  fullName: function () {
    return this.name + " " + this.lastName; //use this.property
  },
  equipments: {
    phone: "Infinix GT 10 pro<br>",
    laptop: "HP pavilion<br>",
  },
};
//accessing
document.write(myFriend.equipments.phone);

//another way
let p1 = "equipments";
let p2 = "laptop";
document.write(myFriend[p1][p2]);

//object methods  //function definition stored as a property value
//Adding a method to an Object
myFriend.total = function () {
  return (
    "equipments are " + this.equipments.phone + " and " + this.equipments.laptop
  );
};
document.write(myFriend.total());

//convert a text to uppercase
myFriend.fullName = function () {
  return (this.name + " " + this.lastName + "<br>").toUpperCase();
}; //use .touppercase();
document.write(myFriend.fullName());

//Display Objects
const person001 = {
  name: "Appu",
  age: 18,
  city: "Thrissur<br><br>",
};
document.write(person001.name + " " + person001.city + "<br>");

//Displaying properties in a loop
//Build a text
let text = ""; //this variable can be used to store concatenated values from the 'person001' object.
//for...in loop, which is used to iterate over the enumerable properties of an object.
for (let x in person001) {
  //x is a variable that will take the key (or property name) of each property in the 'person001' during each iteration.
  text += person001[x] + " <br>"; //takes the value associated with the current key (x) in the person001 object and appends it to the text string.
}
document.write(text);

//Using Object.values
//it creates an array from the property values:
const myArr = Object.values(person001);
document.write(myArr);

//Using Object.entries()
const fruits = { Banana: 300, Orange: 200, Apples: 500 };
let text001 = "";
for (let [fruit, value] of Object.entries(fruits)) {
  //for...of loop, which iterates over the entries (key-value pairs) of the fruits object.
  text001 += fruit + ": " + value + "<br>";
}
document.write(text001);

//Using JSON.stringify()  //Objects be converted to a string :
let myString = JSON.stringify(fruits);
document.write(myString);

//Object Constructors
//some time we need to create many objects of the same type.  We use object constructor function.
function Person002(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyecolor = eye;
  this.nationality = "English"; //this property will be common for all objects created by the constructor
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
//use new Person002() to create many new person objects:
const myFather = new Person002("John", "Doe", 50, "blue");
const myMother = new Person002("Sally", "Rally", 48, "green");
const mySelf = new Person002("Nidhin", "M M", 18, "black");

//Adding property to a Constructor:
//To add a new property, you must add it to the constructor function prototype:
Person002.prototype.heigt = "170 cm";
document.write("<br><br>");
document.write(myFather.fullName());

//Adding a new meathod :
Person002.prototype.changeName = function (name) {
  //function definition
  this.lastName = name;
};
myMother.changeName("Doe"); //function calling
document.write("<br>");
document.write(myMother.fullName());

//Built-in javaScript Constructors:
new Object(); // A new Object object
new Array(); // A new Array object
new Map(); // A new Map object
new Set(); // A new Set object
new Date(); // A new Date object
new RegExp(); // A new RegExp object
new Function(); // A new Function object

//We can use symbols instead of some functions:
(""); // primitive string
0; // primitive number
false; // primitive boolean

{
} // object object
[]; // array object
/()/; // regexp object
function any() {} // function

//Events
//HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
//<element event = 'some JavaScript'>
function date(){
  document.write("look at the clock :)");
}
