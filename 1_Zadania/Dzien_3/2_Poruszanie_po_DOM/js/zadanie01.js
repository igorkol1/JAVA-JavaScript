document.addEventListener("DOMContentLoaded", function () {

    var divList = document.querySelectorAll('div');

    divList.forEach(function (elem) {
        elem.addEventListener('mouseover', function (event) {
            var list = this.children[0];
            for (let i = 0; i <list.children.length; i++) {
                list.children[i].style.backgroundColor = 'green';
            }
            list.lastElementChild.style.backgroundColor = 'blue';
            this.className = "hovered";
        });
    });

});
