"use strict";
setRange(".my-range");

function setRange(rangeClass) {
  // Создание DOM-структуры
  const range = document.querySelector(rangeClass);
  range.classList.add("range");

  const rangeWrapper = document.createElement("div");
  rangeWrapper.className = "range-wrapper";
  range.before(rangeWrapper);

  rangeWrapper.append(range);

  const rangeRest = document.createElement("div");
  rangeRest.className = "range__rest";
  range.append(rangeRest);

  const rangeProgress = document.createElement("div");
  rangeProgress.className = "range-progress range__progress";
  range.append(rangeProgress);

  const rangeSlider = document.createElement("div");
  rangeSlider.className = "range-slider range-progress__slider";
  rangeProgress.append(rangeSlider);

  const rangeCurrent = document.createElement("div");
  rangeCurrent.className = "range-current";
  rangeCurrent.innerText = "0%";
  rangeWrapper.append(rangeCurrent);
  // -----------

  // Установка Range
  const startMouseX = rangeProgress.getBoundingClientRect().x;
  let shiftX;

  rangeSlider.addEventListener("pointerdown", function (event) {
    // event.preventDefault();
    rangeSlider.setPointerCapture(event.pointerId);

    rangeSlider.addEventListener("pointermove", sliderMove);

    rangeSlider.addEventListener("pointerup", () => {
      rangeSlider.removeEventListener("pointermove", sliderMove);
    });
  });

  range.addEventListener("click", (e) => {
    sliderMove(e, 0.3);
  });

  // Отмена стандартного браузерного Drag&Drop
  rangeProgress.ondragstart = () => false;

  // Вычисление shiftX
  function setShiftX(e) {
    if (e.clientX - startMouseX <= 0) return 0;
    return e.clientX - startMouseX >= range.clientWidth
      ? range.clientWidth
      : e.clientX - startMouseX;
  }
  // -----------

  // Вычисление размеров и установка позиционирования элементов Range
  function calcRange() {
    rangeProgress.style.right = `${range.clientWidth - shiftX}px`;
    rangeRest.style.left = `${shiftX}px`;
    rangeCurrent.innerHTML = `${Math.round(
      (shiftX / range.clientWidth) * 100
    )}%`;
  }
  // -----------

  // Обработка перемещения ползунка
  function sliderMove(e, transition = 0) {
    range.style.transition = `${transition}s`;
    shiftX = setShiftX(e);
    calcRange();
  }
  // -----------
}
