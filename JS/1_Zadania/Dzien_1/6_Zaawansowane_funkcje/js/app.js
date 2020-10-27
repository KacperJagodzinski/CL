function boilEgg(time) {
    var interval = setInterval(function (){
        console.log("jajko sie gotuje");
    }, 5000);
    var timeout = setTimeout(function () {
        clearInterval(interval);
        console.log("jajko ugotowane");
    }, time*1000);
}


boilEgg(30);

function biggest(arguments) {
    arguments.sort(function (a,b) {
        return a-b;
    });

    return arguments[arguments.length-1];
}
var arguments = [41, 3, 6, 1, 114, 54, 64];
console.log(biggest(arguments));

