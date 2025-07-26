function checkPriceOfPizzaByNameAndQuantity([{}]) {
    const pizzas = {
        ChickenSuya: 15000,
        Pepperoni: 7000,
        Veggie: 10000,
        checkPriceOfPizzaByNameAndQuantity: function(pizzaName, quantity) {
            const price = this[pizzaName];
            if (!price) {
                return "Pizza not found";
            }
            const totalPrice = price * quantity;
            return `The price of ${quantity} ${pizzaName} pizza(s) is $${totalPrice}`;
        }
    };
};

module.exports = checkPriceOfPizzaByNameAndQuantity;

const Person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const Employee = Object.create(Person);
Employee.jobTitle = "Software Developer";
Employee.introduce = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`);
};

let vehicle = {wheels: 4, start: function() { console.log("Vehicle started"); }};
let car = {
    seat : 5,
    start: function() {
        console.log("Car started");
        vehicle.start();
    },
    _proto_: vehicle
    
};
