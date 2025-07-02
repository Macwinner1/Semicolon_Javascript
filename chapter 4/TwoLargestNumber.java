import java.util.Scanner;
public class TwoLargestNumber{
public static void main(String[] args){
Scanner input = new Scanner(System.in);


console.log("Kindly input 10 intergers to check for largest and 2nd largest: ");
int newNumber1 = input.nextInt();
int newNumber2 = input.nextInt();
int newNumber3 = input.nextInt();
int newNumber4 = input.nextInt();
int newNumber5 = input.nextInt();
int newNumber6 = input.nextInt();
int newNumber7 = input.nextInt();
int newNumber8 = input.nextInt();
int newNumber9 = input.nextInt();
int newNumber10 = input.nextInt();

int largest = 0;
int secondLargest = 0;

if(newNumber1 >= largest){
largest = newNumber1;
secondLargest = largest;
}
	else if(newNumber1 < largest && newNumber1 >= secondLargest){
	secondLargest = newNumber1;
	}

if(newNumber2 >= largest){
largest = newNumber2;
secondLargest = largest;
}
	else if(newNumber2 < largest && newNumber2 >= secondLargest){
	secondLargest = newNumber2;
	}

if(newNumber3 >= largest){
largest = newNumber3;
secondLargest = largest;
}
	else if(newNumber3 < largest && newNumber3 >= secondLargest){
	secondLargest = newNumber3;
	}


if(newNumber4 >= largest){
largest = newNumber4;
secondLargest = largest;
}
	else if(newNumber4 < largest && newNumber4 >= secondLargest){
	secondLargest = newNumber4;
	}

if(newNumber5 >= largest){
largest = newNumber5;
secondLargest = largest;
}
	else if(newNumber5 < largest && newNumber5 >= secondLargest){
	secondLargest = newNumber5;
	}

if(newNumber6 >= largest){
largest = newNumber6;
secondLargest = largest;
}
	else if(newNumber6 < largest && newNumber6 >= secondLargest){
	secondLargest = newNumber6;
	}

if(newNumber7 >= largest){
largest = newNumber7;
secondLargest = largest;
}
	else if(newNumber7 < largest && newNumber7 >= secondLargest){
	secondLargest = newNumber7;
	}

if(newNumber8 >= largest){
largest = newNumber8;
secondLargest = largest;
}
	else if(newNumber8 < largest && newNumber8 >= secondLargest){
	secondLargest = newNumber8;
	}

if(newNumber9 >= largest){
largest = newNumber9;
secondLargest = largest;
}
	else if(newNumber9 < largest && newNumber9 >= secondLargest){
	secondLargest = newNumber9;
	}

if(newNumber10 >= largest){
largest = newNumber10;
secondLargest = largest;
}
	else if(newNumber10 < largest && newNumber10 >= secondLargest){
	secondLargest = newNumber10;
	}

console.log("Here is your largest number: " + largest);
console.log("Here is your second largest number: " + secondLargest);


}

}