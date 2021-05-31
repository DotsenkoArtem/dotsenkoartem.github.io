// var removeClass = true;
// $(".menu-burger").click(function () {
//     $(".menu-popup").toggleClass('menu-popup-toggle');
//     removeClass = false;
// });



// $(".menu-popup").click(function() {
//     removeClass = false;
// });

// $("html").click(function () {
//     if (removeClass) {
//         $(".menu-popup").removeClass('menu-popup-toggle');
//     }
//     removeClass = true;
// });



const menuOpenBtn  	= document.querySelector('.menu-burger'),
	  menuCloseBtn  	= document.querySelector('.top-menu-close'),
	  menu 			= document.querySelector('.top-nav-wrap'),
      menuOverl  	= document.querySelector('.top-nav-overl');


menuOpenBtn.addEventListener('click', function(){
	menu.classList.add('open');
	menuOverl.classList.add('open');
});

menuCloseBtn.addEventListener('click', menuClose);
menuOverl.addEventListener('click', menuClose);

function menuClose(){
	menu.classList.remove('open');
	menuOverl.classList.remove('open');
}




// ОБРАБОТКА ПРАВОГО МЕНЮ
const 	rightMenu 		= document.querySelector('.right-menu');
let 	rightMenuOffsetTop = rightMenu.offsetTop;

if(document.documentElement.clientWidth > 768){
	window.addEventListener('scroll', setStickyMenu);
}

window.addEventListener('resize', function () {
	if(document.documentElement.clientWidth > 768){
		window.addEventListener('scroll', setStickyMenu);
	} else{
		window.removeEventListener('scroll', setStickyMenu);
	}
});


function setStickyMenu() {
	let rightMenuCoords = rightMenu.getBoundingClientRect();
	if(rightMenuCoords.top <= 20 && rightMenuOffsetTop <= document.documentElement.scrollTop){
		rightMenu.classList.add('sticky');
	} else{
		rightMenu.classList.remove('sticky');
	}
	// console.log(rightMenuCoords.top);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 