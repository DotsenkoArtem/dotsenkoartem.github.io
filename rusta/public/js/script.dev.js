"use strict";

// PAGE PRELOADER
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
window.addEventListener("load", removePreloader);
function removePreloader() {
  var PRELOADERTRANSITION = 1000;
  preloader.style.transition = "opacity ".concat(PRELOADERTRANSITION, "ms");
  preloader.classList.add("fade-out");
  setTimeout(function () {
    preloader.remove();
  }, PRELOADERTRANSITION);
}
// - - - - - - - - - - - - - - - - - - -

var menuToggle = document.querySelector(".js-navbar-mobile-trigger");
var menu = document.querySelector(".js-navbar-mobile");
// const menuOverl = document.querySelector(".js-overl");
// const navBarBreakPoint = 768;

document.addEventListener("DOMContentLoaded", function () {
  // initNavBar(menu);
  // navBarHandle(menuToggle, menu, menuOverl);
  navBarHandle(menuToggle, menu);
});

// Открытие-закрытие мобильного навбара
function navBarHandle(menuToggle, menu) {
  var items = menu.querySelectorAll(".js-menu-item");
  var isDelay;
  function menuItemsAddDelay(menu) {
    var delay = 0.2;
    var _iterator = _createForOfIteratorHelper(items),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        delay += 0.05;
        item.style.transitionDelay = "".concat(delay, "s");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    isDelay = true;
  }
  function menuItemsRemoveDelay(menu) {
    var _iterator2 = _createForOfIteratorHelper(items),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        item.style.transitionDelay = "";
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    isDelay = false;
  }
  menuToggle.addEventListener("click", function () {
    isDelay ? menuItemsRemoveDelay(menu) : menuItemsAddDelay(menu);
    menuToggle.classList.toggle("open");
    menu.classList.toggle("open");
    document.body.classList.toggle("scroll-hidden");
    // menuOverl.classList.toggle("open");
  });

  // menuOverl.addEventListener("click", menuClose);

  function menuClose() {
    menuItemsRemoveDelay(menu);
    menuToggle.classList.remove("open");
    menu.classList.remove("open");
    document.body.classList.remove("scroll-hidden");
    // menuOverl.classList.remove("open");
  }
}

// Получение массива кнопок открытия
var modalOpenBtns = document.querySelectorAll(".js-modal-trigger");
if (modalOpenBtns) {
  var _loop = function _loop() {
    var modalOpenBtn = modalOpenBtns[i];
    modalOpenBtn.addEventListener("click", function () {
      openModal(modalOpenBtn);
    });
  };
  for (var i = 0; i < modalOpenBtns.length; i++) {
    _loop();
  }
}

// Functions
function openModal(modalOpenBtn) {
  var modal = document.getElementById(modalOpenBtn.dataset.target);
  modal.classList.remove("closed");
  modal.classList.add("opened");
  // document.body.classList.add("scroll-hidden");

  var modalCloseBtns = modal.getElementsByClassName("js-modal-close");
  for (var _i = 0; _i < modalCloseBtns.length; _i++) {
    var modalCloseBtn = modalCloseBtns[_i];
    modalCloseBtn.addEventListener("click", function () {
      closeModal(modal);
    });
  }
}
function closeModal(modal) {
  modal.classList.remove("opened");
  modal.classList.add("closed");
  // document.body.classList.remove("scroll-hidden");
}