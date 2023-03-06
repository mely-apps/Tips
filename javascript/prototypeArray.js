
// For each element - Code Mely
const arr  = [1,2,3,4,5,6,7,8,9];

arr.forEach((value)=>{
    console.log('value', value);
})


// Filter - Code Mely

const arr1 = [1,2,3,4,5,6,7,8,9];

const arr2 = arr1.filter((value)=>{
    return value % 2 === 0;
});

console.log('arr2', arr2);


// Map - Code Mely

const arr3 = [1,2,3,4,5,6,7,8,9];

const arr4 = arr3.map((value)=>{
    return value * 2;
});

console.log('arr4', arr4);


// Reduce - Code Mely

const arr5 = [1,2,3,4,5,6,7,8,9];

const arr6 = arr5.reduce((acc, value)=>{
    return acc + value;
}, 0);



console.log('arr6', arr6);


// ReduceRight

const arr7 = [1,2,3,4,5,6,7,8,9];

const arr8 = arr7.reduceRight((acc, value)=>{
    return acc + value;
}, 0);


console.log('arr8', arr8);


// Find - Code Mely

const arr9 = [1,2,3,4,5,6,7,8,9];

const arr10 = arr9.find((value)=>{
    return value % 2 === 0;
});

console.log('arr10', arr10);


// FindIndex

const arr11 = [1,2,3,4,5,6,7,8,9];

const arr12 = arr11.findIndex((value)=>{
    return value % 2 === 0;
});

console.log('arr12', arr12);


// LastIndexOf

const arr13 = [1,2,3,4,5,6,7,8,9];

const arr14 = arr13.lastIndexOf((value)=>{
    return value % 2 === 0;
});

console.log('arr14', arr14);


// includes

const arr15 = [1,2,3,4,5,6,7,8,9];

const arr16 = arr15.includes(5);

console.log('arr16', arr16);


// join

const arr17 = [1,2,3,4,5,6,7,8,9];

const arr18 = arr17.join(',');

console.log('arr18', arr18);


// sort

const arr19 = [1,2,3,4,5,6,7,8,9];

const arr20 = arr19.sort();

console.log('arr20', arr20);


// reverse

const arr21 = [1,2,3,4,5,6,7,8,9];

const arr22 = arr21.reverse();

console.log('arr22', arr22);

// every

const arr23 = [1,2,3,4,5,6,7,8,9];

const arr24 = arr23.every((value)=>{
    return value % 2 === 0;
});