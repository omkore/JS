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

// let numArr = [4, 9, 16, 25];

// // Performing map method
// function square(element,index,arr){
//     return element*element
// }

// let ans = numArr.map(square)

// console.log(typeof ans);
// console.log(typeof numArr);

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


