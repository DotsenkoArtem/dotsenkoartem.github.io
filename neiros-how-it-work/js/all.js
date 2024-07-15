$('.share-box-toggle').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active').siblings('.schare-box-dropdown').fadeToggle();
});

$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $(".share-box"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass('in'); // скрываем его
      $('.share-box-toggle').removeClass('active');
      $('.schare-box-dropdown').fadeOut();
  }
});


$('.btn-search__header').on('click', function (e) {
  e.preventDefault();
  setTimeout(sefocus,1000)
  $(this).toggleClass('active');
  $('#neinputsearch').focus();
  $('.form-search__header').fadeToggle();
});
function sefocus(){
  $('#neinputsearch').focus()
}
$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $(".form-search__header"); // тут указываем ID элемента
  var btn = $('.btn-search__header');
  if (!div.is(e.target) // если клик был не по нашему блоку
      && !btn.is(e.target) && btn.has(e.target).length === 0
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.fadeOut(); // скрываем его
      btn.removeClass('active');
  }
});


$('.links-toggle').on('click', function (e) {
  e.preventDefault();

  var
      $this = $(this),
      content = $(this).parent().find('.keep-menu');


  if (!$this.hasClass('trigger')) {
      $this.addClass('trigger');
      $this.html('Скрыть');

      content.addClass('open');
  } else {
      $this.removeClass('trigger');
      $this.html('Раскрыть полностью');


      content.removeClass('open');
      $this.parents('.keep-post__body').removeClass('show').prev('.keep-post__head').addClass('collapsed');
  }
});

$(window).scroll (function () {
  var ratio = $(document).scrollTop () / (($(document).height () - $(window).height ()) / 100);
  $(".header-progressbar").width (ratio + "%");
});


$(document).ready(function () { //плавный скролл
  $(".go_to").on("click", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),
          headerHeight = $('.header').height(),
          //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;

      //анимируем переход на расстояние - top за 500 мс
      $('body,html').animate({scrollTop: top - headerHeight}, 500);
  });
});

function setNavigationWidget() {
  var $sectionsWidget = $('ul.navigation_widget_list');
  if (!$sectionsWidget.length) return;
  pn_config.sections.forEach(function (el, index, array) {
      var $sectionsWidget = $('.' + el.class + '-widget'),
          nextSection = array[index + 1],
          nextSectionPosPX,
          progress;

      if (!el.visible) {
          $sectionsWidget.hide();
          return;
      } else $sectionsWidget.show(); //     nextSectionPosPX = (typeof(nextSection)!='undefined' ? Math.round(nextSection.positionPX) : windowWidth);


      if (typeof nextSection != 'undefined') {
          nextSectionPosPX = Math.round(nextSection.positionPX);
      } else {
          var temp;
          temp = $postEnding.length ? $postEnding.offset().top : $(document).height();
          nextSectionPosPX = Math.round(windowWidth * temp / postHeight);
      }

      if (el.positionPX - errorMargin > barCompletePX) {
          $sectionsWidget.removeClass('pn-active');
          $sectionsWidget.find('.section_progress').css('width', '0');
      } else if (el.positionPX - errorMargin <= barCompletePX && barCompletePX < nextSectionPosPX) {
          progress = (barCompletePX - el.positionPX) / (nextSectionPosPX - el.positionPX) * 100;
          $sectionsWidget.addClass('pn-active');
          $sectionsWidget.find('.section_progress').css('width', progress + '%');
      } else {
          $sectionsWidget.addClass('pn-active');
          $sectionsWidget.find('.section_progress').css('width', '100%');
      }
  });
}

setNavigationWidget();


$(document).on('click','.btn-search__header',function (){
$('.search_input').focus()
})


$(".js-tab-trigger-menu").hover(function () {
  var id = $(this).attr('data-tab');
  var count_data = $(this).attr('data-count');
  if(count_data>8){
      $('.banner-menu').hide();
  }else{ 
      $('.banner-menu').show();
  }
      content = $(this).parents('.menu').find('.js-tab-content-menu[data-tab="' + id + '"]');

  $(this).parents('.menu').find('.js-tab-trigger-menu.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2

  $(this).parents('.menu').find('.js-tab-content-menu.active').removeClass('active'); // 3
  content.addClass('active'); // 4

});




function ajax_load_for_menu_desc1(){

$.ajax({
  method: 'get',
  url: 'https://neiros.ru/ajax/menudesc/',
  data: {
   
  },
  success: function (html) {
  console.log(html);
  for (var key in html) {
    // этот код будет вызван для каждого свойства объекта
    // ..и выведет имя свойства и его значение
    $('.class_desc_'+key).html(html[key])
   
  }
   
  },
});


// class_desc_
}

ajax_load_for_menu_desc1();