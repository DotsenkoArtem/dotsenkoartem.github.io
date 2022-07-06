"use strict";

setRange(".my-range");

function setRange(rangeClass) {
  // Создание DOM-структуры
  var range = document.querySelector(rangeClass);
  range.classList.add("range");
  var rangeWrapper = document.createElement("div");
  rangeWrapper.className = "range-wrapper";
  range.before(rangeWrapper);
  rangeWrapper.append(range);
  var rangeRest = document.createElement("div");
  rangeRest.className = "range__rest";
  range.append(rangeRest);
  var rangeProgress = document.createElement("div");
  rangeProgress.className = "range-progress range__progress";
  range.append(rangeProgress);
  var rangeSlider = document.createElement("div");
  rangeSlider.className = "range-slider range-progress__slider";
  rangeProgress.append(rangeSlider);
  var rangeCurrent = document.createElement("div");
  rangeCurrent.className = "range-current";
  rangeCurrent.innerText = "0%";
  rangeWrapper.append(rangeCurrent); // -----------
  // Установка Range

  var startMouseX = rangeProgress.getBoundingClientRect().x;
  var shiftX;
  rangeSlider.addEventListener("pointerdown", function (event) {
    // event.preventDefault();
    rangeSlider.setPointerCapture(event.pointerId);
    rangeSlider.addEventListener("pointermove", sliderMove);
    rangeSlider.addEventListener("pointerup", function () {
      rangeSlider.removeEventListener("pointermove", sliderMove);
    });
  });
  range.addEventListener("click", function (e) {
    sliderMove(e, 0.3);
  }); // Отмена стандартного браузерного Drag&Drop

  rangeProgress.ondragstart = function () {
    return false;
  }; // Вычисление shiftX


  function setShiftX(e) {
    if (e.clientX - startMouseX <= 0) return 0;
    return e.clientX - startMouseX >= range.clientWidth ? range.clientWidth : e.clientX - startMouseX;
  } // -----------
  // Вычисление размеров и установка позиционирования элементов Range


  function calcRange() {
    rangeProgress.style.right = "".concat(range.clientWidth - shiftX, "px");
    rangeRest.style.left = "".concat(shiftX, "px");
    rangeCurrent.innerHTML = "".concat(Math.round(shiftX / range.clientWidth * 100), "%");
  } // -----------
  // Обработка перемещения ползунка


  function sliderMove(e) {
    var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    range.style.transition = "".concat(transition, "s");
    shiftX = setShiftX(e);
    calcRange();
  } // -----------

}