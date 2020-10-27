function checkArray(array) {
    var newArr =[];
    for (let i = 0; i < array.length ; i++) {
        var valid = true;
        for (let j = 0; j < array[i].length ; j++) {
            if(array[i][j] % 2 !== 0) {
                valid = false;
            }
        }
        newArr.push(valid);
    }
    return newArr;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];


console.log(checkArray(arr));