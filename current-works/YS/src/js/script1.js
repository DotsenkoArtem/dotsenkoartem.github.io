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

// FORMS
        // ПОЛУЧЕНИЕ ВСЕХ ФОРМ ДОКУМЕНТА
let forms = document.forms;
for(let i = 0; i < forms.length; i++){
    let form = forms[i];
    // let formGroupPass = document.querySelector('.form__group_pass');
    // let showPass        = formGroupPass.querySelector('.show-pass');
    // let passInput       = formGroupPass.querySelector('input[type="password"]');
    let submitBtn		= form.querySelector('[type="submit"]');

    // ДОБАВЛЕНИЕ-УДАЛЕНИЕ ФОКУСА НА ТЕКСТОВЫЕ ИНПУТЫ
    for(let j = 0; j < form.elements.length; j++){
        if(form.elements[j].classList.contains('form__control')){
            let ElementInput = form.elements[j];

            ElementInput.addEventListener('focus', addFocus);

            ElementInput.addEventListener('input', function () {
                if(ElementInput.value){
                    ElementInput.parentElement.classList.remove('focused');
                    ElementInput.parentElement.classList.add('valid');

                    // if(ElementInput.classList.contains('form__pass')){
                    // formGroupPass.classList.remove('error');
                    // }
                }else{
                    ElementInput.parentElement.classList.remove('valid');
                }
            });

            ElementInput.addEventListener('blur', removeFocus);
        }
    }

    function addFocus() {
        this.parentElement.classList.add('focused');
    }
    function removeFocus() {
        this.parentElement.classList.remove('focused');
    }
    // ФУНКЦИОНАЛ "ПОКАЗАТЬ - СКРЫТЬ ПАРОЛЬ"
    // showPass.addEventListener('click', function () {
    //     if(passInput.type == 'password'){
    //         passInput.type = 'text';
    //         showPass.classList.add('shown');
    //     } else{
    //         passInput.type = 'password';
    //         showPass.classList.remove('shown');
    //     }
    // })
    // - - - - - - - - - - - - - - - - - - - - - - - - - 
    // ОБРАБОТКА ВАЛИДАЦИИ ФОРМЫ ПЕРЕД ОТПРАВКОЙ
    // submitBtn.addEventListener('click', function (event) {
    
    //     // Получение input[required] для валидации браузером
    //     const requiredInputs = form.querySelectorAll('[required]');
    //     let count = 0;
    //     for(let i = 0; i < requiredInputs.length; i++){
    //         let requiredInput = requiredInputs[i];
    //         requiredInput.validity.valid ? count++ : count;
    //         // Отмена действия кнопки при условии валидации полей браузером
    //         if(count == requiredInputs.length){
    //             event.preventDefault();
    //             checkPass();
    //             if(!checkPass()){
    //                 showError();
    //             }else{
    //                 alert('Демонстрация успеха. Форма не отправляется.');
    //             }
    //         }
    //     }

    // })
    // function showError() {
    //     setTimeout(function () {
    //         formGroupPass.classList.remove('valid');
    //         formGroupPass.classList.add('error');
    //         alert('Демонстрация ошибки. Форма не отправляется.');
    //     }, 1000);
    // }

    // function checkPass() {
    //     return false;
    // }
    // - - - - - - - - - - - - - - - - - - - - - - - - - 
}



// ОТПРАВКА ФОРМЫ AJAX
let modalContent        = document.querySelector('.modal-callback');
const thanks            = document.createElement('div');
      thanks.className  = 'thanks';
      thanks.innerHTML  = '<h3><span>Спасибо</span>Мы перезвоним Вам в ближайшее время!</h3>';


// ФУНКЦИИ УСТАНОВКИ, УДАЛЕНИЯ ЛОАДЕРА ФОРМЫ
function setupLoader(formId){
    let loader            = document.createElement('div'),
        loaderContainer   = formId.querySelector('.loader-container');
        loader.className  = 'submit-loader';
        loaderContainer.appendChild(loader);
  }
  
  function removeLoader(formId){
    let loader            = formId.querySelector('.submit-loader');
    loader.remove();
  }
  // ------------------------------------------------



