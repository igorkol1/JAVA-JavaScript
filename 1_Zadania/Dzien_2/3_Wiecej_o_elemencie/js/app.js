/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //EX1

    liEmelents = document.querySelectorAll("li");

    for (let i = 0; i < liEmelents.length; i++) {
        if(typeof liEmelents[i].dataset.direction === 'undefined'){
            liEmelents[i].dataset.direction = 'up';
        }
    }

    for (let i = 0; i < liEmelents.length; i++) {
        if(i%2===0){
            liEmelents[i].style.backgroundColor = 'green';
        }
    }

    liEmelents[4].className ='big';

    for (let i = 0; i < liEmelents.length; i++) {
        if(i%3===0){
            liEmelents[i].style.textDecoration='underline';
        }
    }

    //EX2
    optionElements = document.querySelectorAll("option");

    for (let i = 0; i <optionElements.length; i++) {

        optionElements[i].innerText = optionElements[i].value;
        optionElements[i].dataset.year = parseInt(optionElements[i].value)+20;
    }

    //EX3

    divChrome = document.querySelector(".chrome");
    divFirefox = document.querySelector(".firefox");
    divEdge = document.querySelector(".edge");

    divChrome.style.backgroundImage = 'url("assets/img/chrome.png")';
    divEdge.style.backgroundImage = 'url("assets/img/edge.png")';
    divFirefox.style.backgroundImage = 'url("assets/img/firefox.png")';

    divChrome.parentElement.querySelector("a").innerText="Chrome";
    divFirefox.parentElement.querySelector("a").innerText="Firefox";
    divEdge.parentElement.querySelector("a").innerText="Edge";

    divChrome.parentElement.querySelector("a").href = 'https://www.google.com/intl/pl_pl/chrome/';
    divFirefox.parentElement.querySelector("a").href = 'https://www.mozilla.org/pl/firefox/new/';
    divEdge.parentElement.querySelector("a").href = 'https://www.microsoft.com/pl-pl/windows/microsoft-edge';

    divChrome.style.width = '100px';

    //EX4

    spanElements = document.querySelectorAll('span');
    var name = spanElements[0];
    var favColor = spanElements[1];
    var favMeal = spanElements[2];

    name.innerHTML = 'Igor';
    favColor.innerHTML = 'Black';
    favMeal.innerHTML = 'Kimchi';

    //EX5

    ulElements = document.querySelectorAll("ul");

    for (let i = 0; i < ulElements.length; i++) {
        ulElements[i].className='menu';
    }

    for (let i = 0; i < liEmelents.length; i++) {
        if(liEmelents[i].className!=='selected'){
            liEmelents[i].className='menuElement';
        }
    }

    //EX6

    // for (let i = 0; i < liEmelents.length; i++) {
    //     liEmelents[i].dataset.id=i;
    // }

    for (let i = 0; i < liEmelents.length; i++) {
        liEmelents[i].setAttribute("data-id",i);
    }

});
