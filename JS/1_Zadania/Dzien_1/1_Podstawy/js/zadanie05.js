//Komentarze do kodu umieśc bezpośrednio pod linią w której znaleziono błąd

var i = 1;
//i<100 not true < 100
while (i < 100) {
    console.log('Aktualna wartość zmiennej i to: ' + i);
    i = i * 2;
}
// 0 * 2 = 0, never ending loop

var year = 2016;
if(year %= 4) {
    console.log('Rok przestępny');
} else
    {
    console.log('Rok nieprzestępny');
}
// "{" missing

console.log('Błędy poprawione, więc ten tekst będę widzieć w konsoli po uruchomieniu skryptu'+ ' HURRRA!!!');
//+ instead of .
