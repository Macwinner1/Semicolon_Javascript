let numberOne = 3;

function getProduct(number){
 let numberTwo = 2;
 function multiply(value){
  let product = value * number
return product
};
return multiply(numberTwo)
};

console.log(getProduct(numberOne))

//or we can refactor this below

let newNumber = 6;

function getAnswer(number){
 let numberTwo = 3;
 function multiply(){
  let product = numberTwo * number
return product
};
return multiply();
};

console.log(getAnswer(newNumber));

//or this one with 3 value

let newNumber1 = 6;
let newNumber2 = 3;

function getAnswers(number, secondNumber){
 let numberThree = 3;
 function multiply(){
  let product = numberThree * number * secondNumber
return product
};
return multiply();
};
let result = getAnswers(newNumber1, newNumber2); 
console.log(result);

