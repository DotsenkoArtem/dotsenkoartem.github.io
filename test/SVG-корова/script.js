"use strict"

const modalContents = [
    {   
        name: 'neck',
        content: '<div class="modal__header"><h4>Шея</h4></div><div class="modal__body"><img src="img/0ffc12aa-c1d4-471b-9.webp" class="modal__img" alt="Шея"><p>Чаще всего красного цвета. Для нее характерны крупные волокна, которые не очень плотно держаться между собой из -за обилия соединительной ткани между ними. Если на ощупь, то пальцы будут немного проваливаться при нажатии между мышц, вдоль жил и жира. Обильное количество жил, но более мягких, чем в голяшке. Так же есть жир. Чаще всего продается на кости, так как филейные куски получаются небольшие.</p></div>'
    },
    {
        name: 'flank',
        content: 'Это, братан моя покромка!!!'
    }
];
let currentModalContent = modalContents[0].content;
// МОДАЛЬНОЕ ОКНО CALLBACK
const openModalBtn = document.querySelectorAll('.modal-open-btn'),
    mOverlay = document.querySelector('.modal__overlay'),
    // modal = document.querySelector('.modal'),
    mContent = document.querySelector('.modal__content'),
    closeModalBtn = document.querySelectorAll('.modal-close');


// for(let i = 0; i < openModalBtn.length; i++){
//     openModalBtn[i].addEventListener('click', () => {
//         openModalById('#cb-modal');
//     });
// }

for(let i = 0; i < openModalBtn.length; i++){
    openModalBtn[i].addEventListener('click', () => {
        getActivePart(openModalBtn[i]);

        openModalById('#cb-modal');
    });
}




for(let i = 0; i < closeModalBtn.length; i++){
    closeModalBtn[i].addEventListener('click', () => {
        closeModal('#cb-modal');
    })
}


/* ПОЛУЧЕНИЕ ЗНАЧЕНИЯ ДАТА АТРИБУТА КНОПКИ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА */
function getActivePart(currentPart) {
    const dataAttrValue = currentPart.dataset.name;
    const currentContent = modalContents.find(part => part.name === dataAttrValue);
    currentModalContent = currentContent.content;
    console.log(currentModalContent);
}




// ========== CUSTOM FUNCTIONS ==========
//----- открытие модального окна по id -----
function openModalById(modalId) {
    let modal = document.querySelector(modalId);

    mContent.innerHTML = currentModalContent;
    modal.classList.remove('m-closed');
    modal.classList.add('m-open');
}





//----- закрытие модального окна по css-селектору -----
        //----- проработано при наличии 1 формы в окне
function closeModal(modalSelector) {
    let modal = document.querySelector(modalSelector);
    modal.classList.remove('m-open');
    modal.classList.add('m-closed');
}