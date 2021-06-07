"use strict"; // ОБРАБОТКА МОБИЛЬНОГО МЕНЮ

var menuToggle = document.querySelector('.menu-toggle'),
    navMob = document.querySelector('.nav-mob'),
    navMobOverl = document.querySelector('.nav-mob-overl');
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('open');
  navMob.classList.toggle('open');
  document.body.classList.toggle('scroll-hidden');
  navMobOverl.classList.toggle('open');
});
navMobOverl.addEventListener('click', menuClose);

function menuClose() {
  menuToggle.classList.remove('open');
  navMob.classList.remove('open');
  document.body.classList.remove('scroll-hidden');
  navMobOverl.classList.remove('open');
} //------------------------------------------------------------------------------


var modalOverlay = document.querySelector(".modal__overlay"),
    closeButtons = document.querySelectorAll(".modal__close"),
    openButton = document.querySelector(".modal-trigger"); // ОТКРЫТИЕ МОДАЛЬНОГО ОКНА

openButton.addEventListener("click", function () {
  openModalById('#modal');
}); // ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function () {
    closeModal('#modal');
  });
} // ФУНКЦИЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА ПО ID


function openModalById(modalId) {
  var modal = document.querySelector(modalId);
  modal.classList.remove('closed');
  modal.classList.add('open');
  document.documentElement.classList.add('scroll-hidden');
} // ФУНКЦИЯ ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА ПО ID


function closeModal(modalId) {
  var modal = document.querySelector(modalId);
  modal.classList.remove('open');
  modal.classList.add('closed');
  document.documentElement.classList.remove('scroll-hidden');
}