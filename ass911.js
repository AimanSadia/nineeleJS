/* -----------------------ASSIGNMENT 09-11 -------------------------------- */

/* ===========QUESTION NO 01 =============*/

/* var cName = prompt("Write your city name:");

if (cName === "karachi") {
  document.write("Welcome to the city of lights!");
} else{
  document.write(" You are welcomed in another country");
} */

/* ===========QUESTION NO 02 =============*/

/* var myGender = prompt("Enter your real gender:");

if (myGender === "male") {
  document.write("Good Morning Sir!!");
} else if (myGender === "female") {
  document.write("Good Morning Ma'am!!");
} else{
  document.write("You have no gender");
} */

/* ===========QUESTION NO 03 =============*/

/* var colTrf = prompt("Enter the color of the road signal to get the desired message");

if (colTrf === "red") {
  document.write("Must Stop");
} else if ( colTrf === "yellow") {
  document.write("Ready to Move");
} else if (colTrf === "green") {
  document.write("Go Ahead");
} else {
  document.write("You are out of the control");
}  */

/* ===========QUESTION NO 04 =============*/

/* var userFuelInput = prompt("Enter the remaining fuel in car in Litres");
if(userFuelInput < 0.25){
  document.write('Please refill the fuel in your car');
} else{
  document.write('You can go ahead'); 
} */

/* ===========QUESTION NO 05 =============*/

/* var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} */
//It displays the alert message

/* var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} */
//It doesnot display the alert message and make condition true on ++b

/* var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
} */
//It displays the alert message and condition2 and condition 4 are true

/* var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} */
//It displays the alert message 

/* if (true){
  alert("True");
  }
  if (false){
  alert("False");
  } */

//It displays the alert message of true

/* if("car" < "cat"){
  alert("car is smaller than cat");
} */
//It displays the alert message 

/* ===========QUESTION NO 06 =============*/

/* var marksOfSubject1 = parseInt(prompt("Enter marks obtained in Subject 1:"));
var marksOfSubject2 = parseInt(prompt("Enter marks obtained in Subject 2:"));
var marksOfSubject3 = parseInt(prompt("Enter marks obtained in Subject 3:"));

var totalMarks = prompt("Enter total marks:");

var totalObtainedMarks = marksOfSubject1 + marksOfSubject2 + marksOfSubject3;

var percentage = (totalObtainedMarks / totalMarks) * 100;

var grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "Fail";
} 

document.write("<h1>Mark Sheet</h1><br><br>");
document.write("Total Marks: " + totalMarks + "<br><br>");
document.write("Marks Obtained: " + totalObtainedMarks + "<br><br>");
document.write("Percentage: " + percentage+ "%<br><br>");
document.write("Grade: " + grade + "<br><br>");
document.write('You need to improve'); */


/* ===========QUESTION NO 07 =============*/

/* var mySecretNumber = 10;

var userGuess = parseInt(prompt("Guess the secret number from 1 to 10:"));

if (userGuess === mySecretNumber) {
    alert("Bingo! Correct answer!!");
} else if (userGuess === mySecretNumber + 1 || userGuess === mySecretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("You guess an incorrect number");
} */

/* ===========QUESTION NO 08 =============*/

/* var myNumber = parseInt(prompt('Enter the number'));
if(myNumber % 3 === 0){
  document.write('Number is divisible by 3');
} else{
  document.write('Number is not divisible by 3');
} */

/* ===========QUESTION NO 09 =============*/

/* var myNumber = parseInt(prompt('Enter the desired number'));
if(myNumber % 2 === 0){
  document.write('You enter an even number');
} else{
  document.write('You enter an odd number');
}  */

/* ===========QUESTION NO 10 =============*/

/* Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool. */

/* var T = parseInt(prompt('Enter the temperature of your area'));

if(T > 40){
  document.write("It is too hot outside");
} else if(T > 30){
  document.write("The Weather today is Normal")
}else if(T > 20){
  document.write("Today’s Weather is cool")
}else if(T > 10){
  document.write("OMG! Today’s weather is so Cool")
}else{
  document.write("Extremely cold");
} */

/* ===========QUESTION NO 11 =============*/

/* var firstNumber = parseFloat(prompt("Enter your  first number:"));
var secondNumber = parseFloat(prompt("Enter your second number:"));
var operation = prompt("Enter operation of +,-,*,/,% :");
var result;

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  alert("Invalid operation");
}
alert("Result: " + result); */


 
