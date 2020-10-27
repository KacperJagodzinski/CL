/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Tworzymy funkcje sortArray
function sortArray() {

    //Tworzymy zmienna points, ktora jest tablica liczb calkowitych
    var points = [41, 3, 6, 1, 114, 54, 64];

    //korzystamy z funkcji sort
    points.sort(function(a, b) {
        //Przekazujemy funkcje jako argument, zgodnie z dokumentacja posortuje liczby, inaczej funkcja sort posortowalaby je jak stringi
        return a-b;
    });

    //Zwracamy posortowaną tablice punktow
    return points;
}

//Wywołujemy funkcje, brak console.log nic nie wyswietla sie na konsoli
sortArray();
