// Some() 

// function divisibleBy2(element,index,array){
//     return element%2==0
// }

// let arr = [11,31,5,1,31,5]

// let ans = arr.some(divisibleBy2);
// console.log(ans);

//reduce()**
// let numbers = [88, 50, 25, 10];

// // Performing reduce method
// let sub = numbers.reduce(geeks);

// function geeks(total, num,index,arr) {
//     return total + num;
// }

// console.log(sub);



// // Map() **

let numArr = [4, 9, 16, 25];

// Performing map method
function square(element,index,arr){
    return element*element
}

let ans = numArr.map(square)

console.log( ans);
console.log( numArr);

// every()
// function ispositive(element, index, array) {
//     return element > 0;
// }

// function func() {
//     let arr = [11, -89, 23, 7, 98];

//     // Check for positive number
//     let value = arr.every(ispositive);

//     console.log(value);
// }

// func();


//flat()**

// let arr = [[0,2,[1,2,34,4],5,6],[1,2,3,4,,6]]

// let newArr = arr.flat(2)
// console.log(arr);



//flatmap()
// const myAwesomeArray = [
//     [1], [2], [3], [4], [5]
// ];

// let geeks = myAwesomeArray.flatMap(
//     (arr) => arr * 10
// );
// console.log(geeks);


//filter()



// function filterPositive(element,index,arr){
//     return element > 0
// }


// let ans = [1,-30,45,-4,34,5].filter(filterPositive)

// console.log( ans);



// findIndex()

// let array = [10, 20, 3, 110, 60];

// function finding_index(element) {
//     return element > 25;
// }

// console.log(array
//     .findIndex(finding_index)
// );

// find()

// let ans = [1,2,3,4,5,6,7].find(function(element){
//     return element > 4
// })

// console.log(ans);


//fll()

// let arr = [1, 23, 46, 58];

// // Here value = 87, start index = 1 and
// // and last index = 3
// arr.fill(87, 1, 3);
// console.log(arr);



// let a = new Array(10).fill(0)
// console.log(a);



// Array forEach() Method


// let users = ["jhon","Jane","harry"]

// let CapitalUsers = users.forEach(function(element){
//      console.log(element.toUpperCase())
// })

// console.log(CapitalUsers);


// Array sort method
let numbers = [88, 50, 25, 10];

// let sub = numbers.sort(geeks);

// function geeks(a, b) {
//     return a - b;
// }

// console.log(sub);

// console.log(Array.isArray(numbers));



// copyWithin()
// let array = [1,2,3,4,5];

// // placing at index position 0 the element
// // between index 3 and 6
// console.log("Array " + array.copyWithin(1, 1, 4));


let array = [1, 2, 3, 4, 5, 6, 7];

// Placing at index position 0 the
// Element between index 4 and 5
// console.log("Array " + array.copyWithin(0, 4, 6));


