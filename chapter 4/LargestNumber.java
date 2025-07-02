import java.util.Scanner;
public class LargestNumber{
public static void main(String[] args){
Scanner input = new Scanner(System.in);
int number = 0;
int largest = 0;

console.log("Enter any 10 intergers to get the largest number: ");

for(int counter = 1; counter <= 10; counter++){
number = input.nextInt();
	if(number >= largest){
	largest = number;
	}
}
console.log("Here is the largest number: " + largest);
}


}