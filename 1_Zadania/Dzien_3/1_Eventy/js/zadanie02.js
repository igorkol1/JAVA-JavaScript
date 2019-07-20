document.addEventListener("DOMContentLoaded", function () {

    var bubblingButtons = document.getElementById("bubblingButtons");

    bubblingButtons.dataset.counter = 0;

    bubblingButtons.addEventListener('click', function () {
        bubblingButtons.dataset.counter++;
    })

});
