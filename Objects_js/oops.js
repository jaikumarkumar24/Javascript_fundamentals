class Person {

    name;   //property - declaration is optional constructor create a property
  
    constructor(name) { //automatically invoke - no need to invoke this
      this.name = name;
    }
  
    introduceSelf() {   //method
      console.log(`Hi! I'm ${this.name}`);
    }
  
  }
const giles = new Person('Giles');
giles.introduceSelf();

//inheritance
class Professor extends Person {
    teaches;  
    constructor(name, teaches) {
      super(name);                  //superclass constructor
                                    //The superclass constructor takes care of setting name
      this.teaches = teaches;
    }
  
    introduceSelf() {               //Superclass method
      console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  
  }

  const walsh = new Professor('Walsh', 'Psychology');
  walsh.introduceSelf();  // 'My name is Walsh, and I will be your Psychology professor'  
  walsh.grade('my paper'); // some random grade


//encapsulation

  class Student extends Person {

    #year;          //#year is a private data property
                    //it can use #year internally
                    //but if code outside the object tries to access #year the browser throws an error:
    constructor(name, year) {
      super(name);
      this.#year = year;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return console.log(this.#year > 1);
    }

    somePublicMethod() {
        this.#somePrivateMethod();  //they can only be called by the object's own methods
      }

    //Private methods
    #somePrivateMethod() {
        console.log('You called me?');
      }

  }

  const summers = new Student('Summers', 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true
//summers.#year; // SyntaxError