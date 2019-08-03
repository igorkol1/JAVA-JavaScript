document.addEventListener("DOMContentLoaded", function () {

    let articles = document.querySelectorAll('article');

    articles.forEach(function (elem) {
        elem.addEventListener('click', function () {
            let articleContenet = elem.querySelector('div');
            let articleButton = elem.querySelector('a');
            if (articleContenet.style.display === 'contents') {
                articleContenet.style.display = 'none';
                articleButton.innerText = 'Czytaj więcej';
            } else {
                articleContenet.style.display = 'contents';
                articleButton.innerText = 'Ukryj';
            }
        })
    });

});
