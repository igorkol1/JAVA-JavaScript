document.addEventListener("DOMContentLoaded", function () {

    var invoice = document.getElementById("invoice");

    var invoiceData = document.getElementById("invoiceData");

    invoice.addEventListener("click", function () {
        console.log(invoice.checked);
        if (invoice.checked) {
            invoiceData.style.visibility = 'visible';
        } else {
            invoiceData.style.visibility = 'hidden';
        }
    })
});
