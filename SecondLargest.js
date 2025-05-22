let numbers = [20, 18, 19, 6, 14, 5, 7, 12];

let secondLarge = numbers[0];
let largest = 0;

for(let index = 0; index < numbers.length; index++){

for(let item = index; item < numbers.length; item++){
	if(numbers[index] > largest){
	secondLarge = largest;
	largest = numbers[index];
	}
	else if(numbers[index] < largest && numbers[index] > secondLarge){
	secondLarge = numbers[index];
	}
}

}

console.log("This is the 2nd largest number: " + secondLarge);

