// Znajdź i zapisz do zmiennych następujące elementy:
//
//     Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko.
//     Element o id second -> jego rodzic -> jego czwarte dziecko.
//     Element o atrybucie data-ex nastawionym na wartość third -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w górę).
// Div o klasie fourth -> jego rodzic -> jego pierwsze dziecko o tagu article -> jego drugie dziecko o tagu <p>.
// Wszystkie te elementy mają atrybut data-answer nastawiony na numer zadania, dla którego są odpowiedzią. Sprawdź przez wyświetlenie w konsoli wartość tego atrybutu.
//     Dzięki temu będziesz wiedzieć, czy dane polecenie wykonane zostało prawidłowo.

document.addEventListener("DOMContentLoaded", function () {

    var element1 = document.querySelector('.first').firstElementChild.children[2];

    var element2 = document.getElementById("second").parentElement.children[3];

    var element3Childern = document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.firstElementChild.children;
    console.log(element3Childern.length);
    console.log(Math.ceil(element3Childern.length/2));
    var element3 = element3Childern[Math.ceil(element3Childern.length/2)];


    //TODO
    //var element4 = document.querySelector('div.fourth').parentElement.firstElementChild

    console.log(element1.dataset.answer);
    console.log(element2.dataset.answer);
    console.log(element3.dataset.answer);

});
