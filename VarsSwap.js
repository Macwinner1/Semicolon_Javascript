let var1 = 10;
let var2 = 15;
let var3 = 20;
let temp;
temp = var1;
var1 = var2;
var2 = var3;
var3 = temp;

console.log(var1);
console.log(var2);
console.log(var3);

let person = {
name : "chinede",
age : 16,
gender : "sheMale",

password : "12345"
};

password : "newPassword1234";
person.color = "black";

let value = Object.keys(person);
let item = Object.values(person);
let valueItem = Object.entries(person);

console.log(item[0]);
console.log(value[0]);
console.log(valueItem[0]);

const prompt = require("prompt-sync")();

let score = prompt("What is your test score?: ");

console.log(score);
















