README.md

Objective
Write two functions defined within a module. Use three different module techniques: object literal, the module pattern, and the revealing module pattern.

The Repeater module should contain the following two methods:

repeatString(str, n) - Returns a string repeated n times:
e.g. repeatString('cat', 3) should return 'catcatcat'.
repeatFunction(f, n) - Calls a function n times.
e.g. repeatFunction(function() { console.log('hi'); }, 3) should print out 'hi' to the console three times in a row.


Requirements
Part I: Organizing code with object literals

Define an object literal with two properties: repeatString and repeatFunction:
var Repeater = {
 repeatString: ...,
 repeatFunction: ...
};
Set up a Jasmine unit test with the below test spec. Follow the instructions in Test Drive 102 if you need a reminder on how to create unit tests with Jasmine.
describe('repeatString', function() {
 it('should return a string repeated n times', function() {
  expect(Repeater.repeatString('cat', 3)).toEqual('catcatcat');
 });
});

describe('repeatFunction', function() {
 it('should call a function n times', function() {
  var str = 'oh';
  var write = function() { str += 'hi'; };
  Repeater.repeatFunction(write, 3);
  expect(str).toEqual('ohhihihi');
 });
});
Implement repeatString and repeatFunction to make the tests pass (test driven development).
Congratulations! Since your functions are defined inside the Repeater object, they are self-contained and won't conflict with global functions with the same name. This demonstrates the principle of encapsulation; your code is grouped together and separated from other code within your project.

Part II: Organizing code with the module pattern

Define an Immediately Invoked Function Expression (IIFE)
var Repeater = (function() {
 ...
});
Inside the IIFE, return an object literal with repeatString and repeatFunction defined.
Refresh your test runner and ensure the tests still pass.
Create a new function repeatMore which is the same as repeatString but only takes a single argument (the string) and repeats the string once the first time it is called, twice the second time it is called, etc. You will need to declare a local variable count which keeps track of how many times you have called the function.
e.g.
Repeater.repeatMore('cat'); // cat
Repeater.repeatMore('dog'); // dogdog
Repeater.repeatMore('bat'); // batbatbat
Repeater.repeatMore('lion'); // lionlionlionlion
Repeater.repeatMore('lemur'); // lemurlemurlemurlemurlemur
Refresh your test runner and ensure the tests still pass.
Add the following code to your test spec to test that the local variable inside your IIFE is not accessible in the global scope. (If you didn't name your variable count, change the test below to use your variable name.)
expect(typeof count).toBe('undefined');
Refresh your test runner and ensure the tests still pass.
It makes sense to keep variables private to your module (i.e. not accessible outside your module). The public interface (the variables or functions that users of your module access) is thus cleaner, easier to understand, and less susceptible to conflicts. This is what the module pattern accomplishes through the handy scoping effects of the IIFE.

Part III: Organizing code with the revealing module pattern

Rewrite the code from Part II to use the Revealing Module Pattern as explained in the lecture and in Essential JS Design Patterns.
Refresh your test runner and ensure the tests still pass.
Create a new function on the module called repeatFunctionTwice which, unsurprisingly, calls repeatFunction twice.