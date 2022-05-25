const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ['tree', 795, [0, 1, 2]];

//update
shopping[0] = 'tahini';
//length
console.log(sequence.length,sequence[0]);
console.log(random[2][1],shopping.indexOf('cheese'));
shopping.push('shirt','lays', 'donut'); //add to last
shopping.unshift('kitkat');             //add to start 
shopping.pop();                         //remove from last
shopping.shift();                       //remove from start
console.log(shopping);

//print
for (const cart of shopping) {
    //console.log(cart);
  }
//map
  function double(number) {  return number * 2; }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);

//filter
function isLong(city) {    return city.length > 8;  }
  const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
  const longer = cities.filter(isLong);
  console.log(longer);

//string to array
let mailIds = "jaikumarhere@gmail.com";
const mailArray = mailIds.split('');
console.log(mailArray);

//last item in the array
console.log(mailArray[mailArray.length - 1]);
//console.log(mailArray.join(','));
console.log(mailArray.toString());