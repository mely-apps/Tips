
// ** Tip1: Remove các phần tử trùng lặp
// TODO: solution 1
const array1 = ["code", "mely", "mely", "code"];

const uniqueArray = [];
array1.forEach(element => { 
    if (!uniqueArray.includes(element)) 
    uniqueArray.push( element ); 
});
console.log("uniqueArray:", uniqueArray)// [ 'code', 'mely' ]

// TODO: solution 2
const uniqueArray2 = [...new Set(array1)]
console.log("uniqueArray2:", uniqueArray2) // [ 'code', 'mely' ]
