Array.prototype.myForEach = function(callback){
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index);
    }
}


const arr = [1,2];
arr.myForEach(function(item, index){
    console.log('item', item);
    console.log('index', index);
});

Array.prototype.myMap = function(callback){
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index));
    }
    return newArray;

}

const arr2 = [1,2]

console.log(arr2.myMap(function(item, index){
    return item * 2;
}));

Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue;
    for (let index = 0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index], index);
    }
    return accumulator;
}

const arr3 = [1,2]

console.log(arr3.myReduce(function(accumulator, item, index){
    return accumulator + item;
}, 0));

Array.prototype.myFilter = function(callback){
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index)) {
            newArray.push(this[index]);
        }
    }
    return newArray;
}
const arr4 = [1,2,3,4,5,6,7,8,9,10];

console.log(arr4.myFilter(function(item, index){
    return item % 2 === 0;
}));