$('#modalCbForm').submit(function (ev) {
    ev.preventDefault();
    setupLoader(modalCbForm);
    $.ajax({
        type: 'POST',
        url: '/mail.php',
        data: $(this).serialize()
    }).done(function () {
        $(this).find('input').val('');
        $('#modalCbForm').trigger('reset');
        removeLoader(modalCbForm);

        thanks.classList.add('active');
        wrapper.appendChild(thanks);

        modal.classList.remove('opened');

        setTimeout(function(){
            thanks.remove();
            thanks.classList.remove('active');
        }, 6500);




        // modalContent.classList.remove('opened');
    });
    return false;
})


// ВОЗМОЖНО ПОРТЕБУЕТСЯ ДЛЯ ЛОАДЕРОВ В ПРОСТЫХ ФОРМАХ
// const submitBtn = document.querySelector('[type="submit"]');

// submitBtn.addEventListener('click', function(){
//     let modal = document.querySelector('.modal.fade.in');
//     modal.addEventListener('click', function (ev) {

//         console.log(ev.target);

        

                                                // 		// СТОП РАСПРОСТРАНЕНИЕ - НЕ ПОКАЗЫВАТЬ MODAL-CONTENT
                                                // 		thanks.addEventListener('click', function(ev){
                                                // 			ev.stopPropagation();
                                                // 		});

//         if(ev.target  !== thanks){
//             setTimeout(function() {
//                 modalContent.classList.remove('disabled');
//             }, 300);
//         }



//     })
// })


// let closeModal = document.querySelectorAll('button.close');
// for(let i = 0; i < closeModal.length; i++){
//     closeModal[i].addEventListener('click', function () {







//         // setTimeout(function() {
//         // 	modalContent.classList.remove('disabled');
//         // }, 300);
//     })
// }


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// STARS - SLIDER
const starsSlider = new Swiper('.stars__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 500,




    spaceBetween: 20,
     autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    
      // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 20
        // },
        // // when window width is >= 480px
        // 480: {
        //   slidesPerView: 3,
        //   spaceBetween: 30
        // },
        // when window width is >= 992px
        992: {
            slidesPerView: "auto",
            centeredSlides: true,
        }
    }
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



// STARS - REVIEWS
const reviewsSlider = new Swiper('.reviews__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 500,




    spaceBetween: 20,
     autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    
      // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 20
        // },
        // // when window width is >= 480px
        // 480: {
        //   slidesPerView: 3,
        //   spaceBetween: 30
        // },
        // when window width is >= 992px
        480: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 40,
        }
    }
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



// STARS - IMPORTANT
var mySwiper = undefined;
function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 576 && mySwiper == undefined) {
        mySwiper = new Swiper('.important__slider', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            speed: 500,
            // centeredSlides: true,


        

            spaceBetween: 20,
            autoplay: {
                delay: 5000,
            },
        
            // If we need pagination
            // pagination: {
            //   el: '.swiper-pagination',
            // },
        
            // Navigation arrows
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        
            // And if we need scrollbar
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            // },
            
            // Responsive breakpoints
            breakpoints: {
                // // when window width is >= 480px
                480: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 40,
                    // freeMode: true
                },
                // when window width is >= 992px
                // 576: {
                //     enabled: false,
                    
                // }
            }
        });
    } else if (screenWidth >= 576 && mySwiper != undefined) {
        mySwiper.destroy();
        mySwiper = undefined;
        // jQuery('.swiper-wrapper').removeAttr('style');
        // jQuery('.swiper-slide').removeAttr('style');

        jQuery('.swiper-wrapper').removeAttr('style');  //или .important__slider ???
        jQuery('.important-slide').removeAttr('style');
    }
}

//Swiper plugin initialization
initSwiper();

//Swiper plugin initialization on window resize
$(window).on('resize', function(){
    initSwiper();
});
















// const importantSlider = new Swiper('.important__slider', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1,
//     speed: 500,
//     // centeredSlides: true,


   

//     spaceBetween: 20,
//      autoplay: {
//         delay: 5000,
//     },
  
//     // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
    
//       // Responsive breakpoints
//     breakpoints: {
//         // // when window width is >= 480px
//         480: {
//             slidesPerView: "auto",
//             centeredSlides: true,
//             spaceBetween: 40,
//             // freeMode: true
//         },
//         // when window width is >= 992px
//         576: {
//             enabled: false,
            
//         }
//     }
// });

/* Smoothy scrolling
-------------------------*/
$(function(){
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      let sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000, 'swing');
      
      /*
      * 1000 скорость перехода в миллисекундах
      */
    });
});