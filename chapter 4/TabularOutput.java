public class TabularOutput{
public static void main(String[] args){

console.log("%-10s%-10s%-10s%-10s\n", "N", "N^2", "N^3", "N^4");

for(int count = 1; count <= 5; count++){
int number2 = count * count;
int number3 = count * count * count;
int number4 = count * count * count * count;

console.log("%-10d%-10d%-10d%-10d\n", count, number2, number3, number4);
}

}

} 