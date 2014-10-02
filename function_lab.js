// 1.) Write a function that prints "Hello, World!" to the console when called.

var hey = function(){
	console.log("Hello, World!");
};

hey();

// 2.) Write a function that takes the name of a person as an argument, and says "Hello" to that person in the console.

var whatup = function(name){
	console.log("Hello " + name);
};

whatup("Switch");

// 3.) If your previous function did not use the return keyword, modify it so that it does. It should return the message to be logged instead of logging it directly. Store the result in a variable and log that instead.

var greeting = function(name){
	return "Hello " + name;
};
var hi = greeting("Switch");
console.log(hi);


// 4.) Write a function add() that takes two numbers as arguments and returns the sum.

var add = function(a,b){
	return a + b;
};
var numbers = add(7, 4);
console.log(numbers);

// 4. a) Write a function sub() take takes two numbers as arguments and returns the difference.

var sub = function(a,b){
	return a - b;
};
var numbers = sub(31, 20);

// 4. b) Write a function combine() that takes three parameters. The first two are numbers and the last is a boolean. If the boolean is true, return the sum of the first two arguments, otherwise, return the difference. Hint: use add() and sub() from within combine().

var combine = function(a,b,bool){
	if (bool === true) {
		return a + b;
	} else {
		return a - b;
	}
};

// 5.) Write a function that prints out how many times it has been called.
var called = 0;
function myFunction() {
    called++;
    return( "I have been called " + called + " times" );
}
myFunction();

// 6.) Write a function to return true or false if a number passed in is a prime number.

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}