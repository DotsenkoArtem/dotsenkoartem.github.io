"use strict"
// MOBILE-MENU-SETTINGS
const menuToggler  	= document.querySelector('.top-menu-toggler'),
	//   topMenuClose	= document.querySelector('.top-menu-close'),
	  menu 			= document.querySelector('.header-nav'),
      menuOverl  	= document.querySelector('.top-menu-overl');
menuToggler.addEventListener('click', menuToggle);
menuOverl.addEventListener('click', menuClose);
// topMenuClose.addEventListener('click', menuClose);

function menuToggle() {
	menu.classList.toggle('open');
	menuToggler.classList.toggle('open');
	header.classList.toggle('white');
	// document.body.classList.toggle('scroll-hidden');
	menuOverl.classList.toggle('open');
}

function menuClose(){
	menu.classList.remove('open');
    menuToggler.classList.toggle('open');
    header.classList.remove('white');
// 	document.body.classList.remove('scroll-hidden');
	menuOverl.classList.remove('open');
}



// MODAL-WINDOW-SETTINGS

// Получение массива кнопок открытия
const modalOpenBtns = document.querySelectorAll('.modal-trigger');

if(modalOpenBtns){
    for(let i = 0; i < modalOpenBtns.length; i++){
        let modalOpenBtn    = modalOpenBtns[i];
        modalOpenBtn.addEventListener('click', ()=>{
            openModal(modalOpenBtn);
        });
    }
}




// Modal Functions
function openModal(modalOpenBtn){
    let modal = document.getElementById(modalOpenBtn.dataset.target);
    modal.classList.remove('closed');
    modal.classList.add('opened');

    let modalCloseBtns = modal.getElementsByClassName('modal-close');

    for(let i = 0; i < modalCloseBtns.length; i++){
        let modalCloseBtn    = modalCloseBtns[i];
        modalCloseBtn.addEventListener('click', ()=>{
            closeModal(modal);
        });
    }
}

function closeModal(modal){
    modal.classList.remove('opened');
    modal.classList.add('closed');
}