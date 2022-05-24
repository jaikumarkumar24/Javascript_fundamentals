
const buttonB = document.querySelector('#button_B');
const headingB = document.querySelector('#heading_B');


buttonB.onclick = () => {
    alert(`Hello ${prompt('What is your name?')}, nice to see you!`);
    headingB.textContent = `Welcome ${prompt('What is your name?')}`;
}

//Declaring variable
let myName;
let myAge;
var isAlive;
//initialize variable
myName="jaikumar";      //string
myAge=28;               //numbers
isAlive = true;         //boolean
//Declaring and initialize variable
const myPlace = "Chennai";
const myMail  = "gmail",myNumber = "1234567890";

//Array
let myNameArray = ['Chris', 'Bob', 'Jim'];

console.log(myNameArray.at(2),
            myNameArray.concat(['a','b']));


//objects
let dog = { name : 'Spot', breed : 'Dalmatian' };


function logName() {
  console.log(dog.breed);
  console.log(myNameArray[1]);
  console.log(myName);
}

logName();
myName;
