$(document).ready(function () {
    console.log('Dziala');

    // Ex 1
    var section1 = $('.task_1');
    var btn = section1.find('button');

    btn.text('Ala ma kota');

    btn.on('click', function () {
        var newElem = $('<div class="panel"><p>Tajna wiadomosc....</p></div>');
        var paragraph = newElem.find('p').hide();

        newElem.on('mouseenter', function () {
            paragraph.show();
        });

        newElem.on('mouseleave', function () {
            paragraph.hide();
        });

        section1.append(newElem);
    });

});

