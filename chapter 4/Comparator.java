import java.util.Scanner;

public class Comparator{
public static void main(String[] args){

Scanner input = new Scanner(System.in);

int number1 = 0;
int number2 = 0;

for(int count = 1; count <= 2; count++){
System.out.print("Enter two numbers to be compared: ");
number1 = input.nextInt();
number2 = input.nextInt();

if(number1 == number2){
System.out.print("(0) this two numbers are equal.");
break;
}
else{
 if(number1 > number2){
System.out.print("(1) the first numbers is greater.");
break;
}
else{
System.out.print("(-1) the second numbers is greater.");
break;
}
}

}

}


}