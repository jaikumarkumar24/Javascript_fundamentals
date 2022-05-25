
//for

for(let i=5;i<10;i++){
    console.log(i);
}

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracalaaaa', 'Lion'];

for (const cat of cats) {   /* console.log(cat); */   }
//map
cats.map(x=> console.log(x));
//filter
const filtered = cats.filter(x=> x.length>10);
console.log(filtered);

//while

i=0

while(i<cats.length){
    console.log(cats[i]);
    i++;
}

//do while
do {
    object = Object.getPrototypeOf(object);
    console.log(object);
  } while (object);