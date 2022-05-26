//Define

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

//inheritance

/* class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
} */

//base class access
class Shapes {
    toString () {
        return `Shapes(${this.id})`
    }
}
/* class Rectangle extends Shapes {
    constructor (id, x, y, width, height) {
        super(id, x, y)
    }
    toString () {
        return "Rectangle > " + super.toString()
    }
}
class Circle extends Shapes {
    constructor (id, x, y, radius) {
        super(id, x, y)
    }
    toString () {
        return "Circle > " + super.toString()
    }
}
 */

//Static Members

class Rectangle extends Shape {
    static defaultRectangle () {
        return new Rectangle("default", 0, 0, 100, 100)
    }
}
class Circle extends Shape {
    static defaultCircle () {
        return new Circle("default", 0, 0, 100)
    }
}
var defRectangle = Rectangle.defaultRectangle()
var defCircle    = Circle.defaultCircle()

console.log(defRectangle,defCircle);


//Static method
class Triple {
    static customName = 'Tripler';
    static description = 'I triple any number you provide';
    static calculate(n = 1) {
      return n * 3;
    }
  }
  
  class SquaredTriple extends Triple {
    static longDescription;
    static description = 'I square the triple of any number you provide';
    static calculate(n) {
      return super.calculate(n) * super.calculate(n);
    }
  }
  
  console.log(Triple.description);            // 'I triple any number you provide'
  console.log(Triple.calculate());            // 3
  console.log(Triple.calculate(6));           // 18
  
  const tp = new Triple();
  
  console.log(SquaredTriple.calculate(3));    // 81 (not affected by parent's instantiation)
  console.log(SquaredTriple.description);     // 'I square the triple of any number you provide'
  console.log(SquaredTriple.longDescription); // undefined
  console.log(SquaredTriple.customName);      // 'Tripler'
  //console.log(tp.calculate());                // 'tp.calculate is not a function'


//Getter/Setter also directly within classes

class Rectangles {
    constructor (width, height) {
        this._width  = width
        this._height = height
    }
    set width  (width)  { this._width = width               }
    get width  ()       { return this._width                }
    set height (height) { this._height = height             }
    get height ()       { return this._height               }
    get area   ()       { return this._width * this._height }
}
var r = new Rectangles(50, 20)
r.area === 1000

//Defining a getter on new objects in object initializers
const obj = {
    log: ['example','test'],
    get latest() {
      if (this.log.length === 0) return undefined;
      return this.log[this.log.length - 1];
    }
  }
  console.log(obj.latest); // "test"

//setter
  const language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  };
  
  language.current = 'EN';
  language.current = 'FA';
  
  console.log(language.log);
  // expected output: Array ["EN", "FA"]



  //Class Inheritance, From Expressions

/*   var aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args)
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            })
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
}

class Colored {
    initializer ()     { this._color = "white" }
    get color ()       { return this._color }
    set color (v)      { this._color = v }
}

class ZCoord {
    initializer ()     { this._z = 0 }
    get z ()           { return this._z }
    set z (v)          { this._z = v }
}

class Shape {
    constructor (x, y) { this._x = x; this._y = y }
    get x ()           { return this._x }
    set x (v)          { this._x = v }
    get y ()           { return this._y }
    set y (v)          { this._y = v }
}

class Rectangle extends aggregation(Shape, Colored, ZCoord) {}

var rect = new Rectangle(7, 42)
rect.z     = 1000
rect.color = "red"
console.log(rect.x, rect.y, rect.z, rect.color) */