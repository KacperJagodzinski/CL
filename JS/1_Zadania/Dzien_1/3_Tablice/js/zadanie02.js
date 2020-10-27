function add(array) {
    var sum = 0;
    for (let i = 0; i < array.length ; i++) {
        sum += array[i];
    }
    return sum;
}

function multiply(array) {
    var mul = 1;
    for (let i = 0; i < array.length ; i++) {
        mul *= array[i];
    }

    return mul;
}

console.log(add([1,2,3,4]));
console.log(multiply([1,2,3,4]));