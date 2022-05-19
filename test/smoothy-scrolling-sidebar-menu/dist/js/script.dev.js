"use strict";

var currentScroll = 0;
var scrollTo = 0;
/*
currentScroll    - значение текущей прокрутки блока
scrollTo         - значение, до которого требуется прокрутить блок
*/

$(function () {
  // Вывод в консоль по клику на кнопку значения текущей прокрутки блока .main

  /*
  $('#btn').on('click', function(){
      console.log(`currentScroll: ${currentScroll}`);
  })
  */
  // Определение значения текущей прокрутки при скролле
  $('.main').on('scroll', function () {
    currentScroll = $('.main').scrollTop();
  });
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();
    var target = $(this).attr("href"),
        targetOffset = $(target).offset().top;
    /*
    * target        - в переменную заносим информацию о том, к какому блоку надо перейти
    * targetOffset  - определяем положение блока в окне
    */

    currentScroll = $('.main').scrollTop();
    scrollTo = targetOffset + currentScroll;
    $('.main').animate({
      scrollTop: scrollTo
    }, 500, 'swing');
  });
});