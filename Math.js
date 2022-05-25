//Integers 
var age =10;
//Floating point numbers ,
var percentage = 12.5, all = 56.7786543;

//Doubles - 6.6 to 7 (meaning that they are accurate to a greater number of decimal places)

123    // one-hundred twenty-three
123.0  // same
123 === 123.0 // true
Number('123')  // returns the number 123
Number('123') === 123  // true
Number.parseFloat === parseFloat; // true

//typeof  - find the type of variable   typeof operand or typeof(operand)
console.log(typeof percentage,typeof(all));


// Numbers

console.log(typeof 37 === 'number',
            typeof 3.14 === 'number',
typeof(42) === 'number',
typeof Math.LN2 === 'number',
typeof Infinity === 'number',
typeof NaN === 'number',
typeof Number('1') === 'number',
typeof Number('shoe') === 'number',
typeof 42n === 'bigint'
);

// Strings
console.log(typeof '' === 'string',
typeof 'bla' === 'string',
typeof `template literal` === 'string',
typeof '1' === 'string',
typeof (typeof 1) === 'string',
typeof String(1) === 'string');

// Booleans
console.log(typeof true === 'boolean',
typeof false === 'boolean',
typeof Boolean(1) === 'boolean',
typeof !!(1) === 'boolean');

// Undefined , Objects
console.log(
typeof undefined === 'undefined',
typeof declaredButUndefinedVariable === 'undefined',
typeof undeclaredVariable === 'undefined',
typeof {a: 1} === 'object',
typeof [1, 2, 4] === 'object',
typeof new Date() === 'object'
)
console.log(typeof /regex/ === 'object');

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// Functions
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';