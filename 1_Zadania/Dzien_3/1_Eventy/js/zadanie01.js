
/*
Script w header -> błąd bo skrypt jest wywoływany zanim zostaną załadowane wszystkie elementy

Script w DOMContentLoaded -> działa bo skrypt poczeka na pełne załadowanie strony

Pozniej gdziekolwiek nie przenisłibyśmy script to i tak bedzie działać bo poczeka na załadowanie strony

 */

document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})
