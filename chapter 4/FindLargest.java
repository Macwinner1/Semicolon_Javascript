import java.util.Scanner;

public class FindLargest{
public static void main(String[] args){

Scanner input = new Scanner(System.in);

console.log("Enter 10 numbers: ");
int number = input.nextInt();
int largest = number;

for(int counter = 1; counter < 10; counter++){
number = input.nextInt();

if(number > largest){
largest = number;
}


}

console.log("This is the largest number: " + largest);


}


}