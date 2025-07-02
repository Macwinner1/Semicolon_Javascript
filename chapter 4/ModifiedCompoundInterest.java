public class ModifiedCompoundInterest{
public static void main(String[] args){

double principal = 1000.0;
double rate5 = 0.05;
double rate6 = 0.06;
double rate7 = 0.07;
double rate8 = 0.08;
double rate9 = 0.09;
double rate10 = 0.10;

console.log("\n%-10s%-10s%n", "Years", "Interest Rate of 5%");

for(int year = 1; year <= 10; year++){

double amount = principal * Math.pow(1.0 + rate5, year);
console.log("%-10d%,-10.2f%n", year, amount);
}

console.log("\n%-10s%-10s%n", "Years", "Interest Rate of 6%");
for(int year = 1; year <= 10; year++){
double amount2 = principal * Math.pow(1.0 + rate6, year);
System.out.printf("%-10d%,-10.2f%n", year, amount2);
}

console.log("\n%-10s%-10s%n", "Years", "Interest Rate of 7%");
for(int year = 1; year <= 10; year++){
double amount3 = principal * Math.pow(1.0 + rate7, year);
console.log("%-10d%,-10.2f%n", year, amount3);
}

console.log("\n%-10s%-10s%n%n", "Years", "Interest Rate of 8%");
for(int year = 1; year <= 10; year++){
double amount4 = principal * Math.pow(1.0 + rate8, year);
console.log("%-10d%,-10.2f%n", year, amount4);
}

console.log("\n%-10s%-10s%n", "Years", "Interest Rate of 9%");
for(int year = 1; year <= 10; year++){
double amount5 = principal * Math.pow(1.0 + rate9, year);
console.log("%-10d%,-10.2f%n", year, amount5);
}

console.log("\n%-10s%-10s%n", "Years", "Interest Rate of 10%");
for(int year = 1; year <= 10; year++){
double amount6 = principal * Math.pow(1.0 + rate10, year);
console.log("%-10d%,-10.2f%n", year, amount6);
}

}


}