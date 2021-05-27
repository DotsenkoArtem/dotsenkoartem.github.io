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


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
window.addEventListener('load', function () {
	const imgContainers = document.querySelectorAll('.objects__img');
	for(let i = 0; i < imgContainers.length; i++){
		let imgContainer = imgContainers[i];
		let image = imgContainer.firstElementChild;

		if(imgContainer.offsetHeight > image.offsetHeight){
			// let imgSrcWidth = image.offsetWidth;
			image.style.height = imgContainer.offsetHeight + 'px';
			image.style.width = (image.naturalWidth / image.naturalHeight * imgContainer.offsetHeight) + 'px';
			image.classList.add('responsive');
		}
		console.dir(image.naturalWidth);
	}
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 