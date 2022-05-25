

const personObject = {};

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function() {       
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    //bio(){}       Instead of bio: function() we can write bio()
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
    qualification : {   //object property can itself be an object
        hsc: '12',
        ug: 'ece',
        pg: 'ec'
      },
  };

  //dot notation
  console.log(person.name)
  console.log(person.name[0])
  console.log(person.age)
  console.log(person.bio())
  console.log(person.introduceSelf())
  console.log(person.qualification.hsc); //or qualification["pg"]
  console.log(person["qualification"]["pg"]);

  //assign also
  person['eyes'] = 'hazel';  
  console.log(person);

//What is "this"?
//The this keyword refers to the current object the code is being written inside
//so in this case this is equivalent to person

//So why not just write person instead?
//Well, when you only have to create a single object literal, it's not so useful. 
//But if you create more than one, this enables you to use the same method definition for every object you create

function Personfun(name) {
    this.name = name;       // is equal to Person.name
    this.introduceSelf = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }

//constructor
const salva = new Personfun('Salva');
salva.name;
salva.introduceSelf();

const frankie = new Personfun('Frankie');
frankie.name;
frankie.introduceSelf();