/**
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */


//Tworzymy funkcje jeden
function jeden() {

    //Tworzymy zmienną1 w funkcji 1
    var zmienna1 = 1;

    //Tworzymy funkcje 2
    function dwa() {

        //Która wypisuje na konsoli zmienna1 dostepna w funkcji 2
        console.log(zmienna1);

        //Tworzymy zmienna2
        var zmienna2 = 3;
    }

    // Funkcja dwa wypisuje na konsoli zmienna1
    dwa();

    //Próbujemy wypisać zmienną2 jednak nie jest to mozliwe poniewaz nie jest ona dostepna poza funkcja dwa
    console.log(zmienna2)
}

//Wywołujemy funkcje jeden, konsola wypisuje zmienna 1.
jeden()