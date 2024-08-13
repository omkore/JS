let age = 19;

// Simple If statement 
// if(age>18){
//     console.log("Your 18+");
// }


// If else 

// let num=25;

// if((num%2)==0){
//     console.log("Number is even");
// }else{
//     console.log("Number is odd");
// }



// If else if ladder 

let mark =10;

if(mark>90 && mark<100){
    console.log("A+ Grade");
}
else if(mark>80 && mark<=90){
    console.log("A Grade");
}
else if(mark>70 && mark<=80){
    console.log("B Grade");
}
else if(mark>60 &&  mark<=70){
    console.log("C Grade");
}
else if(mark>50 &&  mark<=60){
    console.log("D Grade");
}

else if(mark>35 && mark<=50){
    console.log("E Grade");
    
}
else if(mark<35 && mark>0){
    console.log("you Failed ");
    
}
else{
    console.log("Wrong marks entered");
    
}


// Nested If else 


age = 10;
let weight = 30;


if(age>18){
    if(weight>45){
        console.log("can donate Blood");   
    }
    else{
        console.log("Cannot donate blood due to weight criteria");
        
    }
}
else{
    console.log("Cannot donate blood due to age criteria");

}