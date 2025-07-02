import java.util.Scanner;

public class BinaryNumber{
public static void main(String[] args){

Scanner input = new Scanner(System.in);

System.out.print("Enter your number: ");
int number = input.nextInt();

StringBuilder value = new StringBuilder();

while(number > 0){
int me = number % 2;
value.append(me);
number = number / 2;

}
System.out.println(value.rever());


}

}