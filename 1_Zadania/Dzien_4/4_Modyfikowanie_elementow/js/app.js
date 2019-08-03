$(document).ready(function() {
    console.log('Dziala');

    var nameInput = $('input').eq(0);
    var ageInput = $('input').eq(1);

    var list = $('ul');

    // Zadanie 1
    var submitBtn = $('[type="submit"]');
    submitBtn.on('click', function() {
        var name = nameInput.val();
        var age = parseInt(ageInput.val());

        var newElem = $('<li>' + name + '</li>');
        newElem.attr('data-age', age);

        var color = getColorForAge(age);
        newElem.css('color', color);
        list.append(newElem);
        nameInput.val('');
        ageInput.val('');

        function getColorForAge(age) {
            if (age <= 15) { return 'green' }
            if (age > 15 && age < 40) { return 'blue' }
            if (age >= 40) { return 'brown' }
        }
    });
});
