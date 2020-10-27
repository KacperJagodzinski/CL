function getMissingelement(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if(!(array[i]+1 === array[i+1])){
            return array[i]+1;
        }
    }
    return null;
}

console.log(getMissingelement([1,2,3,4,5,7,8]));