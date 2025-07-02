function smallestDigitToGetProduct(number){
    let result = 0;
    let output = "";
    for(index = 0; index < 10; index++){
        for(count = 0; count < 10; count++){
            result = index * count;
            if(result == number) {
                let value1 = index.toString();
                let value2 = count.toString();
                output = value2 + value1;
            break;
            }
        }
    }
    return output;
}

console.log(smallestDigitToGetProduct(21))