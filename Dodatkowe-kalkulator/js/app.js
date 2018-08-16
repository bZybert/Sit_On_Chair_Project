var chairs = document.querySelector('span[name="chairs"]');
var colors = document.querySelector('span[name="colors"]');
var materials = document.querySelector('span[name="materials"]');

var spChair = document.querySelector('h4.title');
var spColors = document.querySelector('span.color');
var spMaterials = document.querySelector('span.pattern');
var spTransport = document.querySelector('span.transport');

var prChair = document.querySelector('h4.title.value');
var prColors = document.querySelector('span.color.value');
var prMaterials = document.querySelector('span.pattern.value');
var prTransport = document.querySelector('span.transport.value');

var checkInp = document.querySelector('div.checkbox.check-box');
var sum = document.querySelector('div.sum strong').innerText;

console.log(sum);

chairs.addEventListener('click', function (e) {
    if (chairs.nextElementSibling.style.display == 'block') {
        chairs.nextElementSibling.style.display = 'none'
    } else {
        chairs.nextElementSibling.style.display = 'block'
        var nameList = document.querySelectorAll('li[data-chair-price]')
        console.log(nameList);
        nameList.forEach(function (e) {
            e.addEventListener('click', function () {
                console.log(e.dataset.chairPrice);
                console.log(e.innerText)

                spChair.innerText = e.innerText;
                prChair.innerText = e.dataset.chairPrice;

                // sum = parseInt(e.dataset.chairPrice);
            })
        })
    }
})

colors.addEventListener('click', function (e) {
    if (colors.nextElementSibling.style.display == 'block') {
        colors.nextElementSibling.style.display = 'none'
    } else {
        colors.nextElementSibling.style.display = 'block'
        var nameList = document.querySelectorAll('li[data-color-price]');
        console.log(nameList);
        nameList.forEach(function (e) {
            e.addEventListener('click', function () {
                console.log(e.dataset.colorPrice);
                console.log(e.innerText)

                spColors.innerText = e.innerText;
                prColors.innerText = e.dataset.colorPrice;
            })
        })
    }
})

materials.addEventListener('click', function (e) {
    if (materials.nextElementSibling.style.display == 'block') {
        materials.nextElementSibling.style.display = 'none'
    } else {
        materials.nextElementSibling.style.display = 'block'
        var nameList = document.querySelectorAll('li[data-price]');
        console.log(nameList);
        nameList.forEach(function (e) {
            e.addEventListener('click', function () {
                console.log(e.dataset.price);
                console.log(e.innerText)

                spMaterials.innerText = e.innerText;
                prMaterials.innerText = e.dataset.price;
            })
        })
    }
})

checkInp.addEventListener('click', function () {
    var name = document.querySelector('label[for="transport"]');
    var price = document.getElementById('transport');
    console.log(name);
    spTransport.innerText = name.innerText;
    prTransport.innerText = transport.dataset.transportPrice;
})

function summary() {
    if (prColors.innerText !== null) {
        var color = Number(prColors.innerText);
    }

    var pattern = Number(prMaterials.innerText);
    var transport = Number(prTransport.innerText);
    var type = Number(prChair.innerText);
    console.log(color);

    if (sum.innerText !== 0) {
        return color + pattern + transport + type;

    }
}
sum.innerText = summary()