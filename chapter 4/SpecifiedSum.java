import java.util.Scanner;

public class SpecifiedSum{
public static void main(String[] args){

Scanner input = new Scanner(System.in);

console.log("Enter any number");
int number = input.nextInt();
int result = 0;

while(number != -1){
int measure = number;

result += number;

number = input.nextInt();

if(number == result){
System.out.println("Done");
System.out.println(result);
break;
}
else{
if(number > result)
console.log("Done");
console.log(result);
break;
}

}



}

}