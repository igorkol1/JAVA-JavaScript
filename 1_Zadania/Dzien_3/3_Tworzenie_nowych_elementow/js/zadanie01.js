document.addEventListener("DOMContentLoaded", function () {

    var addButton = document.getElementById("addBtn");
    var order = document.getElementById("orders");

    addButton.addEventListener("click", function (event) {
        var newRow = document.createElement("tr");
        var orderNr = document.createElement("td");
        var orderItem = document.createElement("td");
        var quentity = document.createElement("td");
        orderNr.innerText = document.getElementById("orderId").value;
        orderItem.innerText = document.getElementById("item").value;
        quentity.innerText = document.getElementById("quantity").value;
        newRow.appendChild(orderNr);
        newRow.appendChild(orderItem);
        newRow.appendChild(quentity);
        order.firstElementChild.appendChild(newRow);
    })

});
