document.addEventListener("DOMContentLoaded", function () {

    var removeBtn = document.getElementById("remove");

    removeBtn.addEventListener("click", function () {
        this.parentElement.removeChild(this);
    })
});
