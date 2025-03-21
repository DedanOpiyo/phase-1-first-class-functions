/* 
The receivesAFunction function should:

take a callback function as an argument
call the callback function
it doesn't matter what this function returns, so long as it calls the callback function
*/
function receivesAFunction(cbFunction) {
    cbFunction();
    return;
}

receivesAFunction(() => console.log('I am an anonymous-arrow function passed as argument in another, receivesAFunction and called inside it.'))

/* 
The returnsANamedFunction function should:

take no arguments
return a named function
*/
function returnsANamedFunction() {
    return function iamReturnedInAnotherFunction() {
        console.log('I am a function with a name, iamReturnedInAnotherFunction, returned within a high order function, returnsANamedFunction.')
    }
}

returnsANamedFunction() ();

/* 
The returnsAnAnonymousFunction function should:

take no arguments
return an anonymous function
When you're done, remember to commit and push your changes up to GitHub, then submit your work to Canvas using CodeGrade.
*/
function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am an anonymous function, and I am returned by a high order function, returnsAnAnonymousFunction')
    }
}

returnsAnAnonymousFunction() ();