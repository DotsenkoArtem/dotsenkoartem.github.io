"use strict"

h1.innerHTML = 'Давай, бро, кликни по странице!!!';


window.addEventListener('click', function (e) {
	mouseClickDisplay(e);
})


function mouseClickDisplay(e) {
	let pulseSide 		= 30;
	let pulse 			= document.createElement('div');

	pulse.className 	= 'pulse';
	pulse.style.width 	= pulseSide + "px";
	pulse.style.height 	= pulseSide + "px";
	pulse.style.top 	= (e.clientY - 15) + "px";
	pulse.style.left 	= (e.clientX -  15) + "px";

	document.body.append(pulse);
	setTimeout(()=>{
		pulse.remove();
	}, 300);
}