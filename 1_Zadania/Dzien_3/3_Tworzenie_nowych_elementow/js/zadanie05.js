document.addEventListener("DOMContentLoaded", function () {

    var deleteButtons = document.querySelectorAll(".deleteBtn");

    deleteButtons.forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
        });
    });
});
