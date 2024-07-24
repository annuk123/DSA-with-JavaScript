 //ES6(ECMAScript 2015) introduced a lot of new features to JavaScript, signficantly enhanching its capablities and readability. Subsequent versions, ES7, ES8, ES9, and ES10, have also added new features. In this section, we will cover some of the most important features introduced in ES6.

 //ES6 (ECMAScript 2015)
 //ES6 introduced two new ways to declare variables in JavaScript: `let` and `const`. These two keywords provide block scoping, unlike the `var` keyword, which provides function scoping.

 //1. Block-scoped variables: `let` and `const`:
    //The `let` statement declares a block-scoped local variable, optionally initializing it to a value.
    //The `const` statement declares a block-scoped local variable, which cannot be reassigned.

    //Example:
    //```javascript
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10

    const y = 10;
    // y = 20; // TypeError: Assignment to constant variable.
    console.log(y); // Output: 10
    //```

    //2. Arrow functions:
    //Shorter syntax for functions and lexical this binding.
    //Example:
    const add1 = (a, b) => a + b;
    console.log(add1(2, 3)); // Output: 5

    //3. Template literals:
    //Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
    //Example:
    const name = 'John';
    const age = 30;
    console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is John and I am 30 years old.

    //4. Default parameters:
    //You can assign default values to function parameters.
    //Example:
    const greet = (names = 'Anonymous') => `Hello, ${names}!`;
    console.log(greet('David')); // Output: Hello, David!
    console.log(greet()); // Output: Hello, Anonymous!

    //5. Destructuring assignment:
    //Destructuring assignment allows you to extract values from arrays or objects into variables.
    //Example:
    const numbers = [1, 2, 3];
    [num1, num2] = numbers;
    console.log(num1, num2); // Output: 1 2

    const person = { name1: 'John', ages: 30 };
    const { name1, ages } = person;
    console.log(name1, age); // Output: John 30

    //6. Rest parameters:
    //The rest parameter syntax allows you to represent an indefinite number of arguments as an array.
    //Example:
    const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum(1, 2, 3, 4)); // Output: 10

    //7. Spread operator:
    //The spread operator allows an iterable to expand in places where zero or more arguments are expected.
    //Example:
    const arr = [1, 2, 3];
    console.log(...arr); // Output: 1 2 3

    //8. Enhanced object literals:
    //Object literals are extended to support setting the prototype at construction, shorthand for `foo: foo` assignments, defining methods, making super calls, and computing property names with expressions.
    //Example:
    const name2 = 'John';
    const age2 = 30;
    const person2 = { name2, age2 };
    console.log(person2); // Output: { name: 'John', age: 30 }

    //9. Promises:
    //Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
    //Example:
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data fetched successfully!');
            }, 2000);
        });
    };
    fetchData().then(data => console.log(data)); // Output: Data fetched successfully!

    //10. Classes:
    //ES6 classes are a simple sugar over the prototype-based inheritance. Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics. It's a common pattern in JavaScript to use functions as classes. However, this pattern has some issues. ES6 classes are syntactical sugar over this pattern. Having a single way to create objects will help the community to create more readable and maintainable code.
    //Example:
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    }
    const person3 = new Person('John', 30);
    console.log(person3.greet()); // Output: Hello, my name is John and I am 30 years old.

    //11. Modules:
    //ES6 modules allow you to share code across multiple files. You can export and import modules using the `export` and `import` keywords.
    //Example:
    //math.js
    export const add = (a, b) => a + b;
    export const subtract = (a, b) => a - b;
    //app.js
    import { add, subtract } from './math.js';
    console.log(add(2, 3)); // Output: 5
    console.log(subtract(5, 2)); // Output: 3

    //12. Iterators and Generators:
    //ES6 introduced iterators and generators to work with data in a more efficient way.
    //Example:
    //Iterator
    const arr2 = [1, 2, 3];
    const it = arr2[Symbol.iterator]();
    console.log(it.next()); // Output: { value: 1, done: false }
    console.log(it.next()); // Output: { value: 2, done: false }
    console.log(it.next()); // Output: { value: 3, done: false }
    console.log(it.next()); // Output: { value: undefined, done: true }

    //Generator
    function* genFunc() {
        yield 1;
        yield 2;
        yield 3;
    }
    const gen = genFunc();
    console.log(gen.next()); // Output: { value: 1, done: false }
    console.log(gen.next()); // Output: { value: 2, done: false }
    console.log(gen.next()); // Output: { value: 3, done: false }
    console.log(gen.next()); // Output: { value: undefined, done: true }

    //13. Map and Set:
    //ES6 introduced two new data structures: `Map` and `Set`.
    //`Map` is a collection of keyed data items, just like an `Object`. But the main difference is that `Map` allows keys of any type.
    //`Set` is a collection of unique values.
    //Example:
    const map = new Map();
    map.set('name', 'John');
    map.set('age', 30);
    console.log(map.get('name')); // Output: John
    console.log(map.get('age')); // Output: 30

    //ES7 (ECMAScript 2016)
    //ES7 introduced two new features: `Array.prototype.includes` and `Exponentiation Operator`.
    //1. `Array.prototype.includes`:
    //The `includes()` method determines whether an array includes a certain element, returning `true` or `false` as appropriate.
    //Example:
    const arr3 = [1, 2, 3];
    console.log(arr3.includes(2)); // Output: true
    console.log(arr3.includes(4)); // Output: false

    //2. Exponentiation Operator:
    //The exponentiation operator `**` raises the left operand to the power of the right operand.
    //Example:
    console.log(2 ** 3); // Output: 8

    //ES8 (ECMAScript 2017)
    //ES8 introduced three new features: `String.prototype.padStart`, `String.prototype.padEnd`, and `Object.values/Object.entries`.
    //1. `String.prototype.padStart`:
    //The `padStart()` method pads the current string with another string until the resulting string reaches the given length.
    //Example:
    const str = '5';
    console.log(str.padStart(2, '0')); // Output: 05

    //2. `String.prototype.padEnd`:
    //The `padEnd()` method pads the current string with another string until the resulting string reaches the given length.
    //Example:
    const str2 = '5';
    console.log(str2.padEnd(2, '0')); // Output: 50

    //3. `Object.values/Object.entries`:
    //The `Object.values` method returns an array of a given object's own enumerable property values.
    //The `Object.entries` method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.
    //Example:
    const obj = { name: 'John', age: 30 };
    console.log(Object.values(obj)); // Output: ['John', 30]
    console.log(Object.entries(obj)); // Output: [['name', 'John'], ['age', 30]]

    //4. Async/Await:
    //ES8 introduced async functions and the `await` operator.
    //Async functions enable you to write promise-based asynchronous code in a synchronous way.
    //Example:
    const fetchData2 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data fetched successfully!');
            }, 2000);
        });
    };
    const logData = async () => {
        const data = await fetchData2();
        console.log(data);
    };
    logData(); // Output: Data fetched successfully!

    //ES9 (ECMAScript 2018)
    //ES9 introduced two new features: `Object spread properties` and `Asynchronous Iteration`.
    //1. Object spread properties:
    //The object spread properties feature allows you to spread out properties of an object.
    //Example:
    const obj1 = {a: 1, b: 2};
    const obj2 = {...obj1, c: 3}; // {a: 1, b: 2, c: 3}
    console.log(obj2);
    
    //2. Asynchronous Iteration:
    //ES9 introduced asynchronous iteration, which allows you to iterate over async data sources. for await...of loops to iterate over async data sources. 
    //Example:
    const fetchData3 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([1, 2, 3]);
            }, 2000);
        });
    };
    const logData2 = async () => {
        const data = await fetchData3();
        for await (const item of data) {
            console.log(item);
        }
    };
    logData2(); // Output: 1 2 3

    //ES10 (ECMAScript 2019)
    //ES10 introduced several new features: `Array.prototype.flat`, `Array.prototype.flatMap`, `String.prototype.trimStart`, `String.prototype.trimEnd`, `Object.fromEntries`  `Optional Catch Binding`, and `Symbol.prototype.description`.

    //1. `Array.prototype.flat`:
    //The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    //Example:
    const arr4 = [1, 2, [3, 4]];
    console.log(arr4.flat()); // Output: [1, 2, 3, 4]

    //2. `Array.prototype.flatMap`:
    //The `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array.
    //Example:
    const arr5 = [1, 2, 3];
    console.log(arr5.flatMap(num => [num * 2])); // Output: [2, 4, 6]

    //3. `String.prototype.trimStart`:
    //The `trimStart()` method removes whitespace from the beginning of a string.
    //Example:
    const str3 = '   Hello, World!   ';
    console.log(str3.trimStart()); // Output: 'Hello, World!   '

    //4. `String.prototype.trimEnd`:
    //The `trimEnd()` method removes whitespace from the end of a string.
    //Example:
    const str4 = '   Hello, World!   ';
    console.log(str4.trimEnd()); // Output: '   Hello, World!'

    //5. `Object.fromEntries`:
    //The `Object.fromEntries()` method transforms a list of key-value pairs into an object.
    //Example:
    const entries = [['name', 1], ['age', 2]];
    console.log(Object.fromEntries(entries)); // Output: { name: 1, age: 2 }

    //6. Optional Catch Binding:
    //You can omit the catch binding in try/catch blocks.
    //Example:
    try {
        throw new Error('Error');
    } catch {
        console.log('Caught an error!');
    }

    //7. `Symbol.prototype.description`:
    //The `description` property returns a string representing the description of the `Symbol` object.
    //Example:
    const sym = Symbol('description');
    console.log(sym.description); // Output: description

    //ES11 (ECMAScript 2020)
    //ES11 introduced several new features: `BigInt`, `Dynamic Import`, `Nullish Coalescing Operator(??)`, and `Optional Chaining (?.)`.
    //1. BigInt:
    //BigInt is a new built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.
    //Example:
    const bigNum = 1234567890123456789012345678901234567890n;
    console.log(bigNum); // Output: 1234567890123456789012345678901234567890n

    //2. Dynamic Import:
    //Dynamic `import()` is a new way to asynchronously load modules on demand.
    //Example:
    const module = await import('./math.js');
    console.log(module.add(2, 3)); // Output: 5

    //3. Nullish Coalescing Operator(??):
    //The nullish coalescing operator `??` is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.
    //Example:
    const name3 = null;
    console.log(name3 ?? 'Anonymous'); // Output: Anonymous

    //4. Optional Chaining (?.):
    //The optional chaining operator `?.` permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.
    //Example:
    const user = {};
    console.log(user?.profile?.email); // Output: undefined

    //ES12 (ECMAScript 2021)
    //ES12 introduced several new features: `String.prototype.replaceAll`, `Promise.any`, `Logical Assignment Operators`, `WeakRefs and FinalizationRegistry`, and `Numeric Separators`.
    //1. `String.prototype.replaceAll`:
    //The `replaceAll()` method returns a new string with all matches of a pattern replaced by a replacement.
    //Example:
    const str5 = 'Hello, World!';
    console.log(str5.replaceAll('World')); // Output: Hello, World!

    //2. `Promise.any`:
    //The `Promise.any()` method takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise.
    //Example:
    const promises = [fetch('url1'), fetch('url2'), fetch('url3')];
    Promise.any(promises).then(data => console.log(data));

    //3. Logical Assignment Operators:
    //ES12 introduced logical assignment operators, which are shorthand assignments that combine logical operators and assignment expressions.
    //Example:
    let x1 = 10;
    x1 &&= 20; // Equivalent to x = x && 20;
    console.log(x1); // Output: 20

    //4. WeakRefs and FinalizationRegistry:
    // work with weak references and a finalization registry.
    //Example:
    const weakRef = new WeakRef(obj);
    const finalizationRegistry = new FinalizationRegistry(callback);

    //5. Numeric Separators:
    //Numeric separators allow you to use underscores as separators in numeric literals to make them more readable.
    //Example:
    const num = 1_000_000;
    console.log(num); // Output: 1000000

    //ES13 (ECMAScript 2022)
    //ES13 introduced several new features: `Array.prototype.intersection`, `Array.prototype.union`, `Array.prototype.difference`, `Array.prototype.symmetricDifference`, `Array.prototype.cartesianProduct`, and `Array.prototype.powerSet`  ` Class Fields and Methods` `Top-Level Await`.
    //1. `Array.prototype.intersection`:
    //The `intersection()` method returns a new array containing elements that are present in all arrays.
    //Example:
    const arr6 = [1, 2, 3];
    const arr7 = [2, 3, 4];
    console.log(arr6.intersection(arr7)); // Output: [2, 3]

    //2. `Array.prototype.union`:
    //The `union()` method returns a new array containing elements that are present in at least one of the arrays.
    //Example:
    const arr8 = [1, 2, 3];
    const arr9 = [2, 3, 4];
    console.log(arr8.union(arr9)); // Output: [1, 2, 3, 4]

    //3. `Array.prototype.difference`:
    //The `difference()` method returns a new array containing elements that are present in the first array but not in the second array.
    //Example:
    const arr10 = [1, 2, 3];
    const arr11 = [2, 3, 4];
    console.log(arr10.difference(arr11)); // Output: [1]

    //4. `Array.prototype.symmetricDifference`:
    //The `symmetricDifference()` method returns a new array containing elements that are present in one of the arrays but not in both.
    //Example:
    const arr12 = [1, 2, 3];
    const arr13 = [2, 3, 4];
    console.log(arr12.symmetricDifference(arr13)); // Output: [1, 4]

    //5. `Array.prototype.cartesianProduct`:
    //The `cartesianProduct()` method returns a new array containing all possible pairs of elements from the two arrays.
    //Example:
    const arr14 = [1, 2];
    const arr15 = [3, 4];
    console.log(arr14.cartesianProduct(arr15)); // Output: [[1, 3], [1, 4], [2, 3], [2, 4]]

    //6. `Array.prototype.powerSet`:
    //The `powerSet()` method returns a new array containing all possible subsets of the array.
    //Example:
    const arr16 = [1, 2];
    console.log(arr16.powerSet()); // Output: [[], [1], [2], [1, 2]]

    //7. Class Fields and Methods:
    //ES13 introduced class fields and methods, which allow you to define fields and methods directly on the class.
    //Example:
    class Person2 {
        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    }
    const person4 = new Person2('John', 30);
    console.log(person4.greet()); // Output: Hello, my name is John and I am 30 years old.

    //8. Top-Level Await:
    //ES13 introduced top-level await, which allows you to use the `await` keyword outside of an async function.
    //Example:
    const data2 = await fetchData4();
    console.log(data2);

    //ES14 (ECMAScript 2023)
    //ES14 introduced several new features: `Array.prototype.first`, `Array.prototype.last`, `Array.prototype.sample`, `Array.prototype.shuffle`, `Array.prototype.rotate`, `Array.prototype.chunk`, `Array.prototype.compact`, `Array.prototype.flatten`, `Array.prototype.unique`, `Array.prototype.sum`, `Array.prototype.product`, `Array.prototype.mean`, `Array.prototype.median`, `Array.prototype.mode`, `Array.prototype.range`, `Array.prototype.count`, `Array.prototype.frequency`, `Array.prototype.duplicates`, `Array.prototype.with`, `Array.prototype.toSorted`, `Array.prototype.toSpliced` `Array.prototype.without` `String.prototype.toWellFormed`, `String.prototype.toPlainText`

    //1. `Array.prototype.first`:
    //The `first()` method returns the first element of the array.
    //Example:
    const arr17 = [1, 2, 3];
    console.log(arr17.first()); // Output: 1

    //2. `Array.prototype.last`:
    //The `last()` method returns the last element of the array.
    //Example:
    const arr18 = [1, 2, 3];
    console.log(arr18.last()); // Output: 3

    //3. `Array.prototype.sample`:
    //The `sample()` method returns a random element from the array.
    //Example:
    const arr19 = [1, 2, 3];
    console.log(arr19.sample()); // Output: 2

    //4. `Array.prototype.shuffle`:
    //The `shuffle()` method shuffles the elements of the array.
    //Example:
    const arr20 = [1, 2, 3];
    console.log(arr20.shuffle()); // Output: [3, 1, 2]

    //5. `Array.prototype.rotate`:
    //The `rotate()` method rotates the elements of the array by a given number of positions.
    //Example:
    const arr21 = [1, 2, 3];
    console.log(arr21.rotate(1)); // Output: [3, 1, 2]

    //6. `Array.prototype.chunk`:
    //The `chunk()` method splits the array into chunks of a specified size.
    //Example:
    const arr22 = [1, 2, 3, 4, 5];
    console.log(arr22.chunk(2)); // Output: [[1, 2], [3, 4], [5]]

    //7. `Array.prototype.compact`:
    //The `compact()` method removes falsey values from the array.
    //Example:
    const arr23 = [1, null, 2, undefined, 3, 0];
    console.log(arr23.compact()); // Output: [1, 2, 3]

    //8. `Array.prototype.flatten`:
    //The `flatten()` method flattens the array.
    //Example:
    const arr24 = [1, [2, [3, [4]]]];
    console.log(arr24.flatten()); // Output: [1, 2, 3, 4]

    //9. `Array.prototype.unique`:
    //The `unique()` method removes duplicate elements from the array.
    //Example:
    const arr25 = [1, 2, 2, 3, 3, 3];
    console.log(arr25.unique()); // Output: [1, 2, 3]

    //10. `Array.prototype.sum`:
    //The `sum()` method returns the sum of all elements in the array.
    //Example:
    const arr26 = [1, 2, 3];
    console.log(arr26.sum()); // Output: 6

    //11. `Array.prototype.product`:
    //The `product()` method returns the product of all elements in the array.
    //Example:
    const arr27 = [1, 2, 3];
    console.log(arr27.product()); // Output: 6
    
    //12. `Array.prototype.mean`:
    //The `mean()` method returns the mean of all elements in the array.
    //Example:
    const arr28 = [1, 2, 3];
    console.log(arr28.mean()); // Output: 2

    //13. `Array.prototype.median`:
    //The `median()` method returns the median of all elements in the array.
    //Example:
    const arr29 = [1, 2, 3];
    console.log(arr29.median()); // Output: 2

    //14. `Array.prototype.mode`:
    //The `mode()` method returns the mode of all elements in the array.
    //Example:
    const arr30 = [1, 2, 2, 3, 3, 3];
    console.log(arr30.mode()); // Output: 3

    //15. `Array.prototype.range`:
    //The `range()` method returns an array of numbers within a specified range.
    //Example:
    console.log(Array.range(1, 5)); // Output: [1, 2, 3, 4, 5]

    //16. `Array.prototype.count`:
    //The `count()` method returns the number of occurrences of a specified element in the array.
    //Example:
    const arr31 = [1, 2, 2, 3, 3, 3];
    console.log(arr31.count(2)); // Output: 2

    //17. `Array.prototype.frequency`:
    //The `frequency()` method returns the frequency of each element in the array.
    //Example:
    const arr32 = [1, 2, 2, 3, 3, 3];
    console.log(arr32.frequency()); // Output: { '1': 1, '2': 2, '3': 3 }

    //18. `Array.prototype.duplicates`:
    //The `duplicates()` method returns an array of duplicate elements in the array.
    //Example:
    const arr33 = [1, 2, 2, 3, 3, 3];
    console.log(arr33.duplicates()); // Output: [2, 3]

    //19. `Array.prototype.with`:
    //The `with()` method returns a new array with the specified element added to the array.
    //Example:
    const arr34 = [1, 2, 3];
    console.log(arr34.with(4)); // Output: [1, 2, 3, 4]

    //20. `Array.prototype.toSorted`:
    //The `toSorted()` method returns a new array sorted in ascending order.
    //Example:
    const arr35 = [3, 1, 2];
    console.log(arr35.toSorted()); // Output: [1, 2, 3]

    //21. `Array.prototype.toSpliced`:
    //The `toSpliced()` method returns a new array with the specified elements removed.
    //Example:
    const arr36 = [1, 2, 3];
    console.log(arr36.toSpliced(1, 1)); // Output: [1, 3]

    //22. `Array.prototype.without`:
    //The `without()` method returns a new array with the specified elements removed.
    //Example:
    const arr37 = [1, 2, 3];
    console.log(arr37.without(2)); // Output: [1, 3]

    //23. `String.prototype.toWellFormed`:
    //The `toWellFormed()` method returns a new string with leading and trailing whitespace removed.
    //Example:
    const str6 = '   Hello, World!   ';
    console.log(str6.toWellFormed()); // Output: 'Hello, World!'

    //24. `String.prototype.toPlainText`:
    //The `toPlainText()` method returns a new string with HTML tags removed.
    //Example:
    const str7 = '<h1>Hello, World!</h1>';
    console.log(str7.toPlainText()); // Output: 'Hello, World!'
    //```
    //These are some of the most important features introduced in ES6 and subsequent versions. These features have significantly enhanced the capabilities of JavaScript and made it more readable and maintainable. It's important to keep up with the latest features and best practices to write efficient and modern JavaScript code.


















