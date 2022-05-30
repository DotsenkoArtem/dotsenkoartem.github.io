"use strict"

// ОБРАБОТКА МОБИЛЬНОГО МЕНЮ
const menuToggle  	= document.querySelector('.top-menu-toggle'),
	  menu 			= document.querySelector('.top-nav'),
      menuOverl  	= document.createElement('div'),
      body  		= document.querySelector('body');


menuOverl.className = 'top-nav-overl';
menu.after(menuOverl);





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



// let setupMenuDash = function(){
// 	const menuDashed	= document.querySelector('.top-menu_underlined');
// 	const menuItems		= menuDashed.querySelectorAll('.top-menu__item > a');

// 	for (let menuItem of menuItems) {
// 		let dash = document.createElement('div');
// 		dash.className = 'menu-dash';
// 		menuItem.append(dash);

// 		menuItem.addEventListener('mouseover', function() {
// 			dash.classList.remove('shrink-right');
// 			dash.classList.add('grow-right');
// 		})

// 		menuItem.addEventListener('mouseout', function() {
// 			dash.classList.remove('grow-right');
// 			dash.classList.add('shrink-right');
// 		})
// 	}
// }

// setupMenuDash();



// COMPONENT`S CODE
// ===================================================
// ОБРАБОТКА ПОДЧЕРКИВАНИЯ ПУНКТОВ МЕНЮ
const menuDashed	= document.querySelector('.top-menu_underlined.responsive');
const menuItems		= menuDashed.querySelectorAll('.top-menu__item > a');
let windowWidth		= window.innerWidth;

function setupMenuDashResponsive(){
	if(menuItems) {
		for (let menuItem of menuItems) {
			let dash = document.createElement('div');
			dash.className = 'menu-dash';
			menuItem.append(dash);
	
			menuDashHandler(menuItem, dash);
		}
	}
}


function menuDashHandler(item, dash) {
	// Определение середины пункта меню
	let menuItemMiddle = item.getBoundingClientRect().x + (item.getBoundingClientRect().width / 2); 

	item.addEventListener('mouseover', function(e) {
		dash.className = 'menu-dash';		//Сброс всех лишних классов (появления и исчезания)
		menuItemMiddle >= e.clientX ? dash.classList.add('grow-right') :  dash.classList.add('grow-left');

		console.log(`menuItemMiddle: ${menuItemMiddle}`);
		console.log(`e.clientX: ${e.clientX}`);
	});

	item.addEventListener('mouseout', function(e) {
		dash.className = 'menu-dash';
		menuItemMiddle >= e.clientX ? dash.classList.add('shrink-left') :  dash.classList.add('shrink-right');
	});
}


// Запуск установки только на мобильных
if(windowWidth >= 992) {
	setupMenuDashResponsive();
}


// Обработка при изменении экрана
window.onresize = function() {
	windowWidth = window.innerWidth;
	let dash = document.querySelector('.menu-dash');				//Получить .dash

	if(windowWidth >= 992) {
		if(dash) {													//Если хоть одна .dash существует
			for (let menuItem of menuItems) {
				let dash = menuItem.querySelector('.menu-dash');	//то получаем все имеющиеся в меню
				dash.className = 'menu-dash';						//и сбрасываем лишние стили
				menuDashHandler(menuItem, dash);					//и обработка снова
			} 
		} else {
				setupMenuDashResponsive();							//если .dash не существует - просто установка
		}
	} else {														//Удаление всех .dash на мобильном
		for (let menuItem of menuItems) {
			let dash = menuItem.querySelector('.menu-dash');
			if(dash) {
				dash.remove();
			}
		}
	}
};
// END OF COMPONENT`S CODE
// ===================================================