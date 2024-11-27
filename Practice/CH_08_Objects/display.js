// student={
//     name:"jhon Doe",
//     age:22,
//     marks:90.5,
//     gender:"male"
// }

// console.log(student);

// create an array 

// let arr1 = Object.keys(student)
// let arr2 = Object.values(student)

// console.log(arr);

// for of loop 

// for(let [i,j] of Object.entries(student)){
//     console.log(i.toUpperCase(),j);
    
// }


// for in loop 
// for(let i in student){
//     console.log(student[i]);
    
// }

student={
    name:"jhon Doe",
    age:22,
    marks:90.5,
    gender:"male"
}
let jsonData = JSON.stringify(student)
console.log(typeof jsonData);
let data = JSON.parse(jsonData)
console.log(data);
console.log(typeof data);