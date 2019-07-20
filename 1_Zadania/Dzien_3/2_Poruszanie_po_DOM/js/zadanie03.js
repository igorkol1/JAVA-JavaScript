document.addEventListener("DOMContentLoaded", function () {

    var buttons = document.querySelectorAll(".button");

    buttons.forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        });
    });
});
