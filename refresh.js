
function largestWord(words) {
    let largest = "";
    let currentWord = "";
    
    for (let index = 0; index < words.length; index++) {
        if (words[index] === " ") {
            if (currentWord.length > largest.length) {
                largest = currentWord;
            }
            currentWord = "";
        } else {
            currentWord += words[index];
        }
    }
    if (currentWord.length > largest.length) {
        largest = currentWord;
    }
    
    return largest;
}


let words = "Ade is  Semicolonssss going to ";
console.log(largestWord(words));