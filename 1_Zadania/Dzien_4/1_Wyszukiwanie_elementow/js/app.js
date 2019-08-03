document.addEventListener("DOMContentLoaded", function () {

    //EX 1

    // var links  = $('section.main li');
    // links.addClass('borderClass');

    //Ex 2

    // var showMoreElem = $('.showMore');
    // showMoreElem.eq(0).css('color', 'red');
    //// elem.style.color = 'red'; -> pure js

    //Ex 3

    // links.addClass('colorText');
    // links.addClass('backgroundElement');
    // links.fadeOut('slow');
    // links.fadeIn('slow');

    //Ex 4

    // var links = $('li');
    // links.css('color', 'red')

    // var links = $('.menu li');
    // links.css('color', 'red')

    var links = $('.menu li');
    links.addClass('redLinks');

    links.eq(0).addClass('bigLink');

    //Ex 5

    let header = $('h1');

    if (!header.hasClass('creepyHeader')) {
        header.addClass('creepyHeader');
    }

});
