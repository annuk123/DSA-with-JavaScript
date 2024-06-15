//for Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Outputs:
// 0
// 1
// 2
// 3
// 4

// In the example above, the for loop iterates over the values of the variable i from 0 to 4 (inclusive) and logs each value to the console.

//for...in Loop
//The for...in loop iterates over the properties of an object.

const person = {
    name: 'John',
    age: 30
};

for (let key in person) {
    console.log(key, person[key]);
}

// Outputs:
// name John
// age 30

// In the example above, the for...in loop iterates over the keys of the person object and logs each key-value pair to the console.

//for...of Loop

//The for...of loop iterates over the values of an iterable object (like an array).

const fruits = ['Apple', 'Banana', 'Cherry'];

for (let fruit of fruits) {
    console.log(fruit);
}

// Outputs:
// Apple
// Banana
// Cherry

// In the example above, the for...of loop iterates over the values of the fruits array and logs each value to the console.

//while
//The while loop repeats a block of code as long as a specified condition is true.

let count1 = 0;

while (count1 < 5) {
    console.log(count1);
    count1++;
}

// Outputs:
// 0
// 1
// 2
// 3
// 4

// In the example above, the while loop repeats the block of code as long as the count variable is less than 5. The count variable is incremented by 1 in each iteration.

//do...while Loop
//The do...while loop is similar to the while loop, but it executes the block of code once before checking the condition.

let count = 0;

do {
    console.log(count);
    count++;
} while (count < 5);

// Outputs:
// 0
// 1
// 2
// 3
// 4

// In the example above, the do...while loop executes the block of code once before checking the condition. The loop continues to execute as long as the count variable is less than 5.

