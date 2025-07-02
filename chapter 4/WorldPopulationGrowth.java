import java.util.Scanner;
public class WorldPopulationGrowth{
public static void main(String[] args){

Scanner input = new Scanner(System.in);

console.log("Enter current world population: ");
double currentPopulation = input.nextDouble();

console.log("Enter current world growth rate: ");
double growthRate = input.nextDouble();
int years = 2025;


for(int count = 1; count <= 75; count++){
double growth = currentPopulation * growthRate;
double difference = currentPopulation - growth;
currentPopulation += growth;
years++;

console.log("%15d%15f%15f", years, currentPopulation, difference);
}

}

}