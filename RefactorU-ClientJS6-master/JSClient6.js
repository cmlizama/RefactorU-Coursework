// Question 1. Rewrite the function using the ternary operator

var pluralize = function (word, number) {
 if(number === 1) {
  return word;
 }
 else {
  return word + "s";
 }
};

// Rewritten function below

var word = prompt("Input a word");
var number = prompt("Input a number") ;

var pluralize_the_remix = (number===1) ? word : word + "s";



//Question 2 Rewrite the "victim" function to be more functional
var victim = {};

var getVictimInfo = function() {
 victim.name = prompt("Please enter your name:");
 victim.phone = prompt("Please enter your phone number:");
 victim.street = prompt("Please enter your street:");
};

alert('Thank you! Victim entered: \n' + 
 victim.name + ", " + 
 victim.phone + ", " + 
 victim.street);

//rewritten function below:

var details = prompt("enter victim info");

var str = 'Thank you! Victim entered: \n';

var formatMessage = str + details;

var output = function(x){
    alert(x);
};

console.log(output(formatMessage));







// 3. Write a function which removes falsey values from an array. A falsey value is one which evaluates to false when type coerced, which are the following: 0, null, "" (empty string), undefined, NaN, false. Write two versions of the function: one that uses side effects and one that is pure.

var testArray = [0, true, null, " ", undefined, NaN, false, true];
var testArray2 = [true, true];
var testArray3 = [NaN, null];

var impurePurge = function(arr) {
    for (var i=0; i < arr.length; i++) {
        if ((arr[i]) !== true) {
           arr.splice(i,1);
        }
    }
    return arr;
};

console.log(impurePurge(testArray));
//console.log(impurePurge(testArray2));
console.log(impurePurge(testArray3));

var purePurge = function(arr) {
        truthy_arr = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i])===true) truthy_arr.push(arr[i]);
    }
    return truthy_arr;
};

console.log(purePurge(testArray));
console.log(purePurge(testArray2));

// ternary version of an alternate testing functionality
//this test worked but I couldn't figure out how to integrate it
// (x !== true) ? alert("falsey") : alert("true enough");



