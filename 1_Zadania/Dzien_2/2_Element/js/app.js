/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".offers").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //EX1

    homeElementClass = homeElement.className;
    homeElementId = homeElement.id;

    homeElement.className = homeElementId;
    homeElement.id = homeElementClass;

    //EX2

    // allElements = [homeElement,childElements,banner,blocks,links];
    //
    // for (let i = 0; i < allElements.length; i++) {
    //     if(typeof allElements[i].length === 'undefined'){
    //         console.log(allElements[i].tagName);
    //         console.log(allElements[i].innerText);
    //     }else {
    //         for (let j = 0; j <allElements[i].length; j++) {
    //             console.log(allElements[i][j].tagName);
    //             console.log(allElements[i][j].innerText);
    //         }
    //     }
    // }

    //EX3

    // outerHTML – zwraca/nastawia kod HTML wraz z tagiem,
    // innerText – – zwraca/nastawia tekst znajdujący się w tagu (bez zagnieżdżonych tagów),

    // for (let i = 0; i < blocks.length; i++) {
    //     console.log(blocks[i].innerHTML);
    //     console.log(blocks[i].outerHTML);
    //     blocks[i].innerHTML = 'Nowa wartość diva o klasie blocks';
    // }

    //EX4

    console.log(homeElement.id);

    //EX5

    for (let i = 0; i < childElements.length; i++) {
        console.log(childElements[i].tagName);
    }

    //EX6

    for (let i = 0; i < links.length; i++) {
        console.log(links[i].dataset);
    }

    //EX7

    console.log(typeof banner.classList);
    console.log(banner.classList);

    console.log(typeof banner.className);
    console.log(banner.className);
});
