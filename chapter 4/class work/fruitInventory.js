const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

let answer = 0
for(let value in inventory){
    answer += inventory[value];
}

console.log(answer)