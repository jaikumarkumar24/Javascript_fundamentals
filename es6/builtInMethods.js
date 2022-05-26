//Object Property Assignment

var dest = { quux: 0 }
var src1 = { foo: 1, bar: 2 }
var src2 = { foo: 3, baz: 4 }
Object.assign(dest, src1, src2)

dest.quux === 0
dest.foo  === 3
dest.bar  === 2
dest.baz  === 4

//element finding
let val = [ 1, 3, 4, 2 ].find(x => x > 3) // 4
let ind = [ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2
console.log(val,ind);

//String Repeating
// " ".repeat(4 * depth)
// "foo".repeat(3)

//String Searching
"hello".startsWith("ello", 1) // true
"hello".endsWith("hell", 4)   // true
"hello".includes("ell")       // true
"hello".includes("ell", 1)    // true
"hello".includes("ell", 2)    // false

//Number Checking

Number.isNaN(42) === false
Number.isNaN(NaN) === true

Number.isFinite(Infinity) === false
Number.isFinite(-Infinity) === false
Number.isFinite(NaN) === false
Number.isFinite(123) === true

//safe check 
Number.isSafeInteger(42) === true
Number.isSafeInteger(9007199254740992) === false

//compare
x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);

console.log(0.1 + 0.2 === 0.3) // false
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON)  // true

//trunc
console.log(Math.trunc(42.7)) // 42
console.log(Math.trunc( 0.1)) // 0
console.log(Math.trunc(-0.1)) // -0


//Sign determination
console.log(Math.sign(7))   // 1
console.log(Math.sign(0))   // 0
console.log(Math.sign(-0))  // -0
console.log(Math.sign(-7))  // -1
console.log(Math.sign(NaN)) // NaN