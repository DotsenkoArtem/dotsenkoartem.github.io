"use strict"; // window.onload = function (){
// MODALS

var modalOpenBtns = document.querySelectorAll('.modal-trigger');

if (modalOpenBtns) {
  var _loop = function _loop(i) {
    var modalOpenBtn = modalOpenBtns[i];
    modalOpenBtn.addEventListener('click', function () {
      openModal(modalOpenBtn);
    });
  };

  for (var i = 0; i < modalOpenBtns.length; i++) {
    _loop(i);
  }
} // Functions


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
} // ------------------------------------------------
// FORMS


userFile5.addEventListener('change', function () {
  if (userFile5.files.length < 1) {
    selectedFile.innerHTML = "";
  } else if (userFile5.files.length == 1) {
    selectedFile.innerHTML = "\u0412\u044B\u0431\u0440\u0430\u043D \u0444\u0430\u0439\u043B:<br>".concat(userFile5.files[0].name, " ");
  } else {
    selectedFile.innerHTML = "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E \u0444\u0430\u0439\u043B\u043E\u0432: ".concat(userFile5.files.length, " ");
  } // selectedFile.innerHTML = `Выбранно файлов: ${userFile5.files.length} `;


  console.log(userFile5.files);
  console.log(userFile5.files.length);
}); // ------------------------------------------------
// SLIDERS 
// Expert-slider

var expertSlider = new Swiper('.expert__slider', {
  loop: true,
  slidesPerView: 4,
  speed: 300,
  draggable: true,
  // spaceBetween: 20,
  // autoplay: {
  //     delay: 5000,
  // },
  navigation: {
    nextEl: '.swiper-button-next.expert__button.expert__button_next',
    prevEl: '.swiper-button-prev.expert__button.expert__button_prev'
  },
  pagination: {
    el: ".expert__pagination",
    type: "fraction"
  } // breakpoints: {
  //     992: {
  //         slidesPerView: "auto",
  //         centeredSlides: true,
  //     }
  // }

}); // ------------------------------------------------
// Client-slider

var clientSlider = new Swiper('.client__slider', {
  loop: true,
  slidesPerView: 6,
  speed: 500,
  draggable: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  } // pagination: {
  //     el: ".swiper-pagination",
  //     type: "fraction",
  //   },
  // breakpoints: {
  //     992: {
  //         slidesPerView: "auto",
  //         centeredSlides: true,
  //     }
  // }

}); // ------------------------------------------------
// Advantages-slider
//Swiper plugin initialization on window resize

var advSwiper = undefined;

function initSwiper() {
  // var screenWidth = $(window).width();
  var screenWidth = document.documentElement.clientWidth;
  var advSlideContainer = document.querySelector('.adv__slider-container');
  var advSlides = document.querySelectorAll('.adv-slide'); // console.log(advSlides);

  if (screenWidth < 576 && advSwiper == undefined) {
    advSwiper = new Swiper('.adv__slider', {
      // direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 20,
      // autoplay: {
      //     delay: 5000,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        480: {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 40
        }
      }
    });
  } else if (screenWidth >= 576 && advSwiper != undefined) {
    advSwiper.destroy();
    advSwiper = undefined;
    advSlideContainer.removeAttribute('style');

    for (var _i2 = 0; _i2 < advSlides.length; _i2++) {
      advSlides[_i2].removeAttribute('style');
    }
  }
} //Swiper plugin initialization


initSwiper(); //Swiper plugin initialization on window resize
// $(window).on('resize', function(){
//     initSwiper();
// });

window.onresize = function () {
  initSwiper();
}; // ------------------------------------------------
// Reviews-slider


var revSlider = new Swiper('.rev__slider ', {
  loop: true,
  slidesPerView: 5,
  speed: 500,
  draggable: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  } // breakpoints: {
  //     992: {
  //         slidesPerView: "auto",
  //         centeredSlides: true,
  //     }
  // }

}); // = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// };