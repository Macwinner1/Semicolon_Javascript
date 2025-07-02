import java.util.Scanner;

public class FiveDigitPalindrome{
public static void main(String[] args){

Scanner input = new Scanner(System.in);

System.out.print("Enter 5 digits numbers: ");
String number = input.nextLine();
String reverse = "";

for(int index = number.length()-1; index >= 0; index--){
reverse += number.charAt(index);
}
if(number.equals(reverse)){
console.log("this is a palindrome number");
}
else{
console.log("this is not a palindrome number");
}
}


}