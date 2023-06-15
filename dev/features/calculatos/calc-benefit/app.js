"use strict";
function calcinit() {
  // Исходные данные ПМ и детского ПМ
  const minWage = 13000;
  const minWageChildren = 13066;
  // Получение html-элементов
  const incom = document.querySelector(".js-incom");
  const familyMembers = document.querySelector(".js-family-members");
  const children = document.querySelector(".js-family-children");
  const familyMemberIncomePerMonth = document.querySelector(
    ".js-family-member-income-per-month"
  );
  const output = document.querySelector(".js-output");

  // Получение инпутов, кроме тех которые нельзя редактировать (Среднедушевой доход семьи, Размер пособия)
  let calcControls = document.querySelectorAll(
    ".calc__control:not([readonly])"
  );

  // Ограничение минимального значения полей: общий доход, количество членов семьи и количество детей
  calcControls.forEach((elem) => {
    elem.addEventListener("input", function () {
      if (Number(elem.value) < Number(elem.min)) {
        elem.value = elem.min;
      }
    });
  });

  // ОГРАНИЧЕНИЕ ПРИ ВВОДЕ КОЛИЧЕСТВА ЧЛЕНОВ СЕМЬИ
  familyMembers.addEventListener("input", () => {
    // Количество членов семьи не должно превышать количество детей на 2 человека
    if (Number(familyMembers.value) - Number(children.value) > 2) {
      children.value = Number(familyMembers.value) - 2;
    }
    // Количество детей должно быть не больше количества членов семьи - 1 чел, т.е. должен быть хотя бы 1 родитель
    if (Number(familyMembers.value) - Number(children.value) < 1) {
      children.value = Number(familyMembers.value) - 1;
    }
  });

  // ОГРАНИЧЕНИЕ ПРИ ВВОДЕ КОЛИЧЕСТВА ДЕТЕЙ
  children.addEventListener("input", () => {
    // Количество членов семьи не должно превышать количество детей на 2 человека
    if (Number(familyMembers.value) - Number(children.value) > 2) {
      familyMembers.value = Number(children.value) + 2;
    }
    // Количество детей должно быть не больше количества членов семьи - 1 чел, т.е. должен быть хотя бы 1 родитель
    if (Number(familyMembers.value) - Number(children.value) < 1) {
      familyMembers.value = Number(children.value) + 1;
    }
  });

  calc();

  function calc() {
    // Установка Среднедушевого дохода семьи
    familyMemberIncomePerMonth.value = (
      incom.value /
      12 /
      familyMembers.value
    ).toFixed(2);

    // Расчет минимального дохода на каждого члена семьи для получения:
    // - пособия величиной 100%
    let memberIncom100 =
      (incom.value / 12 + 0.75 * minWageChildren * children.value) /
      familyMembers.value;
    // - пособия величиной 75%
    let memberIncom75 =
      (incom.value / 12 + 0.5 * minWageChildren * children.value) /
      familyMembers.value;
    // - пособия величиной 50%
    let memberIncom50 = incom.value / 12 / familyMembers.value;

    // Условие получения 100% пособия
    if (memberIncom100 < minWage) {
      output.value = `100`;
      // Условие получения 750% пособия
    } else if (memberIncom75 < minWage) {
      output.value = `75`;
      // Условие получения 50% пособия
    } else if (memberIncom50 < minWage) {
      output.value = `50`;
    } else {
      output.value = `Пособие не полагается`;
    }

    // При измененияи полей ввода - пересчет данных
    calcControls.forEach((elem) => (elem.onchange = calc));
  }
}

document.addEventListener("DOMContentLoaded", calcinit);
