/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Tworze funkcje sortArray()
function sortArray() {

    //Tworze i inicializuje tablice points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Na tablicy points wywołuje metode sort
    points.sort(function(a, b) {
        //Jako argument funkcji sort przekazuje funkcje nieższego rzędu
        return a-b;
    });

    //Zwracam tablice points
    return points;
}

//Wywołanie funkcji sortArray()
console.log(sortArray().toString());
