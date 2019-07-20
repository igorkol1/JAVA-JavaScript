document.addEventListener("DOMContentLoaded", function () {

    var removeBtn = document.getElementById("remove");
    var list = document.querySelector("ul");

    removeBtn.addEventListener("click", function () {
        var listElements = list.querySelectorAll("li");
        for (let i = 0; i < listElements.length; i++) {
            list.removeChild(listElements[i]);
        }
    })
});
