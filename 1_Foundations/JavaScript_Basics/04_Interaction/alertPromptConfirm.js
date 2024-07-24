//alert
//It is used to show a message to the user. It shows a message and waits for the user to press "OK".
//for example
alert("Hello");

//the mini window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”. It must be closed before you can interact with the page again.

//prompt
//It is used to show a message asking the user to input some text. It returns the text or, if Cancel button or Esc is clicked, null.

//The function prompt accepts two arguments:
//result = prompt(title, [default]);
//title: The text to show the visitor.
//default: An optional second parameter, the initial value for the input field.
//it shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

//the square brackets in the syntax indicate that the parameter is optional, not required.

//for example
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

//the second parameter is optional, but if we don't supply it, Internet Explorer will insert the text "undefined" into the input field. So, it's better to always specify the default value.
//Run this code in Internet Explorer to see the difference:
let test = prompt("Test");
alert(test); // (an empty line) in Internet Explorer

//so for prompt to look good in IE we should always supply the default value.
//for example
let ages = prompt('How old are you?', '');

//In Internet Explorer 6-7, the prompt always returns a string. Other browsers return the value in the format it was entered. For instance, in Chrome, if a visitor enters a number, prompt returns it as a number, but in Internet Explorer, it returns a string.

// in internet explorer(IE): always supply the default value, because if the user clicks "cancel", the result is null. But if the user enters an empty line and clicks OK, the result is an empty string. So, the code like this:

let age1 = prompt('How old are you?', '');
alert(`You are ${age1} years old!`); // You are  years old!


//confirm
//syntax
//result = confirm(question);

//It shows a modal window with a question and two buttons: OK and Cancel.

//The result is true if OK is pressed and false otherwise.
//for example
let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed


//All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.