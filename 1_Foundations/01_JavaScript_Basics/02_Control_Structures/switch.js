//switch
//The switch statement is a control structure that allows you to execute different blocks of code based on the value of a variable. It is similar to the if statement, but it provides a more concise way to handle multiple conditions.
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

