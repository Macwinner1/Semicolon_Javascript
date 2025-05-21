let left_operand = 4;
let right_operand = 15;
let operator = '%';
let ans = 0;

if(operator == ('+')){
ans = left_operand + right_operand;
}
else if(operator == ("-")){
ans = right_operand - left_operand;
}
else if(operator == ("*")){
ans = right_operand * left_operand;
}
else if(operator == ("/")){
ans = right_operand - left_operand;
}
else{
ans = NaN;
}


console.log(ans);




