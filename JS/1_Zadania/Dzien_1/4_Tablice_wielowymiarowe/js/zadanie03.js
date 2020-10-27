function create2DArray(rows,columns) {
    var count = 0;
    var array = [];
    for (let i = 0; i < rows; i++) {
        var subArray = [];
        for (let j = 0; j < columns ; j++) {
            subArray[j] = count;
            count++;
        }
        array.push(subArray);
    }
    return array;
}

function print2DArray(array) {
    for (let i = 0; i < array.length ; i++) {
        for (let j = 0; j < array[i].length ; j++) {
            console.log(array[i][j]);
        }
    }
}

console.log(print2DArray(create2DArray(2,3)));