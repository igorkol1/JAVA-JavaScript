document.addEventListener("DOMContentLoaded", function () {

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");

    counters = document.querySelectorAll('.counter');

    button1.addEventListener('click', function () {
        counters[0].innerText = parseInt(counters[0].innerText) + 1;
    })

    button2.addEventListener('click', function () {
        counters[1].innerText = parseInt(counters[1].innerText) + 1;
    })

    button3.addEventListener('click', function () {
        counters[2].innerText = parseInt(counters[2].innerText) + 1;
    })

});
