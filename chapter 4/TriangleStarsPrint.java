public class TriangleStarsPrint{
public static void main(String[] args){

int max = 10;
char star = '*';

for(int row = 1; row <= max; row++){

for(int col = 1; col <= row; col++){

console.log(star);
}
console.log(" ");

}



for(int row = 1; row <= max; row++){

for(int col = row; col <= max; col++){

console.log(" ");
}
for(int col2 = 1; col2 < row; col2++){

console.log(star);

}
console.log(" ");

}
console.log(" ");


for(int row = 1; row <= max; row++){

for(int col = row; col <= max; col++){

console.log(star);
}
for(int col2 = 1; col2 < row; col2++){

console.log(" ");

}
console.log(" ");

}

for(int row = 1; row <= max; row++){

for(int col = 1; col < row; col++){

console.log(" ");
}
for(int col2 = row; col2 < max; col2++){

console.log(star);
}

console.log(" ");

}




}

}