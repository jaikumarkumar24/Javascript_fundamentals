
const string = 'The revolution will not be televised.';
const badString = string;

const sgl = 'Single quotes.',dbl = "Double quotes";

const sglDbl = 'Would "fish supper"?';
const dblSgl = "I'm feeling blue.";

console.log(sglDbl);
console.log(dblSgl);

//Escaping characters
//const bigmouth = 'I've got no right to take my place...';
const bigmouth = 'I\'ve got no right to take my place...';
//console.log(bigmouth);

//concat string
const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = 'Hello, ',two = 'how are you?';
const joined = `${one}${two}`;
//console.log(joined,one + ", " + two);


const myString = '123';
//string to Number & Number to string
const myNum = Number(myString);
const myString2 = myNum.toString();
console.log(typeof myNum,typeof myString2);

const output = `I like the song.
I gave it a \n score of 90%.`;
console.log(output);

//Methods
console.log(output.length);
console.log(output.includes("like"));
console.log(output.startsWith("Score"));
console.log(output.endsWith("Score"));
console.log(output.indexOf("score")); //if return -1 is not available in string

let mailId = "jaikumar@gmail.com";
let start = mailId.indexOf("@");
let end = mailId.indexOf(".",start);
console.log(mailId.slice(start+1, end));    //slice(beginIndex, endIndex)

console.log(mailId.toUpperCase(),mailId.toLowerCase()); 

console.log(mailId.replace('k','q')); //1st value only - replaceAll - all values

