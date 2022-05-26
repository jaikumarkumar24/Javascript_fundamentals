/* Assign values default parameter, dont inside the scope */
function f (x, y = 7, z = 42) { //In this example, the x,y,z are the parameters of the f() function
    return x + y + z
}
console.log(f(1) === 50);      // 1 is the arguments.

/**
 * rest Params
 * */ 
function f (x, y, ...a) {     //The last parameter (args) is prefixed with the three-dots ( ...). 
                                //It’s called a rest parameter ( ...a).
                                //["hello", true, 7] like array
                                //Rest parameter must be last formal parameter - (x,...a,y) throw error.
    return (x + y) * a.length   
}
f(1, 2, "hello", true, 7) === 9


/**
 * spread operator
 */

var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

function f (x, y, ...a) {
    return (x + y) * a.length
}
console.log(f(1, 2, ...params) === 9);

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]     //other method split


/**
 * String Interpolation
 */
 var customer = { name: "Foo" }
 var card = { amount: 7, product: "Bar", unitprice: 42 }
 var message = `Hello ${customer.name},     
 want to buy ${card.amount} ${card.product} for
 a total of ${card.amount * card.unitprice} bucks?`         //use string literal method

 console.log(message);

//Custom Interpolation
 //get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`

//Raw String Access
 function quux (strings, ...values) {
    strings[0] === "foo\n"
    strings[1] === "bar"
    strings.raw[0] === "foo\\n"
    strings.raw[1] === "bar"
    values[0] === 42
}
quux`foo\n${ 42 }bar`

String.raw`foo\n${ 42 }bar` === "foo\\n42bar"

