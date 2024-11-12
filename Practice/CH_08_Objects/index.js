// A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.

// By object literal

let student = {
    firstName:"Jhon",
    "lastName":"Doe",
    age:21,
    phone:"+9134596543",
    // "student name":firstName+" "+lastName,
}

// Accessing Obj 
console.log(student);//print entire obj
console.log(typeof student);//print entire obj
console.log(student["lastName"]);
console.log(student.phone);
// console.log(student["student name"]);


// Create an Object
const person = new Object();

person.name="Robert Snow"
person.age = 30

console.log(person);
console.log(typeof(person));        


// Object Constructor Functions

function car(name,model,year){
this.name=name
this.model=model
this.year=year
this.display = display

function display(){
    console.log("Car Name : ",this.name);
    console.log("Car Model : ",this.model);
    console.log("Car Year : ",this.year);
    
}
}


let car1 = new car("BMW","X-Series",2015)

// console.log(car1);
// console.log(typeof car1);
// console.log(car1.year);

car1.display()