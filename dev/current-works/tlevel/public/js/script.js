"use strict"; // window.onload = function (){
// Intro Why Collapse

whyBtn.onclick = function () {
  if (why.classList.contains('open')) {
    why.classList.remove('open');
    why.classList.add('close');
  } else {
    why.classList.remove('close');
    why.classList.add('open');
  }
}; // ------------------------------------------------


$(function () {
  $('a[href^="#"]').on('click', function (event) {
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
}); // ------------------------------------------------
// ------------------------------------------------
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
} // ================================================
// FORMS
// Массив всех форм


var forms = document.forms;

var _loop2 = function _loop2(_i2) {
  var form = forms[_i2];
  var attach = form.querySelector('[type="file"]');
  var selectedFile = form.querySelector('.form__file_selected');

  if (attach) {
    attach.addEventListener('change', function () {
      if (this.files.length < 1) {
        selectedFile.innerHTML = "";
      } else if (this.files.length == 1) {
        selectedFile.innerHTML = "\u0412\u044B\u0431\u0440\u0430\u043D \u0444\u0430\u0439\u043B:<br>".concat(this.files[0].name, " ");
      } else {
        selectedFile.innerHTML = "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E \u0444\u0430\u0439\u043B\u043E\u0432: ".concat(this.files.length, " ");
      } // console.log(this.files);
      // console.log(this.files.length);

    });
  }

  form.addEventListener('submit', function (event) {
    send(event, form.dataset.action);
  });

  function send(event, php) {
    // Отключаю поля формы на врем отправки данных - тогда не работает отправка вложений
    // for (let i = 0; i < form.elements.length; i++) {
    //   form.elements[i].disabled = true;
    // }
    setupLoader(form); // console.log("Отправка запроса");
    // if(attach){
    //     // Вычисляю объем выбранных файлов - чисто для себя - в консоль
    //     let fSizes = 0;
    //     for(let i = 0; i < userFile5.files.length; i++) {
    //     fSizes += userFile5.files[i].size;
    //     }
    //     console.log(`fSizes: ${fSizes} байт`);
    //     console.log(`userFile5.files.length: ${userFile5.files.length} файлов`);
    // }

    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);

    req.onload = function () {
      // Определение переменных для оповещения
      var thanks = document.createElement('div');
      var thanksContent = document.createElement('div');
      var thanksClose = document.createElement('div');
      var messageSuccessful = '<h3><span>Спасибо</span>Мы перезвоним Вам в ближайшее время!</h3>';
      var limitExceeded = '<h3><span>Ошибка.</span>Превышен максимальный размер прикрепляемых файлов (10мб).</h3>';
      var messageError = '<h3><span>Ошибка</span>Сообщение не отправлено</h3>'; // Установка окна оповещения

      setupThanks();

      function setupThanks() {
        thanks.className = 'thanks';
        thanksContent.className = 'thanks__content';
        thanksClose.className = 'thanks__close';
        thanks.append(thanksContent, thanksClose);
        wrapper.append(thanks); // Закрытие окна оповещения

        thanksClose.onclick = function () {
          removeThanks(thanks);
        };
      }

      removeLoader(form);

      if (req.status >= 200 && req.status < 400) {
        var json = JSON.parse(this.response); // console.log(json);

        if (json.result == "success") {
          // Текстовое содержимое для окна оповещения в зависимости от результата
          thanksContent.innerHTML = messageSuccessful;
        } else if (json.result == "limitExceeded") {
          // Текстовое содержимое для окна оповещения в зависимости от результата
          thanksContent.innerHTML = limitExceeded;
        } else {
          // Текстовое содержимое для окна оповещения в зависимости от результата
          thanksContent.innerHTML = messageError;
        } // Если не удалось связаться с php файлом

      } else {
        alert("Ошибка сервера. Номер: " + req.status);
      } //   Вывод окна оповещения на страницу


      thanks.classList.add('active'); // Очистка формы после отправки

      form.reset();

      if (attach) {
        selectedFile.innerHTML = "";
      } //   Включаю поля формы после отправки данных


      for (var _i5 = 0; _i5 < form.elements.length; _i5++) {
        form.elements[_i5].disabled = false;
      } //   Автоудаление окна оповещения


      setTimeout(function () {
        removeThanks();
      }, 6500); //   Удаление окна оповещения

      function removeThanks() {
        thanks.classList.remove('active');
        thanks.remove(); // console.log('Выполнено: removeThanks()');
        // console.log(`А это thanks: ${thanks}`);
      }
    }; // Если не удалось отправить запрос. Стоит блок на хостинге


    req.onerror = function () {
      alert("Ошибка отправки запроса");
    };

    req.send(new FormData(event.target));
  }
};

