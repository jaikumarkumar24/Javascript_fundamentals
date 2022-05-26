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