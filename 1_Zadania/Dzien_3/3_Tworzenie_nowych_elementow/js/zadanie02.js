document.addEventListener("DOMContentLoaded", function () {

    var counter = 1;

    var addButton = document.querySelector(".button");
    var menu = document.querySelector(".menu");

    addButton.addEventListener("click", function () {
        newElement = document.createElement("li");
        newElement.innerText = "Item " + counter;
        counter++;
        menu.appendChild(newElement);
    })
});
