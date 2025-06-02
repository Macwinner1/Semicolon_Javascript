
let count = 0;
let correctCount = 0;

for(; count < 10; count++){
let number1 = (Math.floor(Math.random() * 100));
let number2 = (Math.floor(Math.random() * 100));
if(number1 < number2){
	let temp = number1;
	number1 = number2;
	number2 = temp;
	}

	for(let attempt = 0; attempt < 2; attempt++){
	
	const prompt = require('prompt-sync')();
	let answer = prompt("What is " + number1 + " - " + number2 + " ? ");	

	if(number1 - number2 == answer) {
	console.log("You are correct!\n");
	correctCount++;
	break;
	}
	else{
	console.log("Your answer is wrong. try again!\n");
	}
	}

}

console.log("Correct count is " + correctCount);
