// НЕПОЛОХО, НО ОЧЕНЬ, ОЧЕНЬ СЫРО!


"use strict"
const images = document.querySelectorAll('.lazy');


for (let image of images){
	let img = document.createElement('img');
	img.src = image.dataset.src;

	if(image.getBoundingClientRect().y < document.documentElement.clientHeight - 300){
		img.addEventListener('load', ()=>{
			image.src = img.src;
			image.classList.remove('lazy');

			image.parentElement.classList.add('loaded');
		})
		console.log('УРААААА!!!');
	} 
	else {
		window.addEventListener('scroll', function showImage() {
			if(image.getBoundingClientRect().y < document.documentElement.clientHeight - 300){
				image.src = img.src;
				image.classList.remove('lazy');

				image.parentElement.classList.add('loaded');
			}
		})
	}

}


	// window.addEventListener('scroll', func);





	



	// function func(){
		// for (let image of images){
			// if(image.getBoundingClientRect().y < document.documentElement.clientHeight - 300){
			// 	console.log('УРААААА!!!');
			// } 
			// else{
			// 	console.log('УРААААА!!!');
			// }
		// }





	// }
	
