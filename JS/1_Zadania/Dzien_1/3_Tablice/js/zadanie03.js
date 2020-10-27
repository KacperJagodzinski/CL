function distFromAverage(array) {
    var sum = 0;
    for (let i=0; i<array.length; i++){
        sum += array[i];
    }
    var average = sum / array.length;

    for (let i=0; i<array.length; i++){
        array[i] = Math.abs(array[i]-average);
    }
    return array;
}

console.log(distFromAverage([1,2,3,4,5,6,7]));