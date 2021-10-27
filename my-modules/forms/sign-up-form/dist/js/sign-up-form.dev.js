"use strict";

// ФУНКЦИОНАЛ "ПОКАЗАТЬ - СКРЫТЬ ПАРОЛЬ"
var formGroupPasses = document.querySelectorAll('.form__group_pass');

var _loop = function _loop(i) {
  var showPass = formGroupPasses[i].querySelector('.show-pass');
  var passInput = formGroupPasses[i].querySelector('input[type="password"]');
  showPass.addEventListener('click', function () {
    if (passInput.type == 'password') {
      passInput.type = 'text';
      showPass.classList.add('shown');
    } else {
      passInput.type = 'password';
      showPass.classList.remove('shown');
    }
  });
};

for (var i = 0; i < formGroupPasses.length; i++) {
  _loop(i);
} // - - - - - - - - - - - - - - - - - - - - - - - - - 
// ПОЛУЧЕНИЕ ВСЕХ ФОРМ ДОКУМЕНТА


var forms = document.forms;

var _loop2 = function _loop2(_i) {
  var form = forms[_i];
  var submitBtn = form.querySelector('[type="submit"]');
  var userPass = form.userPass;
  var userPassConfirm = form.userPassReplay;
  var showPassConfirm = userPassConfirm.parentElement.querySelector('.show-pass'); // ДОБАВЛЕНИЕ-УДАЛЕНИЕ ФОКУСА НА ТЕКСТОВЫЕ ИНПУТЫ

  for (var j = 0; j < form.elements.length; j++) {
    if (form.elements[j].classList.contains('form__control')) {
      (function () {
        var ElementInput = form.elements[j];
        ElementInput.addEventListener('focus', addFocus);
        ElementInput.addEventListener('input', function () {
          if (userPassConfirm.value) {
            userPassConfirm.parentElement.classList.remove('error');
            userPassConfirm.parentElement.classList.add('valid');
          }

          if (ElementInput.value) {
            ElementInput.parentElement.classList.remove('focused');
            ElementInput.parentElement.classList.add('valid');
          } else {
            ElementInput.parentElement.classList.remove('valid');
          }
        });
        ElementInput.addEventListener('blur', removeFocus);
      })();
    }
  }

  function addFocus() {
    if (!this.parentElement.classList.contains('error')) {
      this.parentElement.classList.add('focused');
    }
  }

  function removeFocus() {
    this.parentElement.classList.remove('focused');
  } // ОБРАБОТКА ВАЛИДАЦИИ ФОРМЫ ПЕРЕД ОТПРАВКОЙ


  submitBtn.addEventListener('click', function (event) {
    // Получение input[required] для валидации браузером
    var requiredInputs = form.querySelectorAll('[required]');
    var count = 0;

    for (var _i2 = 0; _i2 < requiredInputs.length; _i2++) {
      var requiredInput = requiredInputs[_i2];
      requiredInput.validity.valid ? count++ : count; // Отмена действия кнопки при условии валидации полей браузером

      if (count == requiredInputs.length) {
        event.preventDefault();

        if (!userPass.value || !userPassConfirm.value) {
          alert("Поля формы не заполнены!");
          return;
        }

        if (userPass.value !== userPassConfirm.value) {
          showError();
        } else {
          alert('Успешно! Форма не отправляется.');
          window.location = '#';
        }
      }
    }
  });

  function showError() {
    setTimeout(function () {
      userPassConfirm.parentElement.classList.remove('valid');
      userPassConfirm.parentElement.classList.add('error');
      userPassConfirm.type = 'text';
      showPassConfirm.classList.add('shown');
      alert('Демонстрация ошибки. Форма не отправляется.');
    }, 1000);
  }
};

for (var _i = 0; _i < forms.length; _i++) {
  _loop2(_i);
}