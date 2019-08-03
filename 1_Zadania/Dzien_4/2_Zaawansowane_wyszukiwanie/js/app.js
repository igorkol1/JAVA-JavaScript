console.log('Document is ready', $);

// Ex 1
// Element -> <span data-task="_task1">
var spanElem = $('span[data-task="_task1"]');
var nextParagraph = spanElem.prev().prev();
var sectionParent = nextParagraph.parent().parent();
var nextElem = sectionParent.next();

var container = nextElem.find('.container');

container.css('background-color', 'green');
container.addClass('answerTask1');

container.slideUp(4000);


