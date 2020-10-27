function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    //poniżej napisz rozwiązanie zadania

    console.log("Liczba: " + randomNumber);


    if (randomNumber % 2 === 0) {
        console.log("parzysta");
    } else {
        console.log("nieparzysta");
    }

    console.log("Dzielniki liczby " + randomNumber + " : ")
    for (let i = 0; i <= randomNumber / 2; i++) {
        if (randomNumber % i == 0) {
            console.log(i + ", ");
        }
    }

    console.log("Wylosowana liczba: " + randomNumber);
    var rest = randomNumber%5;
    console.log(randomNumber + " % " + "5 = " + rest );
    var pow = Math.pow(randomNumber,rest);
    console.log(randomNumber + "^" + rest + "=" + pow);
}

//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();
