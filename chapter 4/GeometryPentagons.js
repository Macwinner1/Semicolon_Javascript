
console.log("Enter the length from the center to a vertex: ");
double length = input.nextDouble();

double side = 2 * length * Math.sin(Math.PI / 5); 
double area = (5 * Math.pow(side, 2)) / (4 * Math.tan(Math.PI / 5));


console.log("The area of the pentagon is %.2f ", area);

}


}