document.addEventListener("DOMContentLoaded", function () {

    var moveButtons = document.querySelectorAll(".moveBtn");
    var list1 = document.getElementById("list1");
    var list2 = document.getElementById("list2");

    moveButtons.forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            var element = this.parentElement;
            if (element.parentElement.id === 'list1') {
                list2.appendChild(element.cloneNode(true));
            } else {
                list1.appendChild(element.cloneNode(true));
            }
            element.parentElement.removeChild(element);
        });
    });
});
