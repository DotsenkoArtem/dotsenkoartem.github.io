"use strict"

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




// Functions
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