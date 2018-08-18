// ukrywanie napisu wewnątrz div w drugiej sekcji
var lphoto = document.querySelector('.lphoto');
var rphoto = document.querySelector('.rphoto');

lphoto.addEventListener('mouseover', function (e) {
    var content = lphoto.firstElementChild
    content.style.visibility = "hidden";

})
lphoto.addEventListener('mouseout', function (e) {
    var content = lphoto.firstElementChild
    content.style.visibility = "visible";

})

rphoto.addEventListener('mouseover', function (e) {
    var content = rphoto.firstElementChild
    content.style.visibility = "hidden";

})
rphoto.addEventListener('mouseout', function (e) {
    var content = rphoto.firstElementChild;
    content.style.visibility = "visible";

})

// slider w pierwszej sekcji
var fotels = document.querySelector('.fotels');
var l_button = document.querySelector('.l_enc');
var r_button = document.querySelector('.r_enc');

r_button.addEventListener("click", function () {
    if (fotels.lastElementChild.style.visibility == "hidden") {
        fotels.firstElementChild.style.visibility = "hidden";
        fotels.lastElementChild.style.visibility = "visible";
    } else {
        fotels.firstElementChild.style.visibility = "visible";
        fotels.lastElementChild.style.visibility = "hidden";
    }
});

l_button.addEventListener("click", function () {

    if (fotels.lastElementChild.style.visibility == "hidden") {
        fotels.firstElementChild.style.visibility = "hidden";
        fotels.lastElementChild.style.visibility = "visible";
    } else {
        fotels.firstElementChild.style.visibility = "visible";
        fotels.lastElementChild.style.visibility = "hidden";
    }

})

// aktywowanie dropdown menu
var dropBut = document.querySelector('li.drop');
var navDrop = document.querySelector('ul li ul')
var fotelContent = document.querySelector("div.fotel_content");

console.log(navDrop);

dropBut.addEventListener('mouseover', function (e) {
    navDrop.style.visibility = "visible";
    navDrop.style.display = "block";
    navDrop.style.opacity = 1;
})

fotelContent.addEventListener('click', function () {
    navDrop.style.visibility = "hidden";
    navDrop.style.display = "none";
    //navDrop.style.opacity = 0;
})