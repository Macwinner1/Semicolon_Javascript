
import java.util.Scanner;

public class HighestSecondScore{
public static void main(String[] args){
Scanner input = new Scanner(System.in);

int largest = 0;
int count = 1;
String name = " ";
String secondName = " ";
int secondLargest = 0;

console.log("Enter the number of Students: ");
int studentNumber = input.nextInt();

for(; count <= studentNumber; count++){

console.log("Enter the Student Score: ");
int studentScore = input.nextInt();

if(studentScore == largest){
secondLargest = largest;
largest = studentScore;
}

if(studentScore > largest){
secondLargest = largest;
largest = studentScore;
}


console.log("Enter the Student name: ");
String studentName = input.next();

if(studentScore == largest){
secondName = name;
name = studentName;
}

if(studentScore > largest){
secondName = name;
name = studentName;
}


}

console.log("This is the student name:" + name);
console.log("This is the highest score:" + largest);

console.log("This is the student name:" + secondName);
console.log("This is the Second highest score:" + secondLargest);

}

}