// String in data type are fundamental data type used to represent textual data. JavaScript Provides a variety of methods and properties to manipulate string data.

// 1. Creating Strings
// Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
// 1.1. String literals
// Single quotes(' ')
//double quotes(" ")
//backticks(Template literals) (` `)

let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${name}!`; // Template literal

// 1.2. String Object
let str4 = new String('Hello');
console.log(str4); // String { 'Hello' }

// 2. String Properties
// 2.1. length
// The length property returns the length of a string:
let txt = 'Hello World!';
console.log(txt.length); // 12

// 3. String Methods
// 3.1. toUpperCase()
// The toUpperCase() method returns the string converted to uppercase:
let txt1 = 'Hello World!';
console.log(txt1.toUpperCase()); // HELLO WORLD!

// 3.2. toLowerCase()
// The toLowerCase() method returns the string converted to lowercase:
let txt2 = 'Hello World!';
console.log(txt2.toLowerCase()); // hello world!

// 3.3. charAt()
// The charAt() method returns the character at a specified index (position) in a string:
let txt3 = 'Hello World!';
console.log(txt3.charAt(0)); // H

// 3.4. charCodeAt()
// The charCodeAt() method returns the Unicode of the character at a specified index in a string:
let txt4 = 'Hello World!';
console.log(txt4.charCodeAt(0)); // 72

// 3.5. concat()
// The concat() method joins two or more strings:
let txt5 = 'Hello';
let txt6 = 'World!';
console.log(txt5.concat(' ', txt6)); // Hello World!

// 3.6. includes()
// The includes() method checks if a string contains a specified string:
let txt7 = 'Hello World!';
console.log(txt7.includes('World')); // true

// 3.7. indexOf()
// The indexOf() method returns the position of the first occurrence of a specified value in a string:
let txt8 = 'Hello World!';
console.log(txt8.indexOf('World')); // 6

// 3.8. lastIndexOf()
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string:
let txt9 = 'Hello World!';
console.log(txt9.lastIndexOf('World')); // 6

// 3.9. match()
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object:
let txt10 = 'Hello World!';
console.log(txt10.match('World')); // [ 'World', index: 6, input: 'Hello World!', groups: undefined ]

// 3.10. repeat()
// The repeat() method returns a new string with a specified number of copies of an existing string:
let txt11 = 'Hello World!';
console.log(txt11.repeat(2)); // Hello World!Hello World!

// 3.11. replace()
// The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced:
let txt12 = 'Hello World!';
console.log(txt12.replace('World', 'Universe')); // Hello Universe!

// 3.12. search()
// The search() method searches a string for a specified value, or regular expression, and returns the position of the match:
let txt13 = 'Hello World!';
console.log(txt13.search('World')); // 6

// 3.13. slice()
// The slice() method extracts a part of a string and returns a new string:
let txt14 = 'Hello World!';
console.log(txt14.slice(0, 5)); // Hello

// 3.14. split()
// The split() method splits a string into an array of substrings:
let txt15 = 'Hello World!';
console.log(txt15.split(' ')); // [ 'Hello', 'World!' ]

// 3.15. substr()
// The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters:
let txt16 = 'Hello World!';
console.log(txt16.substr(6, 5)); // World

// 3.16. substring()
// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string:
let txt17 = 'Hello World!';
console.log(txt17.substring(6, 11)); // World

// 3.17. trim()
// The trim() method removes whitespace from both sides of a string:
let txt18 = ' Hello World! ';
console.log(txt18.trim()); // Hello World!

// 3.18. valueOf()
// The valueOf() method returns the primitive value of a string object:
let txt19 = new String('Hello World!');
console.log(txt19.valueOf()); // Hello World!

// 4. String Template Literals
// Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
let name = 'John';
let age = 30;

let txt20 = `My name is ${name}. I am ${age} years old.`;
console.log(txt20); // My name is John. I am 30 years old.

// 5. Escape Characters
// 5.1. Single Quote
let txt21 = 'It\'s alright.';
console.log(txt21); // It's alright.

// 5.2. Double Quote
let txt22 = "It's alright.";
console.log(txt22); // It's alright.

// 5.3. Backslash
let txt23 = 'The name is \\John\\';
console.log(txt23); // The name is \John\

// 5.4. New Line
let txt24 = 'Hello\nWorld!';
console.log(txt24); // Hello

// 5.5. Carriage Return
let txt25 = 'Hello\rWorld!';
console.log(txt25); // World!

// 5.6. Horizontal Tab
let txt26 = 'Hello\tWorld!';
console.log(txt26); // Hello	World!

// 5.7. Backspace
let txt27 = 'Hello\bWorld!';
console.log(txt27); // HellWorld!

// 5.8. Form Feed
let txt28 = 'Hello\fWorld!';
console.log(txt28); // HelloWorld!

// 5.9 trimStart() / trimLeft()
// The trimStart() method removes whitespace from the beginning of a string:
let txt29 = ' Hello World!';
console.log(txt29.trimStart()); // Hello World!

// 5.10 trimEnd() / trimRight()
// The trimEnd() method removes whitespace from the end of a string:
let txt30 = 'Hello World! ';
console.log(txt30.trimEnd()); // Hello World!

// 5.11. padStart()
// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length:
let txt31 = '5';
console.log(txt31.padStart(4, '0')); // 0005

// 5.12. padEnd()
// The padEnd() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length:
let txt32 = '5';
console.log(txt32.padEnd(4, '0')); // 5000

// 5.13. startsWith()
// The startsWith() method checks if a string starts with a specified string:
let txt33 = 'Hello World!';
console.log(txt33.startsWith('Hello')); // true

// 5.14. endsWith()
// The endsWith() method checks if a string ends with a specified string:
let txt34 = 'Hello World!';
console.log(txt34.endsWith('World!')); // true

// 5.15. fromCharCode()
// The fromCharCode() method converts Unicode values into characters:
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Hello

// 5.16. fromCodePoint()
// The fromCodePoint() method converts Unicode values into characters:
console.log(String.fromCodePoint(72, 101, 108, 108, 111)); // Hello

//4. String Interpolation
// String interpolation is a process substituting values of variables into placeholders in a string. In JavaScript, you can use template literals to achieve string interpolation.

let name1 = 'John';
let age1 = 30;
let txt35 = `My name is ${name1}. I am ${age1} years old.`;
console.log(txt35); // My name is John. I am 30 years old.

//5. String Concatenation
// String concatenation is the process of joining two or more strings together. In JavaScript, you can use the + operator to concatenate strings.

let txt36 = 'Hello';
let txt37 = 'World!';
let txt38 = txt36 + ' ' + txt37;
console.log(txt38); // Hello World!

//6. String Comparison
// JavaScript provides a variety of methods to compare strings. Here are some of the most commonly used methods:
// 6.1. localeCompare()
// The localeCompare() method compares two strings in the current locale:
let txt39 = 'Hello';
let txt40 = 'World!';
console.log(txt39.localeCompare(txt40)); // -1

//7. String Conversion
// JavaScript provides a variety of methods to convert other data types to strings. Here are some of the most commonly used methods:
// 7.1. toString()
// The toString() method converts a number to a string:
let num = 123;
console.log(num.toString()); // 123

// 7.2. String()
// The String() function converts a number to a string:
let num1 = 123;
console.log(String(num1)); // 123

// 7.3. JSON.stringify()
// The JSON.stringify() method converts a JavaScript object or value to a JSON string:
let obj = { name: 'John', age: 30 };
console.log(JSON.stringify(obj)); // {"name":"John","age":30}

//8. String Parsing
// JavaScript provides a variety of methods to parse strings. Here are some of the most commonly used methods:
// 8.1. parseInt()
// The parseInt() function parses a string and returns an integer:
let txt41 = '10';
console.log(parseInt(txt41)); // 10

// 8.2. parseFloat()
// The parseFloat() function parses a string and returns a floating-point number:
let txt42 = '10.5';
console.log(parseFloat(txt42)); // 10.5

// 8.3. JSON.parse()
// The JSON.parse() method parses a JSON string and returns a JavaScript object or value:
let txt43 = '{"name":"John","age":30}';
console.log(JSON.parse(txt43)); // { name: 'John', age: 30 }

//9. String Formatting
// JavaScript provides a variety of methods to format strings. Here are some of the most commonly used methods:
// 9.1. toFixed()
// The toFixed() method formats a number with a specific number of digits after the decimal point:
let num2 = 10.12345;
console.log(num2.toFixed(2)); // 10.12

// 9.2. toPrecision()
// The toPrecision() method formats a number to a specified length:
let num3 = 10.12345;
console.log(num3.toPrecision(2)); // 10

// 9.3. toLocaleString()
// The toLocaleString() method formats a number according to the current locale:
let num4 = 123456.789;
console.log(num4.toLocaleString()); // 123,456.789

// 9.4. toExponential()
// The toExponential() method formats a number in exponential notation:
let num5 = 123456.789;
console.log(num5.toExponential()); // 1.23456789e+5

//10. String Searching
// JavaScript provides a variety of methods to search for strings. Here are some of the most commonly used methods:
// 10.1. indexOf()
// The indexOf() method searches a string for a specified value and returns the position of the match:
let txt44 = 'Hello World!';
console.log(txt44.indexOf('World')); // 6

// 10.2. lastIndexOf()
// The lastIndexOf() method searches a string for a specified value and returns the position of the last match:
let txt45 = 'Hello World!';
console.log(txt45.lastIndexOf('World')); // 6

// 10.3. search()
// The search() method searches a string for a specified value and returns the position of the match:
let txt46 = 'Hello World!';
console.log(txt46.search('World')); // 6

//11. String Replacement
// JavaScript provides a variety of methods to replace strings. Here are some of the most commonly used methods:
// 11.1. replace()
// The replace() method replaces a specified value with another value in a string:
let txt47 = 'Hello World!';
console.log(txt47.replace('World', 'Universe')); // Hello Universe!

// 11.2. replaceAll()
// The replaceAll() method replaces all occurrences of a specified value with another value in a string:
let txt48 = 'Hello World!';
console.log(txt48.replaceAll('World', 'Universe')); // Hello Universe!

//12. String Splitting
// JavaScript provides a variety of methods to split strings. Here are some of the most commonly used methods:
// 12.1. split()
// The split() method splits a string into an array of substrings:
let txt49 = 'Hello World!';
console.log(txt49.split(' ')); // [ 'Hello', 'World!' ]





