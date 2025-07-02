function armstrongNumbers(numbers){
    let stable = numbers;
    let numbersLength = numbers.toString().length;
    let result = 0;
    for(let count = 0; count < numbersLength; count++){
        let value = numbers % 10;
        numbers = Math.floor(numbers / 10);
        let multiply = Math.pow(value, numbersLength);
        result += multiply;
    }
    if(result === stable) return true;
    return false;
}

console.log(armstrongNumbers(93083));