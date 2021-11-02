"use strict";

var tabsBoxes = document.querySelectorAll('.tabs-wrap');

var _loop = function _loop(i) {
  // ПОЛУЧЕНИЕ МАССИВА ВСЕХ ВКЛАДОК
  var tabs = tabsBoxes[i].querySelectorAll('.tabs__item'); // ПОЛУЧЕНИЕ БЛОКА С ЭЛЕМЕНТАМИ КОНТЕНТА ВКЛАДОК

  var tabsContent = tabsBoxes[i].querySelector('.tabs-content'); // ПОЛУЧЕНИЕ ВСЕХ ЭЛЕМЕНТОВ КОНТЕНТА ВКЛАДОК

  var tabsContentItems = tabsContent.querySelectorAll('.tabs-content__item');

  for (var _i2 = 0; _i2 < tabs.length; _i2++) {
    var tab = tabs[_i2];
    tab.addEventListener('click', function () {
      // УБАРИЕМ КЛАСС "ACTIVE" СО ВСЕХ ВКЛАДОК
      for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('active');
      } // АКТИВНАЯ ВКЛАДКА ПРИ КЛИКЕ


      var tabContentId = '#' + this.dataset.target;
      this.classList.add('active'); // УБАРИЕМ КЛАСС "ACTIVE" СО ВСЕХ ЭЛЕМЕНТОВ КОНТЕНТА ВКЛАДОК

      for (var k = 0; k < tabsContentItems.length; k++) {
        tabsContentItems[k].classList.remove('active');
      } // АКТИВНЫЙ ЭЛЕМЕНТ КОНТЕНА ВКЛАДКИ ПРИ КЛИКЕ


      tabsContent.querySelector(tabContentId).classList.add('active');
    });
  }
};

for (var i = 0; i < tabsBoxes.length; i++) {
  _loop(i);
} // ==============================================================================================================
// МНЕ КАЖЕТСЯ КАК-ТО ГРОМОЗДКО
// ХОЧУ ПОПРОБОВАТЬ КАК-ТО ЧЕРЕЗ КОНСТРУКТОР ОБЪЕКТА
// ==============================================================================================================


var copyBtns = document.getElementsByClassName('code-copy-btn');

var _loop2 = function _loop2(_i) {
  var copyBtn = copyBtns[_i];
  copyBtn.addEventListener('click', function (e) {
    var iToolTipX = e.clientX;
    var iToolTipY = e.clientY;
    copyToClipboard(copyBtn, iToolTipX, iToolTipY);
  });
};

for (var _i = 0; _i < copyBtns.length; _i++) {
  _loop2(_i);
}

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
  // Защита от множественного появления подсказок

  var iToolTip = document.querySelector('.info-iToolTip');

  if (!iToolTip) {
    // Создание подсказки
    iToolTip = document.createElement('div');
    iToolTip.className = 'info-iToolTip';
    iToolTip.innerText = 'Copied';
    iToolTip.style.top = "".concat(iToolTipY - 40, "px");
    iToolTip.style.left = "".concat(iToolTipX + 35, "px");
    document.body.appendChild(iToolTip); // Удаление подсказки

    setTimeout(function () {
      document.body.removeChild(iToolTip);
    }, 2500);
  }
}