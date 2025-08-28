let ObjectStudent ={
    name:"John Doe",
    age:22,
    courses:["Math", "Physics", "Computer Science"],
    address:{
        city: "New York",
        zip: 10001
    }
};

console.log(ObjectStudent.name,ObjectStudent.courses[1], ObjectStudent.address.zip);

ObjectStudent.age=23;
ObjectStudent.GPA=3.8;
function getDetails(){
    return (ObjectStudent.name+ " " + "is" + " " + ObjectStudent.age + " " + "years old and has a GPA of" + " " + ObjectStudent.GPA)
}
console.log(getDetails())


