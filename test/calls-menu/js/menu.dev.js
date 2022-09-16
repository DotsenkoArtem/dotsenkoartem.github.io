"use strict"; // ОБРАБОТКА МОБИЛЬНОГО МЕНЮ

var windowWidth;
var navBarBreakPoint = 768;
initNavBar();
// window.onresize = initNavBar;

function initNavBar() {
  windowWidth = document.documentElement.clientWidth;
  var menu = document.querySelector(".top-nav"),
    menuOverl = document.querySelector(".top-nav-overl"),
    body = document.body;
  var menuInner = document.querySelector(".menu");
  var parentItems = document.querySelectorAll(".menu-item-has-children"); // let parentItems = menu.querySelectorAll(".menu > .menu-item-has-children");
  // ?????????????????????????????????????????????????????????????????????????

  var menuLevel = 1;

  function checkMenuLevels(menu) {
    var parentMenuItems = Array.from(menu.childNodes).filter(function (item) {
      return (
        item.nodeType == 1 && item.classList.contains("menu-item-has-children")
      );
    }); // console.log(parentMenuItems);

    if (parentMenuItems.length > 0) {
      menuLevel++;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (
          var _iterator = parentMenuItems[Symbol.iterator](), _step;
          !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
          _iteratorNormalCompletion = true
        ) {
          var parentMenuItem = _step.value;
          var subMenu = parentMenuItem.querySelector(".sub-menu"); // console.log(subMenu);

          subMenu.setAttribute("data-level", menuLevel);

          if (parentMenuItem.querySelector(".item__angle") === null) {
            var itemAngle = document.createElement("div");
            itemAngle.className = "menu-item__angle item__angle";
            subMenu.after(itemAngle);
          }

          if (subMenu.querySelector(".back-btn") === null) {
            var backBtn = document.createElement("li");
            backBtn.className = "menu-item back-btn";
            backBtn.innerHTML =
              '<div class="back-btn__arrow"></div><span>назад</span>';
            subMenu.prepend(backBtn);
          }

          checkMenuLevels(subMenu);
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
    } else {
      return;
    }
  }

  checkMenuLevels(menuInner); // ?????????????????????????????????????????????????????????????????????????
  // -------------------------------------------

  if (windowWidth > navBarBreakPoint) {
    // for (let i = 0; i < parentItems.length; i++) {
    //   let parentItem = parentItems[i];
    //   let subMenu = parentItem.querySelector(".sub-menu");
    //   let itemAngle = parentItem.querySelector(".item__angle");
    //   parentItem.addEventListener("mouseover", function () {
    //     subMenu.classList.add("show");
    //     itemAngle.classList.add("open");
    //     parentItem.addEventListener("mouseout", function (event) {
    //       subMenu.classList.remove("show");
    //       itemAngle.classList.remove("open");
    //     });
    //   });
    // }
  } else {
    (function () {
      var menuClose = function menuClose() {
        menuToggle.classList.remove("open");
        menu.classList.remove("open");
        body.classList.remove("scroll-hidden");
        menuOverl.classList.remove("open");
      }; // --------------------------------------
      // --------------------------------------
      // for (let i = 0; i < parentItems.length; i++) {
      //   let parentItem = parentItems[i];
      //   let subMenu = parentItem.querySelector(".sub-menu");
      //   for (let elem of parentItem.children) {
      //     if (elem.matches(".item__angle")) {
      //       elem.addEventListener("click", function () {
      //         console.log("Кликк");
      //         levelDown(subMenu);
      //       });
      //     }
      //   }

      var levelDown = function levelDown(subMenu) {
        // if (parentItem.querySelector(".back-btn") === null) {
        //   subMenu.prepend(backBtn);
        // }
        subMenu.classList.add("current"); // menuInner.classList.add("hidden");

        menuPositionX -= 100;
        console.log(menuPositionX);
        menuInner.style.transform = "translateX(".concat(menuPositionX, "%)");
      }; //   backBtn.addEventListener("click", function () {
      //     levelUp(subMenu);
      //   });

      var levelUp = function levelUp(subMenu) {
        // menuInner.classList.remove("hidden");
        menuPositionX += 100;
        menuInner.style.transform = "translateX(".concat(menuPositionX, "%)");
        subMenu.classList.remove("current");
      }; // }

      var menuToggle = document.querySelector(".menu-toggle");
      menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("open");
        menu.classList.toggle("open");
        body.classList.toggle("scroll-hidden");
        menuOverl.classList.toggle("open");
      });
      menuOverl.addEventListener("click", menuClose);
      var menuPositionX = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var itemAngle = _step2.value;
          var subMenu = itemAngle.previousElementSibling; // console.log(subMenu);

          itemAngle.addEventListener("click", function () {
            // console.log("Работает");
            levelDown(subMenu);
          });
          var backBtn = subMenu.querySelector(".back-btn"); // console.log(backBtn);

          backBtn.addEventListener("click", function () {
            levelUp(subMenu);
          });
        };

        for (
          var _iterator2 = menuInner
              .querySelectorAll(".menu-item__angle")
              [Symbol.iterator](),
            _step2;
          !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
          _iteratorNormalCompletion2 = true
        ) {
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
} // //------------------------------------------------------------------------------
// +d
//   parentItem.addEventListener("mouseover", function () {
//     subMenu.classList.add("show");
//   });
//   parentItem.addEventListener("mouseout", function (event) {
//     subMenu.classList.remove("show");
//   });
// +d
//   const wrapper = document.getElementById("wrapper");
//   parentItem.addEventListener("click", function (event) {
//     event.stopPropagation();
//   });
//   wrapper.addEventListener("click", function () {
//     subMenu.classList.remove("show");
//   });
//   body.addEventListener("click", function () {
//     subMenu.classList.remove("show");
//   });
//   console.log(body);
// }