for (var _i2 = 0; _i2 < forms.length; _i2++) {
  _loop2(_i2);
} // Функции установки, удаления лоадера кнопки формы


function setupLoader(form) {
  var loader = document.createElement('div');
  loader.className = 'submit-loader';
  form.querySelector('.loader-container').appendChild(loader); // form.appendChild(loader);
}

function removeLoader(form) {
  var loader = form.querySelector('.submit-loader');
  loader.remove();
} // ================================================
// SLIDERS 
// Expert-slider


var expertSlider = new Swiper('.expert__slider', {
  loop: true,
  slidesPerView: 4,
  draggable: true,
  // spaceBetween: 20,
  speed: 500,
  autoplay: {
    delay: 500
  },
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
    nextEl: '.swiper-button-next.client__button.client__button_next',
    prevEl: '.swiper-button-prev.client__button.client__button_prev'
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

var advSlider = undefined;

function initAdvSlider() {
  // var screenWidth = $(window).width();
  var screenWidth = document.documentElement.clientWidth;
  var advSlideContainer = document.querySelector('.adv-grid');
  var advSlides = document.querySelectorAll('.adv-slide'); // console.log(advSlides);

  if (screenWidth < 576 && advSlider == undefined) {
    advSlider = new Swiper('.adv__slider', {
      // direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 20,
      // autoplay: {
      //     delay: 5000,
      // },
      navigation: {
        nextEl: '.swiper-button-next.adv__button.adv__button_next',
        prevEl: '.swiper-button-prev.adv__button.adv__button_prev'
      },
      breakpoints: {
        480: {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 40
        }
      }
    });
  } else if (screenWidth >= 576 && advSlider != undefined) {
    advSlider.destroy();
    advSlider = undefined;
    advSlideContainer.removeAttribute('style');

    for (var _i3 = 0; _i3 < advSlides.length; _i3++) {
      advSlides[_i3].removeAttribute('style');
    }
  }
} //Swiper plugin initialization


initAdvSlider(); //Swiper plugin initialization on window resize
// $(window).on('resize', function(){
//     initAdvSlider();
// });
// window.onresize = function(){
//     initAdvSlider();
// };
// ------------------------------------------------
// ------------------------------------------------
// Awards-slider
//Swiper plugin initialization on window resize

var awaSlider = undefined;

function initAwaSlider() {
  // var screenWidth = $(window).width();
  var screenWidth = document.documentElement.clientWidth;
  var awaSlideContainer = document.querySelector('.awa__slider-inner');
  var awaSlides = document.querySelectorAll('.awa-slide'); // console.log(awaSlides);

  if (screenWidth < 576 && awaSlider == undefined) {
    awaSlider = new Swiper('.awa__slider', {
      // direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 20,
      // autoplay: {
      //     delay: 5000,
      // },
      navigation: {
        nextEl: '.swiper-button-next.awa__button.awa__button_next',
        prevEl: '.swiper-button-prev.awa__button.awa__button_prev'
      },
      breakpoints: {
        480: {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 40
        }
      }
    });
  } else if (screenWidth >= 576 && awaSlider != undefined) {
    awaSlider.destroy();
    awaSlider = undefined;
    awaSlideContainer.removeAttribute('style');

    for (var _i4 = 0; _i4 < awaSlides.length; _i4++) {
      awaSlides[_i4].removeAttribute('style');
    }
  }
} //Swiper plugin initialization


initAwaSlider(); //Swiper plugin initialization on window resize
// $(window).on('resize', function(){
//     initAwaSlider();
// });

window.onresize = function () {
  initAdvSlider();
  initAwaSlider();
}; // ------------------------------------------------
// Reviews-slider


var revSlider = new Swiper('.rev__slider', {
  loop: true,
  slidesPerView: 5,
  speed: 500,
  draggable: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000
  } // navigation: {
  // nextEl: '.swiper-button-next',
  // prevEl: '.swiper-button-prev',
  // },
  // pagination: {
  //     el: ".swiper-pagination",
  //     type: "fraction",
  //   },
  // breakpoints: {
  //     992: {
  //         slidesPerView: "auto",
  //         centeredSlides: true,
  //     }
  // }

}); // = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// };