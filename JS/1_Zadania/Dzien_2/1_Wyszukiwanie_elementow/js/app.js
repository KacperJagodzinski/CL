//Co oznaca poniższy kod dowiecie się w dalszej części modułu
document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //task1();
    //taks2();
    //task3();
    //task4();
    add();
});
function task1() {
    var tag = document.querySelector("article.first");
    var h = tag.getElementsByTagName("h1");
    console.log(h.length);
    var off = tag.getElementsByClassName("offers");
    for (var i = 0; i < off.length ; i++) {
        console.log(off[i]);
    }
    var divs = tag.getElementsByTagName("div");
    for (var i = 0; i < divs.length ; i++) {
        console.log(divs[i]);
    }

}

function taks2() {
    var exercise = document.querySelector("nav ul li:nth-child(5) a");
    console.log(exercise);
}

function task3() {

    //1
    var home = document.getElementById("home");
    console.log(home);
    var home2 = document.querySelector("#home");
    console.log(home2);
    //2
    var off = document.querySelector('li:not([data-direction])');
    console.log(off);
    //3
    var doc = document.querySelector(".block");
    console.log(doc);

}

function task4() {
    var navli = document.querySelectorAll('nav li');
    console.log(navli);
    var divpar = document.querySelectorAll('div p');
    console.log(divpar);
    var artdiv = document.querySelectorAll('article div');
    console.log(artdiv);
}

function add() {
    var list = document.querySelectorAll('nav li');
    console.log(list);
    for (let i = 0; i < list.length ; i++) {
        if(!(list[i].hasAttribute('data-direction'))){
            list[i].setAttribute('data-direction', 'top');
        }
    }

}