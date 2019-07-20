document.addEventListener("DOMContentLoaded", function () {

    var buttons = document.querySelectorAll("button");

    var counter = document.querySelector(".counter");

    buttons.forEach(function (elem) {
        elem.addEventListener("click", function () {
            counter.innerText = parseInt(counter.innerText) + 1;
        });
    });
});
