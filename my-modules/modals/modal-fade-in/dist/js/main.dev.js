"use strict"; // Получение массива кнопок открытия

var modalOpenBtns = document.querySelectorAll('.modal-trigger');

if (modalOpenBtns) {
  var _loop = function _loop(i) {
    var modalOpenBtn = modalOpenBtns[i];
    modalOpenBtn.addEventListener('click', function () {
      openModal(modalOpenBtn);
    });
  };

  for (var i = 0; i < modalOpenBtns.length; i++) {
    _loop(i);
  }
} // Functions


function openModal(modalOpenBtn) {
  var modal = document.getElementById(modalOpenBtn.dataset.target);
  modal.classList.remove('closed');
  modal.classList.add('opened');
  var modalCloseBtns = modal.getElementsByClassName('modal-close');

  for (var _i = 0; _i < modalCloseBtns.length; _i++) {
    var modalCloseBtn = modalCloseBtns[_i];
    modalCloseBtn.addEventListener('click', function () {
      closeModal(modal);
    });
  }
}

function closeModal(modal) {
  modal.classList.remove('opened');
  modal.classList.add('closed');
}