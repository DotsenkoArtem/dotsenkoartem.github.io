/* Функционал табов
================================================== */
const tabsBoxes = document.querySelectorAll(".tabs");

for (let i = 0; i < tabsBoxes.length; i++) {
  // Получение массива всех заголовков вкладок
  let tabTitles = tabsBoxes[i].querySelectorAll(".tab__caption");

  // Получение .tabs__content (родитель для элемнтов с контентом вкладок)
  let tabsContent = tabsBoxes[i].querySelector(".tabs__content");

  // Получение всех элементов с контентом вкладок
  const tabPanes = tabsContent.querySelectorAll(".tab__pane");

  for (let i = 0; i < tabTitles.length; i++) {
    let tabTitle = tabTitles[i];

    tabTitle.addEventListener("click", function () {
      // Убираем класс "active" со всех заголовков вкладок
      for (let j = 0; j < tabTitles.length; j++) {
        tabTitles[j].classList.remove("active");
      }

      // Установка активной вкладки и получение ID требуемого элемента с контентом
      let tabPaneId = "#" + this.dataset.target;
      this.classList.add("active");

      // Убираем класс "active" со всех элементов с контентом
      for (let k = 0; k < tabPanes.length; k++) {
        tabPanes[k].classList.remove("active");
      }

      // Установка аактивного элемента  контентом вкладки
      tabsContent.querySelector(tabPaneId).classList.add("active");
    });
  }
}

/* Функционал копирования контента вкладок в буфер обмена
================================================== */
const copyBtns = document.getElementsByClassName("code-copy-btn");

for (let i = 0; i < copyBtns.length; i++) {
  let copyBtn = copyBtns[i];
  copyBtn.addEventListener("click", (e) => {
    // Координаты клика по кнопке
    let iToolTipX = e.pageX;
    let iToolTipY = e.pageY;
    copyToClipboard(copyBtn, iToolTipX, iToolTipY);
  });
}

/* Functions
================================================== */

function copyToClipboard(copyBtn, iToolTipX, iToolTipY) {
  let itemToCopy = document.getElementById(copyBtn.dataset.target).innerText;
  let el = document.createElement("textarea");
  el.value = itemToCopy;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  // TOOLTIP
  // Проверка на наличие посказки
  let iToolTip = document.querySelector(".info-iToolTip");
  if (!iToolTip) {
    // Creating tooltip
    iToolTip = document.createElement("div");
    iToolTip.className = "info-tooltip";
    iToolTip.innerText = "Copied";
    document.body.appendChild(iToolTip);

    setPosition(iToolTipX, iToolTipY, iToolTip);

    // Removing tooltip
    setTimeout(() => {
      document.body.removeChild(iToolTip);
    }, 1500);
  }
}

function setPosition(iToolTipX, iToolTipY, iToolTip) {
  // Отступ подсказки от клика
  let iToolTipoOffsetLeft = 35;
  // Проверка на полное отображение подсказки в окне браузера
  // Если не выходит за рамки окна, то позиционирую на "iToolTipoOffsetLeft" px правее клика
  // Условие (ширина видимой части окна >= координата клика Х + отступ от клика до подсказки + ширина подсказки)
  if (
    document.documentElement.clientWidth >=
    iToolTipX + iToolTipoOffsetLeft + iToolTip.offsetWidth
  ) {
    iToolTip.style.left = `${iToolTipX + iToolTipoOffsetLeft}px`;
  } else {
    // Если выходит за границы окна, то приклеиваю к правой границе окна + 15px
    iToolTip.style.left = "auto";
    iToolTip.style.right = `15px`;
  }
  iToolTip.style.top = `${iToolTipY - 40}px`;
}
