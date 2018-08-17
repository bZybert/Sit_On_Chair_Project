var chairs = document.querySelector('span[name="chairs"]');
var colors = document.querySelector('span[name="colors"]');
var materials = document.querySelector('span[name="materials"]');
var checkInp = document.getElementById('transport');
var sum = document.querySelector('div.sum strong');

var spChair = document.querySelector('h4.title');
var spColors = document.querySelector('span.color');
var spMaterials = document.querySelector('span.pattern');
var spTransport = document.querySelector('span.transport');

var prChair = document.querySelector('h4.title.value');
var prColors = document.querySelector('span.color.value');
var prMaterials = document.querySelector('span.pattern.value');
var prTransport = document.querySelector('span.transport.value');

// wyjściowe zmienne do sumowania wartości "koszyka"
var chairRes = 0;
var colorRes = 0;
var materRes = 0;
var transRes = 0;

console.log(sum.innerText);

chairs.addEventListener('click', function (e) {
    if (chairs.nextElementSibling.style.display == 'block') {   //aktywna lista dropdown
        chairs.nextElementSibling.style.display = 'none'
    } else {
        chairs.nextElementSibling.style.display = 'block'
        var nameList = document.querySelectorAll('li[data-chair-price]')
        nameList.forEach(function (e) {                     // event na pozycjach z listy 
            e.addEventListener('click', function () {
                console.log(e.dataset.chairPrice);
                console.log(e.innerText)

                spChair.innerText = e.innerText;            // dodanie nazwy do tabeli po prawej
                prChair.innerText = e.dataset.chairPrice;   // dodanie ceny do tabeli po prawej

                // sumowanie wartości "koszyka"
                chairRes = parseInt(prChair.innerText);
                sum.innerText = colorRes + chairRes + materRes + transRes;

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
        nameList.forEach(function (e) {
            e.addEventListener('click', function () {
                console.log(e.dataset.colorPrice);
                console.log(e.innerText)

                spColors.innerText = e.innerText;
                prColors.innerText = e.dataset.colorPrice;

                colorRes = parseInt(prColors.innerText);
                sum.innerText = colorRes + chairRes + materRes + transRes;
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
        nameList.forEach(function (e) {
            e.addEventListener('click', function () {
                console.log(e.dataset.price);
                console.log(e.innerText)

                spMaterials.innerText = e.innerText;
                prMaterials.innerText = e.dataset.price;

                materRes = parseInt(prMaterials.innerText);
                sum.innerText = colorRes + chairRes + materRes + transRes;
                //.log(sumTab);
            })
        })
    }
})

checkInp.addEventListener('click', function (a) {

    var name = document.querySelector('label[for="transport"]');
    var price = document.getElementById('transport');
    if (checkInp.checked) {
        console.log(name);
        spTransport.innerText = name.innerText;
        prTransport.innerText = price.dataset.transportPrice;

        transRes = parseInt(prTransport.innerText);
        sum.innerText = colorRes + chairRes + materRes + transRes;
    } else {
        spTransport.innerText = "";
        prTransport.innerText = "";

        transRes = 0;
        sum.innerText = colorRes + chairRes + materRes;
    }
})
