//function creation

function myName(name='Chris'){  //default params
    return console.log("Hello"+" "+name);
}

//invoke function with value
myName("jack");

//anonymous function
let vals = function(){
    return console.log("anonymous function");
}
vals();

//arrow function
let arrow =  (x)=>{ return console.log("My name captain"+" "+x); }
arrow("jack sparrow");