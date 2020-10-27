function print2DArray(array) {
    for (let i = 0; i < array.length ; i++) {
        for (let j = 0; j < array[i].length ; j++) {
            console.log(array[i][j]);
        }
    }
}

var arr = [
    [1,2,3],
    [4,5,6],
    [3,4,5]
];

print2DArray(arr);