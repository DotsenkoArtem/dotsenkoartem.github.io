"use strict"
// ===== PRELOADER =====
window.onload = function () {
    let preloader = document.querySelector('.loader');
    preloader.style.display = 'none';
}
// =====END PRELOADER =====


// МОДАЛЬНОЕ ОКНО CALLBACK
let openModalBtn = document.querySelectorAll('.callback-btn'),
    mOverlay = document.querySelector('.modal__overlay'),
    // modal = document.querySelector('.modal'),
    // mContent = document.querySelector('.modal__content'),
    thanks = document.querySelector('.thanks'),
    closeModalBtn = document.querySelectorAll('.modal-close'),
    submitBtns = document.querySelectorAll('input[type="submit"]'),
    formControl = document.querySelectorAll('.form__control');

/*открытие одного и того же модального окна разными кнопками по #id*/
for(let i = 0; i < openModalBtn.length; i++){
    openModalBtn[i].addEventListener('click', () => {
        openModalById('#cb-modal');
    });
}

/*закрытие одного и того же модального окна разными кнопками по #id*/
for(let i = 0; i < closeModalBtn.length; i++){
    closeModalBtn[i].addEventListener('click', () => {
        closeModal('#cb-modal');
    })
}


for(let i = 0; i<formControl.length; i++){
    formControl[i].addEventListener('blur', IsCompleted);
    formControl[i].addEventListener('focus', function () {
        this.classList.remove('not-valid');
        this.classList.remove('completed');
        this.parentNode.querySelector('label').classList.remove('danger');
    }); 
}


// ОТПРАВКА ФОРМЫ С ВАЛИДАЦИЕЙ
for(let i = 0; i < submitBtns.length; i++){
    submitBtns[i].addEventListener('click', function (event) {
        let form = findParentByTagName(submitBtns[i], 'FORM');
        if(checkFormValid(form) === false) {
            event.preventDefault();
            let inputs = form.querySelectorAll('.form__control_req');
            for(let i =0; i < inputs.length; i++){
                let label = inputs[i].parentNode.querySelector('label');
                if(!inputs[i].classList.contains('completed')){
                    label.classList.add('danger');
                }
            }
        } else{
             // СКРИПТ ОТПРАВКИ ПИСЬМА ЧЕРЕЗ AJAX
            $('.cb-form').submit(function (ev) {
                ev.preventDefault();
                $.ajax({
                    type: 'POST',
                    url: '/mail.php',
                    data: $(this).serialize()
                }).done(function () {
                    $(this).find('input').val('');
                    $('.cb-form').trigger('reset');
                    thanks.className = 'thanks active';
                });
                return false;
            })
        }
    });
}
// END ОТПРАВКА ФОРМЫ С ВАЛИДАЦИЕЙ




// ========== CUSTOM FUNCTIONS ==========
//----- открытие модального окна по id -----
function openModalById(modalId) {
    let modal = document.querySelector(modalId);
    modal.classList.remove('m-closed');
    modal.classList.add('m-open');
}


//----- проверка поля ввода на пустоту, добавление класса успешного заполнения -----
//  !!!  класс можно поменять на success  !!!
function IsCompleted() {
    if (this.value && Boolean(this.value)!= false) {
        this.classList.add('completed');
    }else{
        this.classList.remove('completed');
    }
}


//----- валидация формы (проверка заполненности полей формы) -----
function checkFormValid(form) {
    let inputs = form.querySelectorAll('.form__control_req');
    let count = 0;
    for(let i = 0; i < inputs.length; i++){
        if(!inputs[i].value){
            inputs[i].classList.add('not-valid');
            count++;
        } 
    }
    if(count > 0){
        return false;
    }else{
        return true;
    }
}


//----- поиск предка по имени тега -----
function findParentByTagName(child, tag) {
    while (child.tagName !== tag) {
        child = child.parentElement;
    }
    return child;
}


//----- закрытие модального окна по css-селектору -----
        //----- проработано при наличии 1 формы в окне
function closeModal(modalSelector) {
    let modal = document.querySelector(modalSelector);
    modal.classList.remove('m-open');
    modal.classList.add('m-closed');
    thanks.classList.remove('active');
    let form = modal.querySelector('form');
    form.reset();
    for(let i = 0; i<formControl.length; i++){
        formControl[i].classList.remove('completed', 'not-valid');
        formControl[i].parentNode.querySelector('label').classList.remove('danger');
    }
}