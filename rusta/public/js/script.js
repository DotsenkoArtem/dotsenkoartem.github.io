"use strict";

// PAGE PRELOADER
window.addEventListener("load", removePreloader);
function removePreloader() {
  const PRELOADERTRANSITION = 1000;
  preloader.style.transition = `opacity ${PRELOADERTRANSITION}ms`;
  preloader.classList.add("fade-out");

  setTimeout(function () {
    preloader.remove();
  }, PRELOADERTRANSITION);
}
// - - - - - - - - - - - - - - - - - - -

const menuToggle = document.querySelector(".js-navbar-mobile-trigger");
const menu = document.querySelector(".js-navbar-mobile");
// const menuOverl = document.querySelector(".js-overl");
// const navBarBreakPoint = 768;

document.addEventListener("DOMContentLoaded", () => {
  // initNavBar(menu);
  // navBarHandle(menuToggle, menu, menuOverl);
  navBarHandle(menuToggle, menu);
});

// Открытие-закрытие мобильного навбара
function navBarHandle(menuToggle, menu) {
  const items = menu.querySelectorAll(".js-menu-item");

  let isDelay;

  function menuItemsAddDelay(menu) {
    let delay = 0.2;
    for (let item of items) {
      delay += 0.05;
      item.style.transitionDelay = `${delay}s`;
    }
    isDelay = true;
  }

  function menuItemsRemoveDelay(menu) {
    for (let item of items) {
      item.style.transitionDelay = ``;
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
const modalOpenBtns = document.querySelectorAll(".js-modal-trigger");

if (modalOpenBtns) {
  for (let i = 0; i < modalOpenBtns.length; i++) {
    let modalOpenBtn = modalOpenBtns[i];
    modalOpenBtn.addEventListener("click", () => {
      openModal(modalOpenBtn);
    });
  }
}

// Functions
function openModal(modalOpenBtn) {
  let modal = document.getElementById(modalOpenBtn.dataset.target);
  modal.classList.remove("closed");
  modal.classList.add("opened");
  // document.body.classList.add("scroll-hidden");

  let modalCloseBtns = modal.getElementsByClassName("js-modal-close");

  for (let i = 0; i < modalCloseBtns.length; i++) {
    let modalCloseBtn = modalCloseBtns[i];
    modalCloseBtn.addEventListener("click", () => {
      closeModal(modal);
    });
  }
}

function closeModal(modal) {
  modal.classList.remove("opened");
  modal.classList.add("closed");
  // document.body.classList.remove("scroll-hidden");
}