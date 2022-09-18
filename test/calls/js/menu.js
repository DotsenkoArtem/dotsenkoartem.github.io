"use strict";

// ОБРАБОТКА МОБИЛЬНОГО МЕНЮ
let windowWidth;
let menuPositionX = 0;

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".top-nav");
const menuOverl = document.querySelector(".top-nav-overl");
const navBarBreakPoint = 768;

initNavBar(menu);
navBarHandle(menuToggle, menu, menuOverl);

window.onresize = function () {
  initNavBar(menu);
};


function initNavBar(menu) {
  windowWidth = document.documentElement.clientWidth;

  let menuInner = menu.querySelector(".menu");
  let menuLevel = 1;


  function setMenuControls(menu, menuLevel) {

    let parentMenuItems = Array.from(menu.childNodes).filter(
      (item) =>
        item.nodeType == 1 && item.classList.contains("menu-item-has-children")
    );

    if (parentMenuItems.length > 0) {
      menuLevel++;

      for (let parentMenuItem of parentMenuItems) {
        let menuItemLbel = parentMenuItem.querySelector(".menu-item-lbel");
        let subMenu = parentMenuItem.querySelector(".sub-menu");
        
        subMenu.setAttribute("data-level", menuLevel);

        if (parentMenuItem.querySelector(".item__angle") === null) {
          let itemAngle = document.createElement("div");
          itemAngle.className = "menu-item__angle item__angle";

          // subMenu.after(itemAngle);
          menuItemLbel.append(itemAngle);
        }

        if (subMenu.querySelector(".back-btn") === null) {
          let backBtn = document.createElement("li");
          backBtn.className = "menu-item back-btn";
          backBtn.innerHTML =
            '<div class="back-btn__arrow"></div><span>Назад</span>';

          subMenu.prepend(backBtn);
        }

        function correctSubMenuPosition(subMenu) {

          let coords = subMenu.getBoundingClientRect();
          let subMenuRight = coords.right;
          let subMenusOffsetRight = windowWidth - subMenuRight;

          if (windowWidth >= navBarBreakPoint) {


            if (subMenusOffsetRight < 0) {
              if (menuLevel == 2) {
                subMenu.style.left = "auto";
                subMenu.style.right = "0";
              } else if(menuLevel == 3) {
                subMenu.style.left = "auto";
                subMenu.style.right = "100%";
              }
            }

          } else if(windowWidth < navBarBreakPoint) {
            // А МОЖЕТ И ТАК ПОЙДЕТ - ПРОСТО СБРОС
            subMenu.style = '';




            // if (menuLevel == 2) {
            //   subMenu.style.left = "0";
            //   subMenu.style.right = "auto";
            // } else if (menuLevel == 3) {
            //   subMenu.style.left = "100%";
            //   subMenu.style.right = "auto";
            // }
          }




        } //Конец функции

        // Применяется только на десктопе
        // if (windowWidth >= navBarBreakPoint) {
        correctSubMenuPosition(subMenu);
        // }

        if (subMenu.querySelector(".menu-item-has-children")) {
          setMenuControls(subMenu, menuLevel);
        }

      }
    }
  }

  setMenuControls(menuInner, menuLevel);

  changeMenuLevel();

  function changeMenuLevel() {

    // for (let itemAngle of menuInner.querySelectorAll(".menu-item__angle")) {
    for (let menuItemHasChildren of menuInner.querySelectorAll(".menu-item-has-children")) {

      let subMenu = menuItemHasChildren.querySelector('.sub-menu');
      let backBtn = subMenu.querySelector(".back-btn");
      let itemAngle = menuItemHasChildren.querySelector(".menu-item-lbel > .menu-item__angle");


      let levelDown = function () {
        subMenu.classList.add("current");
        menuPositionX -= 100;
        menuInner.style.transform = `translateX(${menuPositionX}%)`;
      };
      let levelUp = function () {
        menuPositionX += 100;
        menuInner.style.transform = `translateX(${menuPositionX}%)`;
        subMenu.classList.remove("current");
      };

      if (windowWidth < navBarBreakPoint) {
        // Не использую adEventListener, так как их при ресайзе очень много и хрен всех удалишь, а onclick - запросто!
        itemAngle.onclick = levelDown;
        backBtn.onclick = levelUp;
        console.log(menuPositionX);
      }
// ЗАКОНЧИЛ ЗДЕСЬ
      if (windowWidth >= navBarBreakPoint) {
        itemAngle.onclick = '';
        // Этой кнопки нет на обильном

        backBtn.onclick = '';

        // С ЭТОЙ ШТУКОЙ НАДО ЧТО_ТО ДЕЛАТЬ
        menuPositionX = 0;
        // Изменил menuInner.style.transform = `translateX(${menuPositionX}%)`; на style = '' и меню не стало пропадать за облаками
        menuInner.style.transform = ``;
        // subMenu.classList.remove("current");
        // ==============================================
      }
    }
  }


}

// Открытие-закрытие мобильного навбара
function navBarHandle(menuToggle, menu, menuOverl) {

  const items = menu.querySelectorAll('.menu > .menu-item');
  
  let isDelay;

  // menuItemsAddDelay(menu);
  function menuItemsAddDelay(menu) {
    let delay = 0.2;
    for(let item of items) {
      delay += 0.06;
      item.style.transitionDelay = `${delay}s`;
    }
    isDelay = true;
  }

  function menuItemsRemoveDelay(menu) { 
    for(let item of items) {
      item.style.transitionDelay = ``;
    }
    isDelay = false;
  }


  menuToggle.addEventListener("click", function () {
    isDelay ? menuItemsRemoveDelay(menu) : menuItemsAddDelay(menu);
    menuToggle.classList.toggle("open");
    menu.classList.toggle("open");
    document.body.classList.toggle("scroll-hidden");
    menuOverl.classList.toggle("open");
  });

  menuOverl.addEventListener("click", menuClose);

  function menuClose() {
    menuItemsRemoveDelay(menu);
    menuToggle.classList.remove("open");
    menu.classList.remove("open");
    document.body.classList.remove("scroll-hidden");
    menuOverl.classList.remove("open");
  }
}

