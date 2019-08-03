//EX 1

let menu = document.getElementById('menu');

function getDataInfo(element) {
    let links = element.querySelectorAll('li');
    let linksData = [];
    for (let i = 0; i < links.length; i++) {
        linksData.push(links[i].dataset.info)
    }
    return linksData;
}

console.log(getDataInfo(menu));

//EX 2

let mainContener = document.getElementById('main-contener');

function getElementClass(element) {
    return Array.from(element.classList);
}

console.log(getElementClass(mainContener));

//EX 3

let pinkElement = document.getElementsByClassName('pink-color')[0];

function getElementText(element) {
    return element.innerText;
}

console.log(getElementText(pinkElement));

//EX 4

let images = document.getElementsByClassName('images');

function getElementAlt(element) {
    let alts = [];
    for (let i = 0; i < element.length; i++) {
        alts.push(element[i].alt);
    }
    return alts;
}

console.log(getElementAlt(images));

//EX 5

let myLinks = document.getElementsByClassName('my-link');

function getElementHref(element) {
    let hrefs = [];
    for (let i = 0; i < element.length; i++) {
        hrefs.push(element[i].href);
    }
    return hrefs;
}

console.log(getElementHref(myLinks));
