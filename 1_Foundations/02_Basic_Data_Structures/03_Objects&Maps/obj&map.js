//JavaScript Objects and Maps
//JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects.

//Objects are a basic data structure in JavaScript used to store key-value pairs. Here’s a closer look at how they work:

//Characteristics of Objects
//Objects are mutable: They can be modified after creation
//Objects are dynamic: New properties can be added to objects after creation
//Objects can be passed as parameters to functions
//Objects are stored by reference, not by value

// Key Types:
// Keys (or property names) are always strings or symbols. If you use other data types, they are converted to strings.

// Order of Keys:
// The order of keys is not strictly guaranteed. However, in practice, most JavaScript engines maintain the order of string keys as they are inserted.

// Prototype Inheritance:
// Objects have a prototype chain. This means that objects inherit properties and methods from Object.prototype.

// Usage:
// Commonly used for structured data, configuration settings, and simple data storage.

//Example: Basic Object Operations
//Here’s how you can create an object in JavaScript:

// Create an object
let person = {
    name: 'John', // Key: 'name' Value: 'John'
    age: 32 // Key: 'age' Value: 32
};

// Access properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 32

// Modify properties
person.name = 'Gilbert';
console.log(person.name); // Output: Gilbert

// Add properties
person.job = 'Engineer';
console.log(person.job); // 'Engineer'

// Delete properties
delete person.job;
console.log(person.job); // Output: undefined

// Iterating over properties
for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
}

// Output:
// name: Gilbert
// age: 32


//Example: Object Methods
//Objects can also have methods: functions stored as object properties. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32,
    greet: function() {
      console.log('Hello');
    }
};

// Access the method
person.greet(); // Output: Hello

//Example: Object Constructor
//You can create objects using a constructor function. Here’s an example:

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Create objects
let person1 = new Person('John', 30);
let person2 = new Person('Amy', 28);

// Access properties
console.log(person1.name); // Output: John
console.log(person2.name); // Output: Amy

//Example: Object Prototypes
//JavaScript objects have a prototype property. By default, the prototype is an object with a constructor property. You can add properties and methods to the prototype property to allow other objects to share them.

// Create a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to the prototype
Person.prototype.greet = function() {
    console.log('Hello');
};

// Create objects
let person = new Person('John', 30);
let person = new Person('Amy', 28);

// Access the method
person.greet(); // Output: Hello
person.greet(); // Output: Hello

//Example: Object Inheritance
//You can create an object that inherits from another object using the Object.create() method. Here’s an example:

// Create a parent object
let person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

// Create a child object
let me = Object.create(person);

// Add properties
me.name = 'Matthew';
me.isHuman = true;

// Access properties
me.printIntroduction(); // Output: My name is Matthew. Am I human? true

//Example: Maps
//Maps are a new object type in ES6 that allow you to store collections of key-value pairs. Here’s an example of how to use them:

// Create a map
let person = new Map();

// Set values
person.set('name', 'John');
person.set('age', 32);

// Get values
console.log(person.get('name')); // Output: John
console.log(person.get('age')); // Output: 32

// Check if a key exists
console.log(person.has('name')); // Output: true

// Delete a key
person.delete('name');
console.log(person.has('name')); // Output: false

// Iterate over keys
for (const key of person.keys()) {
    console.log(key);
}

// Output:
// age

// Iterate over values
for (const value of person.values()) {
    console.log(value);
}

// Output:
// 32

// Iterate over entries
for (const entry of person.entries()) {
    console.log(entry[0], entry[1]);
}

// Output:
// age 32

// Clear the map
person.clear();
console.log(person.size); // Output: 0

//Example: WeakMaps
//WeakMaps are similar to Maps, but they have a few key differences:

//Keys must be objects
//Keys are weakly referenced
//Values are not enumerable
//Here’s an example of how to use WeakMaps:

// Create a weak map
let person = new WeakMap();

// Create an object
let user = {};

// Set values
person.set(user, 'John');

// Get values
console.log(person.get(user)); // Output: John

// Delete a key
person.delete(user);
console.log(person.has(user)); // Output: false

//Example: Object vs. Map
//Here’s a comparison between objects and maps:

//Objects
//Keys can be any type
//Keys are converted to strings
//Maps
//Keys must be objects
//Keys are not converted to strings
//Maps are more efficient for storing key-value pairs

