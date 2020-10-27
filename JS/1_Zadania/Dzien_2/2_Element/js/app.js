/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".offers").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //task1(homeElement);
    //taks2(homeElement,childElements,banner,blocks,links);\
    //task3(blocks);
    taks4(homeElement);
     });

function task1(homeElement) {
    console.log(homeElement);
    var id = homeElement.id;
    var cls = homeElement.className;
    homeElement.id = cls;
    homeElement.className = id;
    console.log(homeElement);
}

function taks2(home,child,banner,blocks,links) {
    console.log(home);
    console.log(home.tagName);

    console.log(child);
    //console.log(child.tagName);

    for (let i = 0; i < child.length; i++) {
        console.log(child[i]);
        console.log(child[i].tagName);
    }

    console.log(banner);
    console.log(banner.tagName);

    console.log(blocks);
    //console.log(blocks.tagName);

    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks[i]);
        console.log(blocks[i].tagName);
    }

    console.log(links);
    //console.log(links.tagName);
    for (let i = 0; i < links.length; i++) {
        console.log(links[i]);
        console.log(links[i].tagName);
    }

}

function task3(blocks) {
    for (let i = 0; i < blocks.length ; i++) {
        console.log(blocks[i].innerHTML);
        console.log(blocks[i].outerHTML);
        blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";
        console.log(blocks[i].innerHTML);
        console.log(blocks[i].outerHTML);
    }
    //innerHTML daje nam to co jest w środku elementu
    //outerHTML daje nam cały element

}

function taks4(homeElement) {
    console.log(homeElement.id);
}