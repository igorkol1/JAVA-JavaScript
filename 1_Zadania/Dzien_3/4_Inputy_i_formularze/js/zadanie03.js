document.addEventListener("DOMContentLoaded", function () {

    ingridients = document.querySelectorAll('[data-price]');
    priceField = document.getElementById("price");
    submit = document.querySelector('button');
    var price = 0;

    for (let i = 0; i < ingridients.length; i++) {
        ingridients[i].addEventListener("click", function () {
            price += parseFloat(this.dataset.price);
            priceField.innerText = price;
        })
    }

    submit.addEventListener('click', function () {
        alert("Do zapłaty " + price);
    })

});
