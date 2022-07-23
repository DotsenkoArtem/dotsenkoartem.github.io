"use strict"

const starsContainer    = document.querySelector('.stars');
const stars             = starsContainer.querySelectorAll('.star');

for(let i = 0; i < stars.length; i++) {
	let star = stars[i];
	let starPos = i + 1;
	
	star.addEventListener('click', function() {
		for(let j = 0; j < stars.length; j++) {
			stars[j].classList.remove('selected');
		}
		for(let k = 0; k < starPos; k++) {
				stars[k].classList.add('selected');
		}
	});
}


