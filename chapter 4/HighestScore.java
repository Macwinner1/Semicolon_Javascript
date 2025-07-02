//prompt user to enter number of students
//prompt user to enter student names and followed by the student score depending the number of students entered
//use this collected input to compare them to know the highest score 
//display the student name with the highest score.

import java.util.Scanner;

public class HighestScore{
public static void main(String[] args){
Scanner input = new Scanner(System.in);

int largest = 0;
int count = 1;
String name = " ";

console.log("Enter the number of Students: ");
int studentNumber = input.nextInt();

for(; count <= studentNumber; count++){

console.log("Enter the Student Score: ");
int studentScore = input.nextInt();

if(studentScore > largest){
largest = studentScore;

console.log("Enter the Student name: ");
String studentName = input.next();
name = studentName;
}

}

console.log("This is the student name:" + name);
console.log("This is the highest score:" + largest);

}

}