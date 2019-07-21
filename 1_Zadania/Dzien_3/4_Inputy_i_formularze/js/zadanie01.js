document.addEventListener("DOMContentLoaded", function () {

    var cardField = document.getElementById("card");

    cardField.addEventListener("input", function () {
        cardType = evaluateCardCompany(this.value);
        console.log('Card type: ' + cardType);
        console.log('Validation: ' + isValid(cardType, this.value));
    })
});

function evaluateCardCompany(number) {
    switch (number[0]) {
        case '4':
            return 'Visa';
        case '5':
            return 'Mastercard';
        case '3':
            if (number.length >= 2) {
                if (number[1] === '4' || number[1] === '7') {
                    return 'American Express';
                }
            }
            return 'Unknow';
        default:
            return 'Unknow';
    }
}

function isValid(cardCompany, number) {
    switch (cardCompany) {
        case 'Visa':
            return (number.length >= 13 && number.length <= 16);
        case 'Mastercard':
            return number.length === 16;
        case 'American Express':
            return number.length === 15;
        default:
            return false;

    }
}
