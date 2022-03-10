"use strict";

var start = Date.now(); // MOBILE-MENU-SETTINGS

var menuToggler = document.querySelector('.top-menu-toggler'),
    //   topMenuClose	= document.querySelector('.top-menu-close'),
menu = document.querySelector('.header-nav'),
    menuOverl = document.querySelector('.top-menu-overl');
menuToggler.addEventListener('click', menuToggle);
menuOverl.addEventListener('click', menuClose); // topMenuClose.addEventListener('click', menuClose);

function menuToggle() {
  menu.classList.toggle('open');
  menuToggler.classList.toggle('open');
  header.classList.toggle('white'); // document.body.classList.toggle('scroll-hidden');

  menuOverl.classList.toggle('open');
}

function menuClose() {
  menu.classList.remove('open');
  menuToggler.classList.toggle('open');
  header.classList.remove('white'); // 	document.body.classList.remove('scroll-hidden');

  menuOverl.classList.remove('open');
} // LAZY-LOAD
// document.addEventListener("DOMContentLoaded", ()=>{


window.addEventListener("load", function () {
  var lazyItems = document.querySelectorAll('.lazy');

  var _loop = function _loop(i) {
    var lazyItem = lazyItems[i];
    var image = lazyItem.querySelector('[data-src]');
    var tempImg = document.createElement('img');
    tempImg.setAttribute('src', image.getAttribute('data-src'));

    tempImg.onload = function () {
      image.setAttribute('src', image.getAttribute('data-src')); // image.classList.add('loaded');

      lazyItem.classList.remove('lazy');
    };
  };

  for (var i = 0; i < lazyItems.length; i++) {
    _loop(i);
  }
}); // = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// MODAL-WINDOW-SETTINGS
// Получение массива кнопок открытия

var modalOpenBtns = document.querySelectorAll('.modal-trigger');

if (modalOpenBtns) {
  var _loop2 = function _loop2(i) {
    var modalOpenBtn = modalOpenBtns[i];
    modalOpenBtn.addEventListener('click', function () {
      openModal(modalOpenBtn);
    });
  };

  for (var i = 0; i < modalOpenBtns.length; i++) {
    _loop2(i);
  }
} // Modal Functions


function openModal(modalOpenBtn) {
  var modal = document.getElementById(modalOpenBtn.dataset.target);
  modal.classList.remove('closed');
  modal.classList.add('opened');
  var modalCloseBtns = modal.getElementsByClassName('modal-close');

  for (var _i = 0; _i < modalCloseBtns.length; _i++) {
    var modalCloseBtn = modalCloseBtns[_i];
    modalCloseBtn.addEventListener('click', function () {
      closeModal(modal);
    });
  }
}

function closeModal(modal) {
  modal.classList.remove('opened');
  modal.classList.add('closed');
} // FORMS
// ПОЛУЧЕНИЕ ВСЕХ ФОРМ ДОКУМЕНТА


var forms = document.forms;

for (var _i2 = 0; _i2 < forms.length; _i2++) {
  var addFocus = function addFocus() {
    this.parentElement.classList.add('focused');
  };

  var removeFocus = function removeFocus() {
    this.parentElement.classList.remove('focused');
  };

  var form = forms[_i2];
  var submitBtn = form.querySelector('[type="submit"]'); // ДОБАВЛЕНИЕ-УДАЛЕНИЕ ФОКУСА НА ТЕКСТОВЫЕ ИНПУТЫ

  for (var j = 0; j < form.elements.length; j++) {
    if (form.elements[j].classList.contains('form__control')) {
      (function () {
        var ElementInput = form.elements[j];
        ElementInput.addEventListener('focus', addFocus);
        ElementInput.addEventListener('input', function () {
          if (ElementInput.value) {
            ElementInput.parentElement.classList.remove('focused');
            ElementInput.parentElement.classList.add('valid');
          } else {
            ElementInput.parentElement.classList.remove('valid');
          }
        });
        ElementInput.addEventListener('blur', removeFocus);
      })();
    }
  }
} // ОТПРАВКА ФОРМЫ AJAX


var modalContent = document.querySelector('.modal-callback');
var thanks = document.createElement('div');
thanks.className = 'thanks';
thanks.innerHTML = '<h3><span>Спасибо</span>Мы перезвоним Вам в ближайшее время!</h3>'; // ФУНКЦИИ УСТАНОВКИ, УДАЛЕНИЯ ЛОАДЕРА ФОРМЫ

function setupLoader(formId) {
  var loader = document.createElement('div'),
      loaderContainer = formId.querySelector('.loader-container');
  loader.className = 'submit-loader';
  loaderContainer.appendChild(loader);
}

function removeLoader(formId) {
  var loader = formId.querySelector('.submit-loader');
  loader.remove();
} // ------------------------------------------------


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
    setTimeout(function () {
      thanks.remove();
      thanks.classList.remove('active');
    }, 6500);
  });
  return false;
}); // ВОЗМОЖНО ПОРТЕБУЕТСЯ ДЛЯ ЛОАДЕРОВ В ПРОСТЫХ ФОРМАХ
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

var starsSlider = new Swiper('.stars__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 20,
  autoplay: {
    delay: 5000
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
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
      centeredSlides: true
    }
  }
}); // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// STARS - REVIEWS

var reviewsSlider = new Swiper('.reviews__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 40,
  autoplay: {
    delay: 5000
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
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
      spaceBetween: 40
    }
  }
}); // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// STARS - IMPORTANT

var mySwiper = undefined;

function initSwiper() {
  var screenWidth = $(window).width();

  if (screenWidth < 576 && mySwiper == undefined) {
    mySwiper = new Swiper('.important__slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      speed: 500,
      // centeredSlides: true,
      spaceBetween: 20,
      autoplay: {
        delay: 5000
      },
      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
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
          spaceBetween: 40 // freeMode: true

        } // when window width is >= 992px
        // 576: {
        //     enabled: false,
        // }

      }
    });
  } else if (screenWidth >= 576 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined; // jQuery('.swiper-wrapper').removeAttr('style');
    // jQuery('.swiper-slide').removeAttr('style');

    jQuery('.swiper-wrapper').removeAttr('style'); //или .important__slider ???

    jQuery('.important-slide').removeAttr('style');
  }
} //Swiper plugin initialization


initSwiper(); //Swiper plugin initialization on window resize

$(window).on('resize', function () {
  initSwiper();
}); // const importantSlider = new Swiper('.important__slider', {
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

$(function () {
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */

    $('html, body').animate({
      scrollTop: dn
    }, 1000, 'swing');
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
}); // window.onload = function(){
//     let start2 = Date.now();
//     console.log(`Событие "onload": ${Date.now() - start}`);
// };