//Objects are used for storing structured data, configuration settings, and simple data storage. Maps are used for storing key-value pairs when the keys are unknown until runtime, or when you need to look up values dynamically.

//Example: Object Destructuring
//Object destructuring allows you to extract multiple properties from an object and assign them to variables. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Destructure properties
let { name, age } = person;

// Access properties
console.log(name); // Output: John
console.log(age); // Output: 32

//Example: Object Spread Operator
//The object spread operator allows you to create a new object by copying properties from an existing object. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Copy properties
let newPerson = { ...person };

// Access properties
console.log(newPerson.name); // Output: John
console.log(newPerson.age); // Output: 32

//Example: Object.assign()
//The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. Here’s an example:

// Create objects
let person = {
    name: 'John',
    age: 32
};

let job = {
    title: 'Engineer'
};

// Copy properties
let employee = Object.assign(person, job);

// Access properties
console.log(employee.name); // Output: John
console.log(employee.age); // Output: 32
console.log(employee.title); // Output: Engineer

//Example: Object.keys()
//The Object.keys() method returns an array of a given object's own enumerable property names. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Get keys
let keys = Object.keys(person);

// Access keys
console.log(keys); // Output: ['name', 'age']

//Example: Object.values()
//The Object.values() method returns an array of a given object's own enumerable property values. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Get values
let values = Object.values(person);

// Access values
console.log(values); // Output: ['John', 32]

//Example: Object.entries()
//The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Get entries
let entries = Object.entries(person);

// Access entries
console.log(entries); // Output: [['name', 'John'], ['age', 32]]

//Example: Object.getOwnPropertyNames()
//The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Get property names
let properties = Object.getOwnPropertyNames(person);

// Access properties
console.log(properties); // Output: ['name', 'age']

//Example: Object.getOwnPropertySymbols()
//The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object. Here’s an example:

// Create a symbol
const key = Symbol('key');

// Create an object
let person = {
    [key]: 'John'
};

// Get symbols
let symbols = Object.getOwnPropertySymbols(person);

// Access symbols
console.log(symbols[0]); // Output: Symbol(key)

//Example: Object.freeze()
//The Object.freeze() method freezes an object. A frozen object can no longer be changed. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Freeze the object
Object.freeze(person);

// Try to modify the object
person.name = 'Gilbert';
console.log(person.name); // Output: John

//Example: Object.seal()
//The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Seal the object
Object.seal(person);

// Try to add a new property
person.job = 'Engineer';
console.log(person.job); // Output: undefined

//Example: Object.is()
//The Object.is() method determines whether two values are the same value. Here’s an example:

// Create objects
let persones = {
    name: 'John'
};

let persons = {
    name: 'John'
};

// Compare objects
console.log(Object.is(persones, persons)); // Output: false

//Example: Object.setPrototypeOf()
//The Object.setPrototypeOf() method sets the prototype of a specified object to another object. Here’s an example:

// Create objects
let person = {
    name: 'John'
};

let jobs = {
    title: 'Engineer'
};

// Set the prototype
Object.setPrototypeOf(person, jobs);

// Access properties
console.log(person.title); // Output: Engineer

//Example: Object.fromEntries()
//The Object.fromEntries() method transforms a list of key-value pairs into an object. Here’s an example:

// Create an array of key-value pairs
let entriess = [
    ['name', 'John'],
    ['age', 32]
];

// Create an object
let person = Object.fromEntries(entriess);

// Access properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 32

//Example: Object.getOwnPropertyDescriptors()
//The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Get property descriptors
let descriptors = Object.getOwnPropertyDescriptors(person);

// Access descriptors
console.log(descriptors.name.writable); // Output: true
console.log(descriptors.age.writable); // Output: true

//Example: Object.entries() with for...of
//You can use the Object.entries() method with a for...of loop to iterate over an object's key-value pairs. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Iterate over entries
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

// Output:
// name: John
// age: 32

//Example: Object.keys() with forEach()
//You can use the Object.keys() method with the forEach() method to iterate over an object's keys. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Iterate over keys
Object.keys(person).forEach(key => {
    console.log(key);
});

// Output:
// name
// age

//Example: Object.values() with forEach()
//You can use the Object.values() method with the forEach() method to iterate over an object's values. Here’s an example:

// Create an object
let person = {
    name: 'John',
    age: 32
};

// Iterate over values
Object.values(person).forEach(value => {
    console.log(value);
});

// Output:
// John
// 32

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        