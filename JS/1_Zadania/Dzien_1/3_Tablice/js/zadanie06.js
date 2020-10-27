function factors(number) {
    if(number>0){
        var arr=[];
        for (let i = 0; i <= number/2 ; i++) {
            if(number % i == 0){
                arr.push(i);
            }
        }
        arr.push(number);
        return arr;
    }else{
        return "Wrong number";
    }

}

console.log(factors(46));