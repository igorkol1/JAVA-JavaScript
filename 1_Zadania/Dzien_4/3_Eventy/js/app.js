var ironManBtn = $('.hero-buttons .ironMan-btn');
var thorBtn = $('.hero-buttons .thor-btn');
var wolverineBtn = $('.hero-buttons .wolverine-btn');

ironManBtn.on('click', function() {
    console.log('kliknięto mnie');
});

thorBtn.one('click', function() {
    console.log('kliknięto mnie, ale już drugi raz nie dam się kliknąć');
});

wolverineBtn.on('click', function() {
    $('button').off('click');
});
