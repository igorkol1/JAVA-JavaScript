//Co oznaca poniższy kod dowiecie się w dalszej części modułu
document.addEventListener("DOMContentLoaded", function () {

    //EX1
    article = document.querySelector("article.first");
    console.log(article.querySelectorAll("h1").length);

    var offers = article.getElementsByClassName("offers");
    console.log(offers.length);
    for (var i = 0; i < offers.length; i++) {
        console.log(offers[i]);
    }

    var div = article.getElementsByTagName("div");
    console.log(div.length);
    for (var i = 0; i < div.length; i++) {
        console.log(div[i]);
    }

    //EX2

    var menu = document.querySelector("nav");
    var element = menu.querySelector("[href='#portfolio']");
    console.log(element.getAttribute("id"));

    //EX3

    var home1 = document.querySelector("#home");
    var home2 = document.getElementById("home");

    console.log(home1);
    console.log(home2);

    var noData = document.querySelector("li:not([data-direction])");
    console.log(noData);

    var block = document.getElementsByClassName("block")[0];
    console.log(block);

    //EX4

    var links = document.querySelector("nav").querySelectorAll("li");
    console.log(links);

    var div = document.querySelectorAll("div");
    var paragraph = [];
    for (var i = 0; i < div.length; i++) {
        paragraphInDiv = div[i].querySelectorAll("p");
        if (paragraphInDiv.length > 0) {
            paragraph.push(paragraphInDiv);
        }
    }
    console.log(paragraph);

    var articles = document.querySelectorAll("article")
    var divInArticules = [];
    debugger;
    for (var i = 0; i < articles.length; i++) {
        dixInArticle = articles[i].querySelectorAll("div");
        if(dixInArticle.length>0){
            divInArticules.push(dixInArticle);
        }
    }
    console.log(divInArticules);

});
