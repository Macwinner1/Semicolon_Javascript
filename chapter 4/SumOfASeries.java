public class SumOfASeries{
public static void main(String[] args){

long number = 1;
long sum = 0;

console.log("%-10s%-10s%n", "Value", "Total");

while(number <= 100){
sum += number;
console.log("%-10d%-10d%n", number, sum);

number++;
}


}


}