
document.addEventListener("DOMContentLoaded", function () {

    winHight = document.getElementById("windowHeight");
    winWight = document.getElementById("windowWidth");

    window.onresize = function() {
        winHight.innerText = window.innerHeight;
        winWight.innerText = window.innerWidth;
    };
});
