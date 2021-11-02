"use strict";
/* Функционал табов
================================================== */

var tabsBoxes = document.querySelectorAll('.tabs');

var _loop = function _loop(i) {
  // Получение массива всех заголовков вкладок
  var tabTitles = tabsBoxes[i].querySelectorAll('.tab-title'); // Получение .tabs__content (родитель для элемнтов с контентом вкладок)

  var tabsContent = tabsBoxes[i].querySelector('.tabs__content'); // Получение всех элементов с контентом вкладок

  var tabPanes = tabsContent.querySelectorAll('.tab-pane');

  for (var _i2 = 0; _i2 < tabTitles.length; _i2++) {
    var tabTitle = tabTitles[_i2];
    tabTitle.addEventListener('click', function () {
      // Убираем класс "active" со всех заголовков вкладок
      for (var j = 0; j < tabTitles.length; j++) {
        tabTitles[j].classList.remove('active');
      } // Установка активной вкладки и получение ID требуемого элемента с контентом


      var tabPaneId = '#' + this.dataset.target;
      this.classList.add('active'); // Убираем класс "active" со всех элементов с контентом

      for (var k = 0; k < tabPanes.length; k++) {
        tabPanes[k].classList.remove('active');
      } // Установка аактивного элемента  контентом вкладки


      tabsContent.querySelector(tabPaneId).classList.add('active');
    });
  }
};

for (var i = 0; i < tabsBoxes.length; i++) {
  _loop(i);
}
/* Функционал копирования контента вкладок в буфер обмена
================================================== */


var copyBtns = document.getElementsByClassName('code-copy-btn');

var _loop2 = function _loop2(_i) {
  var copyBtn = copyBtns[_i];
  copyBtn.addEventListener('click', function (e) {
    // Координаты клика по кнопке
    var iToolTipX = e.clientX;
    var iToolTipY = e.clientY;
    copyToClipboard(copyBtn, iToolTipX, iToolTipY);
  });
};

for (var _i = 0; _i < copyBtns.length; _i++) {
  _loop2(_i);
}
/* Functions
================================================== */


function copyToClipboard(copyBtn, iToolTipX, iToolTipY) {
  var itemToCopy = document.getElementById(copyBtn.dataset.target).innerText;
  var el = document.createElement('textarea');
  el.value = itemToCopy;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el); // TOOLTIP
  // Проверка на наличие посказки

  var iToolTip = document.querySelector('.info-iToolTip');

  if (!iToolTip) {
    // Creating tooltip
    iToolTip = document.createElement('div');
    iToolTip.className = 'info-tooltip';
    iToolTip.innerText = 'Copied';
    document.body.appendChild(iToolTip);
    setPosition(iToolTipX, iToolTipY, iToolTip); // Removing tooltip

    setTimeout(function () {
      document.body.removeChild(iToolTip);
    }, 1500);
  }
}

function setPosition(iToolTipX, iToolTipY, iToolTip) {
  // Отступ подсказки от клика
  var iToolTipoOffsetLeft = 35; // Проверка на полное отображение подсказки в окне браузера
  // Если не выходит за рамки окна, то позиционирую на "iToolTipoOffsetLeft" px правее клика
  // Условие (ширина видимой части окна >= координата клика Х + отступ от клика до подсказки + ширина подсказки)

  if (document.documentElement.clientWidth >= iToolTipX + iToolTipoOffsetLeft + iToolTip.offsetWidth) {
    iToolTip.style.left = "".concat(iToolTipX + iToolTipoOffsetLeft, "px");
  } else {
    // Если выходит за границы окна, то приклеиваю к правой границе окна + 15px
    iToolTip.style.left = 'auto';
    iToolTip.style.right = "15px";
  }

  iToolTip.style.top = "".concat(iToolTipY - 40, "px");
}