document.addEventListener("DOMContentLoaded", function () {

    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");

    box1.addEventListener("click", function () {
        this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });

    box2.addEventListener("click", function () {
        this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });

    box3.addEventListener("click", function () {
        this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
});
