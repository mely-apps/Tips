
// ** Tip1: Remove các phần tử trùng lặp
// TODO: solution 1
const array1 = ["apple", "banana", "orange", "apple"];

const uniqueArray = [];
array1.forEach(element => { 
    if (!uniqueArray.includes(element)) 
    uniqueArray.push( element ); 
});
console.log("uniqueArray:", uniqueArray)// [ 'apple', 'banana', 'orange' ]

// TODO: solution 2
const uniqueArray2 = [...new Set(array1)]
console.log("uniqueArray2:", uniqueArray2) // [ 'apple', 'banana', 'orange' ]
