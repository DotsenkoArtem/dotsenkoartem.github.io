"use strict"; // ОБРАБОТКА МОБИЛЬНОГО МЕНЮ

var windowWidth;
var menuToggle = document.querySelector(".menu-toggle");
var menu = document.querySelector(".top-nav");
var menuOverl = document.querySelector(".top-nav-overl");
var navBarBreakPoint = 768;
initNavBar(menu);
navBarHandle(menuToggle, menu, menuOverl);

window.onresize = function () {
  initNavBar(menu);
};

function initNavBar(menu) {
  windowWidth = document.documentElement.clientWidth;
  var menuInner = menu.querySelector(".menu");
  var menuLevel = 1;

  function setMenuControls(menu, menuLevel) {
    var parentMenuItems = Array.from(menu.childNodes).filter(function (item) {
      return item.nodeType == 1 && item.classList.contains("menu-item-has-children");
    });

    if (parentMenuItems.length > 0) {
      menuLevel++; // - - - - - - - -

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = parentMenuItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var correctSubMenuPosition = function correctSubMenuPosition(subMenu) {
            var coords = subMenu.getBoundingClientRect();
            var subMenuRight = coords.right;
            var subMenusOffsetRight = windowWidth - subMenuRight;

            if (subMenusOffsetRight < 0) {
              if (menuLevel == 2) {
                subMenu.style.left = 'auto';
                subMenu.style.right = '0';
              } else {
                subMenu.style.left = 'auto';
                subMenu.style.right = '100%';
              }
            }
          }; // Применяется только на десктопе


          var parentMenuItem = _step.value;
          var subMenu = parentMenuItem.querySelector(".sub-menu");
          subMenu.setAttribute("data-level", menuLevel);

          if (parentMenuItem.querySelector(".item__angle") === null) {
            var itemAngle = document.createElement("div");
            itemAngle.className = "menu-item__angle item__angle";
            subMenu.after(itemAngle);
          }

          if (subMenu.querySelector(".back-btn") === null) {
            var backBtn = document.createElement("li");
            backBtn.className = "menu-item back-btn";
            backBtn.innerHTML = '<div class="back-btn__arrow"></div><span>Назад</span>';
            subMenu.prepend(backBtn);
          }

          if (windowWidth > navBarBreakPoint) {
            correctSubMenuPosition(subMenu);
          }

          if (subMenu.querySelector(".menu-item-has-children")) {
            setMenuControls(subMenu, menuLevel);
          }
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

  setMenuControls(menuInner, menuLevel);

  if (windowWidth <= navBarBreakPoint) {
    (function () {
      var levelDown = function levelDown(subMenu) {
        subMenu.classList.add("current");
        menuPositionX -= 100;
        menuInner.style.transform = "translateX(".concat(menuPositionX, "%)");
      };

      var levelUp = function levelUp(subMenu) {
        menuPositionX += 100;
        menuInner.style.transform = "translateX(".concat(menuPositionX, "%)");
        subMenu.classList.remove("current");
      };

      var menuPositionX = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var itemAngle = _step2.value;
          var subMenu = itemAngle.previousElementSibling;
          itemAngle.addEventListener("click", function () {
            levelDown(subMenu);
          });
          var backBtn = subMenu.querySelector(".back-btn");
          backBtn.addEventListener("click", function () {
            levelUp(subMenu);
          });
        };

        for (var _iterator2 = menuInner.querySelectorAll(".menu-item__angle")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
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
    })();
  }
}

function navBarHandle(menuToggle, menu, menuOverl) {
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("open");
    menu.classList.toggle("open");
    document.body.classList.toggle("scroll-hidden");
    menuOverl.classList.toggle("open");
  });
  menuOverl.addEventListener("click", menuClose);

  function menuClose() {
    menuToggle.classList.remove("open");
    menu.classList.remove("open");
    document.body.classList.remove("scroll-hidden");
    menuOverl.classList.remove("open");
  }
}