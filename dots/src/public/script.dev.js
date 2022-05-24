"use strict";

var dots = document.querySelectorAll('.dots__item');

var _loop = function _loop(i) {
  var count = 0;
  var letter = dots[i].firstElementChild;
  dots[i].addEventListener('click', function () {
    count++;

    if (count < 9) {
      var red = Math.round(Math.random() * 255 + 1);
      var green = Math.round(Math.random() * 255 + 1);
      var blue = Math.round(Math.random() * 255 + 1);
      dots[i].style.backgroundColor = "rgba(" + red + ", " + green + "," + blue + ")";
      dotJump(this);
      console.log(count); // console.log(letter);
    } else if (count == 9) {
      var _red = Math.round(Math.random() * 255 + 1);

      var _green = Math.round(Math.random() * 255 + 1);

      var _blue = Math.round(Math.random() * 255 + 1); // dots[i].style.backgroundColor = "rgba(" + red + ", " + green + "," + blue + ")";


      this.classList.add('jump');
      setTimeout(function () {
        dots[i].classList.remove('jump');
        dots[i].style.backgroundColor = "transparent";
        letter.style.color = "rgba(" + _red + ", " + _green + "," + _blue + ")";
        dots[i].classList.add('stopJump');
      }, 500);
    }
  });
};

for (var i = 0; i < dots.length; i++) {
  _loop(i);
}

function dotJump(el) {
  el.classList.add('jump');
  setTimeout(function () {
    el.classList.remove('jump');
  }, 500);
} // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// ОБРАБОТКА МОБИЛЬНОГО МЕНЮ


var menuToggle = document.querySelector('.top-menu-toggle'),
    menu = document.querySelector('.top-nav'),
    // menuOverl  	= document.querySelector('.top-nav-overl'),
menuOverl = document.createElement('div'),
    body = document.querySelector('body');
menuOverl.className = 'top-nav-overl';
menu.after(menuOverl);
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('open');
  menu.classList.toggle('open');
  body.classList.toggle('scroll-hidden');
  menuOverl.classList.toggle('open');
});
menuOverl.addEventListener('click', menuClose);

function menuClose() {
  menuToggle.classList.remove('open');
  menu.classList.remove('open');
  body.classList.remove('scroll-hidden');
  menuOverl.classList.remove('open');
}

console.log(menuToggle);