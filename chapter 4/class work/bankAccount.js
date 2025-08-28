let bankAccount = {
    owner: "Alice",
    balance: 500
}
function deposit(amount){
    bankAccount.balance += amount;
    return(bankAccount.balance)
}

function withdraw(amount){
    if(bankAccount.balance >= amount){
        bankAccount.balance -= amount;
    }
    return("insuffient balance" + " " + bankAccount.balance);  
}

console.log(deposit(200));
console.log(withdraw(1000));