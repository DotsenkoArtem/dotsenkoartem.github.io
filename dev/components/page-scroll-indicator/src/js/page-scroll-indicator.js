"use strict";

pageScrollIndicatorInit();

function pageScrollIndicatorInit() {
  const pageScrollIndicator = document.querySelector(".page-scroll-indicator");
  const pageScrollIndicatorStrip = pageScrollIndicator.querySelector(
    ".page-scroll-indicator__strip"
  );
  let documentHeight;
  let windowHeight;

  // Получить параметры окна и документа
  function getWindowParams() {
    documentHeight = document.documentElement.offsetHeight;
    windowHeight = document.documentElement.clientHeight;
  }
  // Вычисление величины прокрутки (в %) и усановка ширины индикатора
  function setPageScrollIndicator() {
    getWindowParams();
    pageScrollIndicatorStrip.style.width = `${
      Math.floor((window.scrollY / (documentHeight - windowHeight)) * 10000) /
      100
    }%`;

    pageScrollIndicatorValue.innerHTML = `${Math.round(parseInt(pageScrollIndicatorStrip.style.width))}%`;
  }

  setPageScrollIndicator();
  // Выполнение функции при скролле и изменении размеров окна браузера
  window.addEventListener("scroll", setPageScrollIndicator);
  window.addEventListener("resize", setPageScrollIndicator);
}