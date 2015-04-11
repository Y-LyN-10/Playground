// Run with "iojs --harmony_arrow_functions"

'use strict'

// C#-like arrow functions...
// Fat arrow functions have no place for a name, so they will
// always just be plain anonymous Function Expressions. 
let x = (args) => { /* some function gunk */ };
let y = () => { }

let square = (x) => { return x * x };
// When there is only one argument, it's equivalent to:
let square2 = x => x * x;

let func = (x, y) => x + y;
// is effectively equivalent to:
let func2 = function(x, y) {
    return x + y;
}
// Specifying more than one expression
let func3 = (x, y) => {
    // Expression body
    let result = x + y;
    
    console.log('calculated result as', result);

    return result;
}

// If you want to call it, you can with x();
console.log(func(5, 3));  // 8
console.log(func2(5, 3) ===  func3(5,3));

// Fat Arrow functions gain the scope of the environment they’re defined in.
// You can’t change the value of 'this' by using a call() or bind() function.
// http://robcee.net/2013/fat-arrow-functions-in-javascript/

// You can use them recursively!
let fib = (n) => {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)); // 89

// You can’t use fat arrow functions as Generators.
// Deep continuations are not allowed.
// Fat Arrow functions are intended to be super light.

// Because curly braces are used to denote the function’s body,
// an arrow function that wants to return an object literal outside of a
// function body must wrap the literal in parentheses. For example:

let getTempItem = id => ({id: id, name: 'Temp'});
// effictively equivalent to:
let getTempItem2 = function(id) {
    return {
	id: id,
	name: 'Temp'
    }
};

// One of the most common areas of error in JavaScript is the
// binding of 'this' inside of functions. Since the value of 'this'
// can change inside of a single function depending on the context
// in which it’s called, it’s possible to mistakenly affect one
// object when you meant to affect another.
// But... skip that for now.

// 'typeof' operator returns 'function' for arrow functions, but
// arrow functions can't be called with 'new' operator and that's
// a useful difference for type checks.

console.log('--- typeof checks ---');
console.log(typeof func);

try{
    new func();
} catch(ex) {
    console.log(ex); // TypeError
}

// Arrow functions are still instances of Function, so instanceof
// works the same way. The methods call(), apply(), and bind() are
// still usable with arrow functions, though they do not augment
// the value of 'this'.

// Few more examples and usage: ----------------------------------

// return a new array containing the squares of the original
let squares = [1, 2, 3, 4, 5].map(x => x * x);
console.log(squares); // [1, 4, 9, 16, 25]

// capitalize
let shout = ['hey', 'joe', '!'].map(word => word.toUpperCase()).join(' ');
console.log(shout); // HEY JOE !

