"use strict"

// window.onload = function () {
    // let dropdownBox = document.querySelectorAll('.dropdown-box');
    // for(let i = 0; i < dropdownBox.length; i++){
    // 	dropdownBox[i].style.display = 'none';
    // }
    // console.log(dropdownBox);
// }


let menu = document.querySelector('.menu'),
	overlay = document.querySelector('.menu__overlay'),
	menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);





function toggleMenu() {
	this.classList.toggle('responsive');
	menu.classList.toggle('responsive');
	overlay.classList.toggle('responsive');
}

function closeMenu() {
	menu.classList.remove('responsive');
	overlay.classList.remove('responsive');
	menuToggle.classList.remove('responsive');
	
}




var accordions = document.querySelectorAll(".accord");

for (var i = 0; i < accordions.length; i++) {


console.log(accordions[i].parentElement.querySelector('.accord-cont'));



  accordions[i].addEventListener('click', function () {
  	var content =  this.parentElement.querySelector('.accord-cont');
  
  	// console.log(this.parentElement.querySelector('.accord-cont'));



    
    console.log(content);
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    });
}