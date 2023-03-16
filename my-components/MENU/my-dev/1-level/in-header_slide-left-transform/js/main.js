// MOBILE-MENU-SETTINGS
const menuToggler  	= document.querySelector('.top-menu-toggler'),
	  topMenuClose	= document.querySelector('.top-menu-close'),
	  menu 			= document.querySelector('.top-menu-mobile'),
      menuOverl  	= document.querySelector('.top-menu-overl');

menuToggler.addEventListener('click', menuToggle);
menuOverl.addEventListener('click', menuClose);
topMenuClose.addEventListener('click', menuClose);

function menuToggle() {
	menu.classList.toggle('open');
	document.body.classList.toggle('scroll-hidden');
	menuOverl.classList.toggle('open');
}

function menuClose(){
	menu.classList.remove('open');
	document.body.classList.remove('scroll-hidden');
	menuOverl.classList.remove('open');
}