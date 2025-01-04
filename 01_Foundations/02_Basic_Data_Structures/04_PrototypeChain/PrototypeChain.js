// Inheritance and the prototype chain

// Inheritance is a mechanism that allows one object to inherit properties and methods from another object.

//In JavaScript, inheritance and the prototype chain are fundamental concepts that allow objects to inherit properties and methods from other objects. This mechanism is crucial for object-oriented programming in JavaScript.

// Every object has a prototype, and the prototype is also an object. All objects inherit properties and methods from their prototype. An object inherits from another object through its prototype. The prototype chain is a series of links between objects. The prototype chain is used to resolve property access.

//Inheritance
// Inheritance in JavaScript allows one object to inherit properties and methods from another object. This concept is similar to inheritance in classical object-oriented languages but is implemented differently in JavaScript.

// Prototype-Based Inheritance
// JavaScript uses prototype-based inheritance, which means that every object has a prototype object. The prototype object can have its own prototype, creating a chain of objects that forms the prototype chain.

// Prototype Chain
// The prototype chain is the mechanism that JavaScript uses to resolve properties and methods. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it does not find it there, it looks up the prototype chain.

// How It Works
// Object Creation:

// When an object is created, it automatically has a prototype object. This prototype object is itself an object and has its own prototype, and so on.
// Prototype Access:

// You can access an object’s prototype using Object.getPrototypeOf(obj) or by using the __proto__ property (though __proto__ is deprecated).
// Property Lookup:

// When accessing a property or method, JavaScript first checks the object itself. If the property is not found, it checks the object's prototype, and then the prototype’s prototype, and so on, until it reaches the end of the prototype chain, which is null.
// Example of Prototype Chain

// Creating a base object
const animal = {
    type: 'Mammal',
    speak() {
      console.log('Animal speaks');
    }
  };
  
  // Creating a derived object
  const dog = Object.create(animal);
  dog.breed = 'Golden Retriever';
  dog.speak = function() {
    console.log('Woof!');
  };
  
  console.log(dog.breed); // 'Golden Retriever'
  dog.speak(); // 'Woof!'
  console.log(dog.type); // 'Mammal' (inherited from animal)
  
  // Accessing prototype
  console.log(Object.getPrototypeOf(dog)); // { type: 'Mammal', speak: [Function: speak] }
    console.log(dog.__proto__); // { type: 'Mammal', speak: [Function: speak] }  

// In this example, we have a base object animal with a type property and a speak method. We then create a derived object dog using Object.create(animal). The dog object inherits the properties and methods of the animal object through the prototype chain.

// The dog object has its own breed property and a speak method that overrides the speak method of the animal object. When we access the breed property or call the speak method on the dog object, JavaScript first checks the dog object itself. If the property or method is not found, it looks up the prototype chain to find it.

// We can access the prototype of an object using Object.getPrototypeOf(obj) or the __proto__ property. In this example, we access the prototype of the dog object, which is the animal object.

//Prototype Inheritance and Object Creation
// When you create a new object, you can either use a constructor function or the ES6 class syntax. Both approaches use prototypes under the hood.

// Constructor Function Example
// Constructor function
function Animal(type) {
    this.type = type;
  }
  
  Animal.prototype.speak = function() {
    console.log('Animal speaks');
  };
  
  // Creating an instance
  const dog = new Animal('Mammal');
  dog.speak(); // 'Animal speaks'
  console.log(dog.type); // 'Mammal'

// In this example, we define a constructor function Animal with a type property and a speak method. We then add the speak method to the prototype of the Animal function. When we create a new instance of the Animal object using the new keyword, the prototype chain is set up automatically.

// ES6 Class Example
// ES6 class syntax
class Animal {
    constructor(type) {
      this.type = type;
    }
  
    speak() {
      console.log('Animal speaks');
    }
  }
  
  // Creating an instance
  const dog = new Animal('Mammal');
  dog.speak(); // 'Animal speaks'
  console.log(dog.type); // 'Mammal'  

// In this example, we define an ES6 class Animal with a constructor and a speak method. When we create a new instance of the Animal class using the new keyword, the prototype chain is set up automatically.

//Inheritance and the prototype chain are fundamental concepts in JavaScript that allow objects to inherit properties and methods from other objects. Understanding how inheritance works in JavaScript is essential for writing object-oriented code in JavaScript.