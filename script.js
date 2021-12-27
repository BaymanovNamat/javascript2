var example1 = 10 === 10; // equals
var example2 = 11 > 10; // more than
var example3 = 10 < 11; // less than 
var example4 = 10 >= 10; // more than or equal (it is true)
var example5 = 10 <= 10; // less than or equal
var example6 = 11 !== 10; // not equals

// numbers 
// 1, 2, 3, 4, 5, 6, 10.2
var number1 = 1;
var number2 = 2;
var number3 = 3;

// string, text
var string1 = "Hello world";
var string2 = "A";
var string3 = "";
var sting4 = "5";

// boolean
var boolean1 = true;
var boolean2 = false;




var a = 5;
var b = 10;
var example7 = a < b;
console.log(example7);


var c = 10;
var d = 11;
if (c < d) {
 console.log("C is less than D")
}


var e = 3.14;
if (e !== 3.14) { // false
 console.log("why don't you know figure PI?");
}
else { // true
 console.log("Good job!");
}



var age = 10;
if (age >= 18) {
  console.log("You can vote!"); // true
}
else {
  console.log("You are too young to vote!");  // false
}

var year = 2010;
var age = 2022 - year;
if (age <= 18) {
  console.log("You can vote!");
}
else {
  console.log("You are too young to vote!");
}

var lightSwitch = true;
if (lightSwitch) {
  console.log("Light is on!");
}
else {
  console.log("Light is off!");
}


// интерактивная функция (задает вопрос) "confirm"
// if (confirm("Do you have a car?")) {
//   if (confirm("Is it red?")) {
//     alert("You have a red car.");
//   }
//   else {
//     alert("You have a car that is not red.");
//   } 
// }
// else {
//   if (confirm("Are you planning to have a car?")) {
//     alert("You are planning to a car.");
//   }
//   else {
//     alert("You don't like cars.");
//   }
// }

//var username = prompt("What is your name?", "stranger");
// if (username === "") {
//   username = "stranger";
// }
//alert("welcome " + username);

var a = prompt("what is the width of the rectangle?");
var b = prompt("what is the height of the rectangle?");
alert(a + b);