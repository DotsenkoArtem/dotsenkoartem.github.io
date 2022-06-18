/* 
- в данном скрипте применяю цикл for(...), хотя удобнее было бы с .forEach(), по той причине, что не нашел как реализовать его поддержку в IE

-
*/
"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

initSelect();

function initSelect() {
  var selectArr = document.querySelectorAll(".select");
  var wrapper = document.querySelector("#wrapper");

  if (selectArr) {
    var _loop = function _loop(i) {
      var select = selectArr[i],
          defaultOptions = select.querySelectorAll(".select__option"),
          optionsData = completeOptionsData(defaultOptions);
      select.addEventListener("click", function (event) {
        event.stopPropagation();

        if (!select.classList.contains("open")) {
          openSelect(select);
          optionsHandler(select, optionsData);
        } else {
          closeSelect(select);
        }
      });
    };

    for (var i = 0; i < selectArr.length; i++) {
      _loop(i);
    }

    wrapper.addEventListener("click", function () {
      for (var _i = 0; _i < selectArr.length; _i++) {
        var select = selectArr[_i];
        closeSelect(select);
      }
    });
  } else {
    console.log("\u041E\u0448\u0438\u0431\u043A\u0430! \u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F ".concat(selectArr, " \u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430."));
  }
} // = = = = = = = = = = = = = = = = = = = = = = = = = =
// Functions
// Заполнение данных значений пунктов .option


function completeOptionsData(options) {
  var _arr, _arr2;

  var arr = [];

  for (var i = 0; i < options.length; i++) {
    var option = options[i];
    arr.push(option.innerHTML);
  }

  return _arr = arr, _arr2 = _toArray(_arr), _arr;
} // Обработка списка пунктов .option


function optionsHandler(select, optionsData) {
  var options = select.querySelectorAll(".select__option");

  var _loop2 = function _loop2(j) {
    var option = options[j];
    option.addEventListener("click", function () {
      return selectOption(select, option, optionsData);
    });
  };

  for (var j = 0; j < options.length; j++) {
    _loop2(j);
  }
}
/*
  - выбор пункта из списка, 
  - перерисовка списка из изначально полученных данных optionsData с целью упорядоченного его отображения
*/


function selectOption(select, option, optionsData) {
  var optionsBox = select.querySelector(".select__option-box > ul");
  var optionSelected = select.querySelector(".select__option_selected");
  optionSelected.innerHTML = option.innerHTML;
  optionsBox.innerHTML = "";

  for (var i = 0; i < optionsData.length; i++) {
    var data = optionsData[i];
    if (data !== optionSelected.innerHTML) optionsBox.innerHTML += "<li class=\"select__option\">".concat(data, "</li>");
  }
} // Открытие списка .option


function openSelect(select) {
  select.classList.add("open");
} // Закрытие списка .option


function closeSelect(select) {
  select.classList.remove("open");
}