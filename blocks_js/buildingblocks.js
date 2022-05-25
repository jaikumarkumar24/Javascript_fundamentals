//conditional

//ternary operator
let music = 25;
let fileType = music===10 ? "mp3" :
                music===25 ? "m4a"  : "flac";

console.log(fileType);

//if...else
let cond = 0;
let adhar = true;
if(cond && adhar){
    console.log(1,1);
}
else if(adhar || cond){
    console.log(11);
}
else{
    console.log(0);
}

//multiple condition
let x=5,y=2,z=10,loggedIn="one";
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
    // run the code
  }

  if (x === 5 || 7 || 10 || 20) {
    // run my code
  }

  let age = 18;
  let amount;
switch(age){
    case age<10:
        amount=1000;
        break;
    case age===18:
        amount=5000;
        break;
    default:       
        amount=3000;
}
console.log(amount);