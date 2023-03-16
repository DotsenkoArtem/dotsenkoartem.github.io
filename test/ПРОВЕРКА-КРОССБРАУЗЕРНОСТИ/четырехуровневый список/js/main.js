"use srict"

// ============================================================================
// ОБРАБОТКА ПОЛОЖЕНИЯ САБМЕНЮ ТРЕТЬЕГО УРОВНЯ, ВЫХОДЯЩЕГО ЗА ГРНИЦЫ ОКНА
// ОНО ЗДЕСЬ НЕ ТРЕБУЕТСЯ

// const windowWidth = document.documentElement.clientWidth;
// const subMenus = document.querySelectorAll('.sub-menu__lvl3');

// alignSubMenu();

// function alignSubMenu() {
// 	for(let i = 0; i < subMenus.length; i++) {
		
// 		let coords = subMenus[i].getBoundingClientRect();
// 		let subMenuRight = coords.right;
// 		let subMenusOffsetRight = windowWidth - subMenuRight;

// 		subMenusOffsetRight < 0 ? subMenus[i].style.left = '-100%' : subMenus[i].style.left = '';
// 	}
// }
// --------------------
// https://learn.javascript.ru/metrics-window
// https://learn.javascript.ru/coordinates#document-coordinates
// ============================================================================

// ОБРАБОТКА МОБИЛЬНОГО МЕНЮ
const menuToggle  	= document.querySelector('.menu-toggle'),
	  menu 			= document.querySelector('.top-nav'),
      menuOverl  	= document.querySelector('.top-nav-overl'),
      body  		= document.querySelector('body');


menuToggle.addEventListener('click', function(){
	menuToggle.classList.toggle('open');
	menu.classList.toggle('open');
	body.classList.toggle('scroll-hidden');
	menuOverl.classList.toggle('open');
});

menuOverl.addEventListener('click', menuClose);

function menuClose(){
	menuToggle.classList.remove('open');
	menu.classList.remove('open');
	body.classList.remove('scroll-hidden');
	menuOverl.classList.remove('open');
}
//------------------------------------------------------------------------------

let menuInner 		= document.querySelector('.menu');
let parentItems 	= document.querySelectorAll('.menu-item-has-children');

let menuItems		= document.querySelectorAll('.menu-item');
for(let i = 0; i < menuItems.length; i++){
	menuItems[i].addEventListener('click', function (ev) {
		ev.stopPropagation();
	})
	// console.log(menuItems[i]);
}

// let backBtn 	= document.createElement('li');
// backBtn.className 	= 'menu-item back-btn';
// backBtn.innerHTML 	= '<i class="fas fa-angle-left"></i>';
let currentOffsetX = 0;
for (let i = 0; i < parentItems.length; i++) {
	let parentItem = parentItems[i];
	let itemAngle 	= parentItem.querySelector('.item__angle');
	let subMenu 	= parentItem.querySelector('.sub-menu');

	let menuCaptionInner = parentItem.parentElement.querySelector('.menu__caption');
	console.log(menuCaptionInner);

	let subMenuCaption = document.createElement('li');
	subMenuCaption.className 	= 'menu-item menu__caption';
	subMenuCaption.innerHTML	= subMenu.previousElementSibling.innerHTML;
	subMenu.prepend(subMenuCaption);

	let backBtn 	= document.createElement('li');
	backBtn.className 	= 'menu-item back-btn';
	backBtn.innerHTML 	= `<i class="fas fa-angle-left"></i> ${menuCaptionInner.innerHTML}`;
	subMenu.prepend(backBtn);


	subMenuCaption.addEventListener('click', function(ev){
		ev.stopPropagation();
	})

	// itemAngle.addEventListener('click', function () {
	parentItem.addEventListener('click', function (event) {
		event.stopPropagation();
		currentOffsetX -= 100;
		menuInner.style.transform = `translateX(${currentOffsetX}%)`;

		levelDown(subMenu);
		
	})

// УУУУУУУУУРРРРРРРРРРРРРРААААААААААААААААААААААА!!!!!!!!!!!!!!!!!!
	backBtn.addEventListener('click', function (event) {
		event.stopPropagation();
		currentOffsetX += 100;
		menuInner.style.transform = `translateX(${currentOffsetX}%)`;
		levelUp(subMenu);
	})
	

	// parentItem.addEventListener('mouseover', function () {
	// 	subMenu.classList.add('show');
	// })
	// parentItem.addEventListener('mouseout', function (event) {
	// 	subMenu.classList.remove('show');
	// })

	// const wrapper = document.getElementById('wrapper');
	

	// parentItem.addEventListener('click', function (event) {
	// 	event.stopPropagation();
	// })

	// wrapper.addEventListener('click', function () {
	// 	subMenu.classList.remove('show');
	// })

	// body.addEventListener('click', function () {
	// 	subMenu.classList.remove('show');
	// })
}



function levelDown(subMenu) {
	// console.log(subMenu.previousElementSibling.innerHTML);
	// console.log(subMenu);
	// console.log(backBtn);

	// backBtn.innerHTML 	= `<i class="fas fa-angle-left"></i> ${subMenu.previousElementSibling.innerHTML}`;
	// subMenu.prepend(backBtn);
	subMenu.classList.add('current');
	// menuInner.classList.add('hidden');
}

function levelUp(subMenu) {
	// menuInner.classList.remove('hidden');
	subMenu.classList.remove('current');
}