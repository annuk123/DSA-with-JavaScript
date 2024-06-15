//switch
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); // Wednesday
// Outputs: Wednesday
// In the example above, the switch statement evaluates the value of the day variable and assigns the corresponding day name to the dayName variable. Since the value of day is 3, the output is Wednesday.

// The switch statement is a powerful tool for controlling the flow of execution in JavaScript programs. It allows you to execute different blocks of code based on the value of a variable, making your programs more flexible and responsive.*/
