document.addEventListener("DOMContentLoaded", function () {

    var operatingSystemsImgs = document.querySelectorAll("img");


    document.querySelector("select").onchange = function () {
        console.log(this.value);
        switch (this.value) {
            case 'Os X':
                operatingSystemsImgs[0].style.display = 'block';
                operatingSystemsImgs[1].style.display = 'none';
                operatingSystemsImgs[2].style.display = 'none';
                break;
            case 'Windows':
                operatingSystemsImgs[0].style.display = 'none';
                operatingSystemsImgs[1].style.display = 'none';
                operatingSystemsImgs[2].style.display = 'block';
                break;
            case 'Ubuntu':
                operatingSystemsImgs[0].style.display = 'none';
                operatingSystemsImgs[1].style.display = 'block';
                operatingSystemsImgs[2].style.display = 'none';
                break;
        }
    };

});
