document.addEventListener("DOMContentLoaded", function () {

    var buttons = document.querySelectorAll(".button");

    buttons.forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            if(this.nextElementSibling.style.visibility==='hidden'){
                this.nextElementSibling.style.visibility='visible';
            }else {
                this.nextElementSibling.style.visibility='hidden';
            }
        });
    });



});
