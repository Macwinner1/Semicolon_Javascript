let obj = {
color : "blue",
age : 12, isValid : true
};

for(let key in obj){
 console.log(obj[key])
};

let array = [2, 3, 4, 5, 6];

for(let index in array){
	console.log(array[index])
};

for(let index in array){

	for(let inde of array){
	console.log("this is array indx inner", array[inde])
	console.log("this is array inner", array)
};
console.log("this is array indx outer", array[index])
console.log("this is array outer", array)
};