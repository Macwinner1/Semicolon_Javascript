//function declaration.

//greet();

//function greet(){
//let reply = "hello"
//return reply
//};



//function expression.

const greeting = function(){
	let reply = "hello"
	return reply
};

console.log(greeting());

//when i want to pass an argument on my function parament

let userName = "Okafor";
let number = 30;

const greetings = function(numberOne, name){
let reply = number + " " + userName

return reply
};

console.log(greetings());
