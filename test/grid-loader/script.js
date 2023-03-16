"use strict"
/*let start = Date.now();
console.log(start);
window.onload = function(){
	let start1 = Date.now();
	console.log(`start1 = ${Date.now()}`);
	console.log(`onload-start1 = ${Date.now() - start}`);
};

document.addEventListener("DOMContentLoaded", ()=>{
	let start2 = Date.now();
	console.log(`start2 = ${start2}`);
	console.log(`DOMContentLoaded-start2 = ${Date.now() - start}`);
});*/
document.addEventListener("DOMContentLoaded", ()=>{
	let galleryItems = document.querySelectorAll('.gallery__item');

	for(let i = 0; i < galleryItems.length; i++){

		let galleryItem = galleryItems[i];
		let imgLoader = document.createElement('div');
		imgLoader.className = "img-loader";
		galleryItem.prepend(imgLoader);



		let image = galleryItem.querySelector('[data-src]');
		let tempImg = document.createElement('img');
		tempImg.setAttribute('src', image.getAttribute('data-src'));

		tempImg.onload = function(){
			image.setAttribute('src', image.getAttribute('data-src'));
			image.classList.add('loaded');

			imgLoader.classList.add('fadeOut');

			setTimeout(function(){
				imgLoader.remove();
			}, 1000);
			
			console.log(image.id);
		};
		
			
	}
});

