var imgItems = document.querySelector('#sliderImages').children.length;; // Numero de Slides
var containerSlider = document.getElementsByClassName('slider');
var selectorPag = document.querySelectorAll('.pagination')[0]
var imgPos = 1;

// Agregando paginacion --
for (i = 1; i <= imgItems; i++) {
	selectorPag.innerHTML += '<li><span class="fa fa-circle"></span></li>';
}
//------------------------
for (i = 0; i < containerSlider[0].childElementCount; i++) {
	if (i != 0) {
		containerSlider[0].getElementsByTagName('li')[i].style.display = 'none'; // Ocultanos todos los slides
	} else {
		containerSlider[0].getElementsByTagName('li')[0].style.display = "block"; // Mostramos el primer slide
	}
}
selectorPag.firstElementChild.style.color = '#CD6E2E'; // Damos estilos al primer item de la paginacion

// Ejecutamos todas las funciones
document.querySelectorAll(".pagination li").forEach((element, index) => {
	element.onclick = () => pagination(element, index)
});
document.getElementsByClassName('right')[0].getElementsByTagName('span')[0].addEventListener('click', nextSlider);
document.getElementsByClassName('left')[0].getElementsByTagName('span')[0].addEventListener('click', prevSlider);

//Cambia las imagenes automaticamente ---------
setInterval(function () {
	nextSlider();
}, 4000);


function pagination(element, index) {
	var liAct = element;
	var indexIm = index;
	var pagination = indexIm + 1;
	document.querySelectorAll(".slider li").forEach((element, index) => {
		element.style.display = "none";
	});
	document.querySelector(".slider li:nth-child(" + pagination + ")").style.display = "block";

	document.querySelectorAll(".pagination li").forEach((element, index) => {
		element.style.color = "#858585";
	});
	liAct.style.color = "#CD6E2E";
	imgPos = pagination;
}

function nextSlider() {
	console.log("hola")
	if (imgPos >= imgItems) {
		imgPos = 1;
	} else {
		imgPos++;
	}
	document.querySelectorAll(".pagination li").forEach((element) => {
		element.style.color = "#858585";
	});
	document.querySelector(".pagination li:nth-child(" + imgPos + ")").style.color = "#CD6E2E";
	document.querySelectorAll(".slider li").forEach((element, index) => {
		element.style.display = "none"; // Ocultamos todos los slides
	});
	document.querySelector(".slider li:nth-child(" + imgPos + ")").style.display = "block"; // Mostramos el Slide seleccionado
}

function prevSlider() {
	if (imgPos <= 1) {
		imgPos = imgItems;
	} else {
		imgPos--;
	}

	document.querySelectorAll(".pagination li").forEach((element) => {
		element.style.color = "#858585";
	});
	document.querySelector(".pagination li:nth-child(" + imgPos + ")").style.color = "#CD6E2E";
	document.querySelectorAll(".slider li").forEach((element) => {
		element.style.display = "none"; // Ocultamos todos los slides
	});
	document.querySelector(".slider li:nth-child(" + imgPos + ")").style.display = "block"; // Mostramos el Slide seleccionado
}