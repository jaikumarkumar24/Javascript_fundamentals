const myObject = {
  city: 'Madrid',
  greet() {
    console.log(`Greetings from ${this.city}`);
  }
}

myObject.greet();
/*   
  __defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
toValueOf
*/

myObject.toString(); // "[object Object]"

//Every object in JavaScript has a built-in property, which is called its prototype

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(prototype1);
console.log(object1);


console.log(Object.getPrototypeOf(object1) === prototype1); //true

//syntax
//Object.getPrototypeOf(obj) 
//The prototype of the given object. If there are no inherited properties, null is returned

Object.getPrototypeOf('foo');
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf('foo');
// String.prototype                  (ES2015 code)


const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

//Shadowing properties

const myNewDate = new Date(1995, 11, 17);

console.log(myNewDate.getYear()); // 95

myNewDate.getYear = function () {
  console.log('something else!')
};

myNewDate.getYear();

//Setting a prototype
const personPrototype = {
  greet() {
    console.log('hello!');
  }
}
const carl = Object.create(personPrototype);
carl.greet();

//We then use Object.create() to create a new object with personPrototype as its prototype



//Using a constructor
const personPrototypeC = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  }
}       //In JavaScript, all functions have a property named prototype
//an object personPrototypeC, which has a greet() method

function Person(name) {
  this.name = name;
}
//a Person() constructor function which initializes the name of the person to create.

Person.prototype = personPrototypeC;
Person.prototype.constructor = Person;

//The last line (Person.prototype.constructor = Person;) sets the prototype's constructor property to the function used to create Person objects

//name property, which is set in the constructor, so it appears directly on Person objects

const reuben = new Person('Reuben');
reuben.greet();                       //op : hello, my name is Reuben!
//objects created using Person() will get personPrototype as their prototype


//hasOwn - syntax => hasOwn(instance, prop)
//instance  -   The JavaScript object instance to test.
//prop      -   The String name or Symbol of the property to test.
const object11 = {
  prop: 'exists',
  name: 'jaikumar'
};

console.log(Object.hasOwn(object11, 'name'));                       // expected output: true
console.log(Object.hasOwn(object11, 'toString'));                   // expected output: false
console.log(Object.hasOwn(object11, 'undeclaredPropertyValue'));    // expected output: false



let example = {};
Object.hasOwn(example, 'prop');   // false = 'prop' has not been defined
example.prop = 'exists';
Object.hasOwn(example, 'prop');   // true - 'prop' has been defined
example.prop = null;
Object.hasOwn(example, 'prop');   // true - own property exists with value of null
example.prop = undefined;
Object.hasOwn(example, 'prop');   // true - own property exists with value of undefined


//Array

let fruits = ['Apple', 'Banana', 'Watermelon', 'Orange'];
Object.hasOwn(fruits, 3);   // true ('Orange')
Object.hasOwn(fruits, 4);



//create method
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

//ownPropertyName: => Object.getOwnPropertyNames(obj)

const object12 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

console.log(Object.getOwnPropertyNames(object12));
// expected output: Array ["a", "b", "c"]
//other Method
console.log(Object.keys(object1));  // expected output: Array ["a", "b", "c"]


const arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort());
//// .sort() is an array method.
console.log(Object.keys(arr));

Object.getOwnPropertyNames(object12).forEach(
  function (val, idx, array) {
    console.log(array);
    console.log(val + idx +' -> ' + object12[val]);
  }
);

// in feature
const car = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('make' in car);
// expected output: true
delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);
// expected output: "Suzuki"