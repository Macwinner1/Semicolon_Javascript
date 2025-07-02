import java.util.Scanner;

public class TaxCalculator{
public static void main(String[] args){

Scanner input = new Scanner(System.in);

double total = 0;
String name1 = "";
int  amount1 = 0;

String name2 = "";
int  amount2 = 0;

String name3 = "";
int  amount3 = 0;

int amount = 0;
double total2 = 0;
double total3 = 0;



for(int counter = 1; counter <= 3; counter++){
console.log("Enter Citizen Name:");
String name = input.nextLine();

console.log("Enter Citizen earning:");
amount = input.nextInt();

if(counter == 1){
name1 = name;
amount1 = amount;
}
else{
if(amount > 30000){
total = amount / 0.20;
console.log("This is the Citizen Total Tax: " + name1 + amount1 + total);
}
if(amount <= 30000){
total = amount / 0.15;
console.log("This is the Citizen Total Tax: " + name1 + amount1 + total);
}
}

if(counter == 2){
name2 = name;
amount2 = amount;
}
else{
if(amount > 30000){
total2 = amount / 0.20;
console.log("This is the Citizen Total Tax: " + name2 + amount2 + total2);
}
if(amount <= 30000){
total2 = amount / 0.15;
console.log("This is the Citizen Total Tax: " + name2 + amount2 + total2);
}
}


if(counter == 3){
name3 = name;
amount3 = amount;
}
else{
if(amount > 30000){
total3 = amount / 0.20;
console.log("This is the Citizen Total Tax: " + name3 + amount3 + total3);
}
if(amount <= 30000){
total3 = amount / 0.15;
console.log("This is the Citizen Total Tax: " + name3 + amount3 + total3);
}
}


}

}

}