var arr = [1999,1997,2000,1988,1965];

function oldestYearAge(arr) {
    var oldest = 3000;
    for (let i = 0; i < arr.length ; i++) {
        if(arr[i] < oldest){
            oldest = arr[i];
        }
    }

    var age = 2019 - oldest;
    return "Rok urodzenia: " + oldest + " Wiek: " + age;
}

function youngestYearAge(arr){
    var youngest = 0;
    for (let i = 0; i < arr.length ; i++) {
        if(arr[i] > youngest){
            youngest = arr[i];
        }
    }

    var age = 2019 - youngest;
    return "Rok urodzenia: " + youngest + " Wiek: " + age;
}

console.log(oldestYearAge(arr));
console.log(youngestYearAge(arr));