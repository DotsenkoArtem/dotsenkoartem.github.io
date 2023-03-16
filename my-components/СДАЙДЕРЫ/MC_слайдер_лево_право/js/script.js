/*
- Клонированы первый и последний слайды и вставлены в трек соответственно назади вперед только с целью дальнейшей разработки 
бесконечной прокрутки слайдов.
- засунул весь код в функцию и ывзвал ее, затем еще раз ее вызываю при ресайзе окна - тем самым добился адаптивности!!!
*/


"use strict"
const slider = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider__track');
const btnPrev = document.querySelector('.slider__btn_prev');
const btnNext = document.querySelector('.slider__btn_next');

const slideToShow 		= 1;    //ААА РАБОТАЕТ ! ! !
const slideToScroll 	= 1;
let   autoPlayDelay 	= 1500;

// КЛОНИРОВАНИЕ И ВСТАВКА ПЕРВОГО И ПОСЛЕДНЕГО СЛАЙДОВ
let firstSlideClone = sliderTrack.firstElementChild.cloneNode(true);
let lastSlideClone 	= sliderTrack.lastElementChild.cloneNode(true);
let sliderStartPosition 	= 0;
let slideWidth 	=  0;
let sliderTrackWidth = 0;

sliderTrack.append(firstSlideClone);
sliderTrack.prepend(lastSlideClone);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
setSliderSize();
function setSliderSize() {
	slideWidth 	=  slider.clientWidth / slideToShow;
	sliderTrackWidth = slideWidth * sliderTrack.children.length;

	// let sliderStartPosition 	= -firstSlideClone.offsetWidth;
	sliderStartPosition 	= -slideWidth * slideToScroll;



	for (let i = 0; i < sliderTrack.children.length; i++) {
		let slide = sliderTrack.children[i];
		slide.style.flexBasis = slideWidth + 'px';
		// console.log(slide.offsetWidth);
		// console.log(slideWidth);
	}

	// ОПРЕДЕЛЯЮ STYLE-СВОЙСТВА ДЛЯ ТРЕКА
	sliderTrack.style.width 	= sliderTrackWidth + 'px';
	sliderTrack.style.display 	= 'flex';
	sliderTrack.style.transform = 'translateX(' + sliderStartPosition + 'px)';

	// ===============================================================================

	btnNext.addEventListener('click', scrollRight);
	btnPrev.addEventListener('click', scrollLeft);







	let sliderCurrentPosition 	= sliderStartPosition;

	function scrollRight() {
		
		sliderCurrentPosition -= slideWidth * slideToScroll;
		checkControls();
		sliderTrack.style.transform = 'translateX(' + sliderCurrentPosition + 'px)';

	console.log('sliderCurrentPosition: ' + sliderCurrentPosition);

	}

	function scrollLeft() {

		sliderCurrentPosition += slideWidth * slideToScroll;
		checkControls();
		sliderTrack.style.transform = 'translateX(' + sliderCurrentPosition + 'px)';

		// console.log('sliderCurrentPosition: ' + sliderCurrentPosition);
	}

	function checkControls() {
		let sliderRightOffset 		= sliderTrackWidth - Math.abs(sliderCurrentPosition) - slideWidth * slideToShow;

		// ОБРАБОТКА КНОПКИ NEXT
		sliderRightOffset < slideWidth * slideToScroll ? btnNext.disabled = true : btnNext.disabled = '';

	// console.log('sliderRightOffset: ' + sliderRightOffset);

		// ОБРАБОТКА КНОПКИ PREV
		Math.abs(sliderCurrentPosition) < slideWidth * slideToScroll ? btnPrev.disabled = true : btnPrev.disabled = '';

	}

	// AUTOPLAY
	// Будет нужен при зфцикливании
	/*
	function interval(time) {
		setInterval(scrollRight, time);
	}		
	interval(autoPlayDelay);
	*/	
}









	

window.addEventListener('resize', function function_name(argument) {
	console.log('Ебаааать!');
	setSliderSize();
	console.log(slideWidth);
})