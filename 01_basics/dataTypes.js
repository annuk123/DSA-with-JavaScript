//In JavaScript, data types are divided into two main categories: primitive types and non-primitive types (objects).

//Primitive Data Types
//Primitive data types are immutable, meaning they cannot be altered once they are declared.
// 1. Number

//Represents both integer and floating-point numbers.
let num1 = 42;
let num2 = 3.14;

// 2. String
//Represents a sequence of characters.
//Strings can be enclosed within either single quotes, double quotes, or backticks:
let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}!`; // Template literal

// 3. Boolean
//Represents a logical entity and can have two values: true or false.
let isTrue = true;
let isFalse = false;

// 4. Undefined
//Represents a variable that has been declared but not yet assigned a value.
let x;
console.log(x); // undefined

// 5. Null
//Represents an empty value.
//Represents the intentional absence of any object value.
let y = null;
console.log(y); // null

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.


// The difference between undefined and null is that undefined is a type itself (undefined) while null is an object.

//…But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.

// 6. Symbol
//Introduced in ECMAScript 6.
//Represents a unique and immutable primitive value and may be used as an identifier for object properties.
const sym1 = Symbol('foo');
const sym2 = Symbol('foo');
console.log(sym1 === sym2); // false
console.log(sym1 == sym2); // false

//So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
// 7. NaN
//Represents a value that is "Not-a-Number".
let result = 0 / 0;
console.log(result); // NaN
console.log(typeof result); // number
console.log(result === NaN); // false
console.log(isNaN(result)); // true
console.log(Nan + 1); // NaN
console.log(Nan ** 0); // 1
alert( "not a number" / 2 - 1 ); // NaN

// 7. BigInt
//Introduced in ECMAScript 11.
//Represents an arbitrary-precision integer.
let bigInt = 1234567890123456789012345678901234567890n;

//Non-Primitive Data Types
// 1. Object
//Represents a collection of properties, where each property is a key-value pair.
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello');
    }
};
console.log(person.name); // John
person.greet(); // Hello

// 2. Array
//Represents a list of elements.
//A special type of object used to store ordered collections of values.
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Apple

// 3. Function
//A callable object that executes a block of code.
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Outputs: 5

// 4. Date
//Represents a date and time value.
let today = new Date();
console.log(today); // Outputs: current date and time

// 5. RegExp
//Represents regular expressions, which are used for pattern matching within strings.
let re = /ab+c/;
console.log(re.test('abbbc')); // true
/* Regular expression patterns are enclosed within forward slashes (/).
The pattern ab+c consists of three parts:
Let's apply the regular expression /ab+c/ to the string 'abbbc':
First Character 'a': The string contains the character 'a', which matches the first part of the pattern.

One or More 'b's: The string contains three 'b's ('bbb'), which satisfies the b+ part of the pattern (one or more 'b's).

Last Character 'c': The string ends with the character 'c', which matches the last part of the pattern.
*/

// 6. Map
//Represents a collection of key-value pairs.
let map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // John

// 7. Set
//Represents a collection of unique values.
let set = new Set();
set.add(1);
set.add(2);
set.add(1);
console.log(set.size); // 2

// 8. WeakMap
//Similar to Map, but with some key differences:
//Keys must be objects.
//Keys are weakly referenced.
//Not enumerable.
let weakMap = new WeakMap();
let key = {};
weakMap.set(key, 'value');
console.log(weakMap.get(key)); // value

// 9. WeakSet
//Similar to Set, but with some key differences:
//Values must be objects.
//Values are weakly referenced.
//Not enumerable.
let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true

// 10. ArrayBuffer
//Represents a fixed-length raw binary data buffer.
let buffer = new ArrayBuffer(16);
console.log(buffer.byteLength); // 16

// 11. DataView
//Provides a low-level interface for reading and writing multiple number types in an ArrayBuffer.


let view = new DataView(buffer);
view.setInt8(0, 42);
console.log(view.getInt8(0)); // 42

// 12. Int8Array
//Represents an array of 8-bit signed integers.
let int8Array = new Int8Array(buffer);
int8Array[0] = 42;
console.log(int8Array[0]); // 42

// 13. Uint8Array
//Represents an array of 8-bit unsigned integers.
let uint8Array = new Uint8Array(buffer);
uint8Array[0] = 42;
console.log(uint8Array[0]); // 42

// 14. Uint8ClampedArray
//Represents an array of 8-bit unsigned integers clamped to 0-255.
let uint8ClampedArray = new Uint8ClampedArray(buffer);
uint8ClampedArray[0] = 42;
console.log(uint8ClampedArray[0]); // 42

//Special Values
//Infinity
//Represents the mathematical Infinity (∞).
console.log(1 / 0); // Infinity

//-Infinity
//Represents the negative Infinity (-∞).
console.log(-1 / 0); // -Infinity

//NaN
//Represents a value that is "Not-a-Number".
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // Outputs: NaN

//Primitive vs. Non-Primitive Data Types
//Primitive data types are immutable, meaning that they cannot be altered once they are declared.
let str = 'Hello';
str[0] = 'Y';
console.log(str); // Hello

//Non-primitive data types are mutable, meaning that their values can be changed after they are declared.
let arr = ['Apple', 'Banana', 'Cherry'];
arr[0] = 'Orange';
console.log(arr); // ['Orange', 'Banana', 'Cherry']

//Type Conversion
//Implicit Type Conversion
//JavaScript automatically converts the data type of a value to another data type.
let num = 42;
let strs = 'The answer is ' + num;
console.log(strs); // The answer is 42

//Explicit Type Conversion
//JavaScript provides various methods for explicitly converting a value to a specific data type.
//1. Number()
//Converts a value to a number.
let x1 = '42';
let y1 = Number(x);
console.log(y1); // 42

//2. String()
//Converts a value to a string.
let x2 = 42;
let y2 = String(x);
console.log(y2); // '42'

//3. Boolean()
//Converts a value to a boolean.
let x3 = 42;
let y3 = Boolean(x);
console.log(y3); // true

//Type Checking
//1. typeof
//Returns the data type of a value.
console.log(typeof 42); // number
console.log(typeof 'Hello'); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof Symbol('foo')); // symbol
console.log(typeof 1234567890123456789012345678901234567890n); // bigint
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function() {}); // function
console.log(typeof new Date()); // object
console.log(typeof /ab+c/); // object
console.log(typeof new Map()); // object
console.log(typeof new Set()); // object
console.log(typeof new WeakMap()); // object
console.log(typeof new WeakSet()); // object
console.log(typeof new ArrayBuffer(16)); // object
console.log(typeof new DataView(new ArrayBuffer(16))); // object
console.log(typeof new Int8Array(new ArrayBuffer(16))); // object
console.log(typeof new Uint8Array(new ArrayBuffer(16))); // object
console.log(typeof new Uint8ClampedArray(new ArrayBuffer(16))); 






