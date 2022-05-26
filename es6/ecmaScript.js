//Constants

const PI = 3.141593
if(PI > 3.0)
{
    console.log(true);
}

//Scoping
//dont declare any variable for loop
let a = [1,2,3,4,5];
let b = [1,2,3,4,5];
for (let i = 0; i < a.length; i++) {
    let x = a[i];
}
for (let i = 0; i < b.length; i++) {
    let y = b[i];
}

let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4
console.log(callbacks[2]());

//Block-Scoped Functions

    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
console.log(foo());


//Arrow Functions
let evens=[1,2,3,5,7,8,20,50];
odds  = evens.map(v => v + 1)                       //value only
pairs = evens.map(v => ({ even: v, odd: v + 1 }))   //return value assign in object
nums  = evens.map((v, i) => v + i)                  //value & index 
console.log(odds,pairs,nums);
 
//Statement Bodies
const fives = [];
evens.forEach(v => {
    if (v % 5 === 0)
        fives.push(v)
 })

 console.log(fives);

 //Lexical this
//  this.evens.forEach((v) => {
//     if (v % 5 === 0)
//         this.fives.push(v)
// })