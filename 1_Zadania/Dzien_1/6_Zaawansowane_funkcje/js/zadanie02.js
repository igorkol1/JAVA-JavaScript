/**
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */


//Tworze funkcje jeden()
function jeden() {

    //Tworze i inicializuje zmienna1 o wartosci 1
    var zmienna1 = 1;

    //Tworze funcke dwa()
    function dwa() {

        //Wypisuje wartosc zmienna1
        console.log(zmienna1);

        //Tworze i inicializuje zmienna2 o wartosci 3
        var zmienna2 = 3;
    }

    //Wywołuje fukcje dwa()
    dwa();

    //Próbuje wywołać zmienna2 z wnatrze funkceji dwa() co sie nie udaje
    //Zmienna2 jest zdefiniowana tylko wewnątrz dunkcji dwa() i nie da sie
    // do niej odłołać z innego miejsca
    console.log(zmienna2)
}

//Wywołuje fukcje jeden()
jeden()
