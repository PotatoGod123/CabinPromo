/* This script displays a greeting to user based on their current time.*/


var today = new Date();            //Create a new object
var hourNow = today.getHours();    //Find the current hour
var greeting;
// Displays the appropriate greeting based on the current time
if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');


