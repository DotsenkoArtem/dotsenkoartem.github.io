"use strict"; // ОБРАБОТКА МОБИЛЬНОГО МЕНЮ

var menuToggle = document.querySelector('.top-menu-toggle'),
    menu = document.querySelector('.top-nav'),
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
} // let setupMenuDash = function(){
// 	const menuDashed	= document.querySelector('.top-menu_underlined');
// 	const menuItems		= menuDashed.querySelectorAll('.top-menu__item > a');
// 	for (let menuItem of menuItems) {
// 		let dash = document.createElement('div');
// 		dash.className = 'menu-dash';
// 		menuItem.append(dash);
// 		menuItem.addEventListener('mouseover', function() {
// 			dash.classList.remove('shrink-right');
// 			dash.classList.add('grow-right');
// 		})
// 		menuItem.addEventListener('mouseout', function() {
// 			dash.classList.remove('grow-right');
// 			dash.classList.add('shrink-right');
// 		})
// 	}
// }
// setupMenuDash();
// COMPONENT`S CODE
// ===================================================
// ОБРАБОТКА ПОДЧЕРКИВАНИЯ ПУНКТОВ МЕНЮ


var menuDashed = document.querySelector('.top-menu_underlined.responsive');
var menuItems = menuDashed.querySelectorAll('.top-menu__item > a');
var windowWidth = window.innerWidth;

function setupMenuDashResponsive() {
  if (menuItems) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = menuItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var menuItem = _step.value;
        var dash = document.createElement('div');
        dash.className = 'menu-dash';
        menuItem.append(dash);
        menuDashHandler(menuItem, dash);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}

function menuDashHandler(item, dash) {
  // Определение середины пункта меню
  var menuItemMiddle = item.getBoundingClientRect().x + item.getBoundingClientRect().width / 2;
  item.addEventListener('mouseover', function (e) {
    dash.className = 'menu-dash'; //Сброс всех лишних классов (появления и исчезания)

    menuItemMiddle >= e.clientX ? dash.classList.add('grow-right') : dash.classList.add('grow-left');
    console.log("menuItemMiddle: ".concat(menuItemMiddle));
    console.log("e.clientX: ".concat(e.clientX));
  });
  item.addEventListener('mouseout', function (e) {
    dash.className = 'menu-dash';
    menuItemMiddle >= e.clientX ? dash.classList.add('shrink-left') : dash.classList.add('shrink-right');
  });
} // Запуск установки только на мобильных


if (windowWidth >= 992) {
  setupMenuDashResponsive();
} // Обработка при изменении экрана


window.onresize = function () {
  windowWidth = window.innerWidth;
  var dash = document.querySelector('.menu-dash'); //Получить .dash

  if (windowWidth >= 992) {
    if (dash) {
      //Если хоть одна .dash существует
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = menuItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var menuItem = _step2.value;

          var _dash = menuItem.querySelector('.menu-dash'); //то получаем все имеющиеся в меню


          _dash.className = 'menu-dash'; //и сбрасываем лишние стили

          menuDashHandler(menuItem, _dash); //и обработка снова
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    } else {
      setupMenuDashResponsive(); //если .dash не существует - просто установка
    }
  } else {
    //Удаление всех .dash на мобильном
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = menuItems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _menuItem = _step3.value;

        var _dash2 = _menuItem.querySelector('.menu-dash');

        if (_dash2) {
          _dash2.remove();
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }
}; // END OF COMPONENT`S CODE
// ===================================================