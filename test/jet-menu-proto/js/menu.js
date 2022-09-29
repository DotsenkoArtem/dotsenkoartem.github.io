"use strict"

let windowWidth;
let menuPositionX = 0;

const menuTrigger = document.querySelector(".burger-icon-wrapper");
const menu = document.querySelector(".top-nav");
const menuOverl = document.querySelector(".top-nav-overl");
const navBarBreakPoint = 992;

document.addEventListener("DOMContentLoaded", () => {
  // initNavBar(menu);
  
  addMenuItem();
  navBarHandle(menuTrigger, menu, menuOverl);
  changeMenuLevel();
});


function createSocialMob(){
  const social = document.querySelector('.social');
  const socialMob = document.createElement('ul');
  socialMob.className = 'social_mob sub-menu';
  

  let enableScrollSubmenu = document.createElement('div');
  enableScrollSubmenu.className = 'enable-scroll-submenu';

  let backBtn = document.createElement("li");
  backBtn.className = "top-menu-item back-btn";
  backBtn.innerHTML = '<div class="back-btn__arrow"></div><span>Назад</span>';

  enableScrollSubmenu.innerHTML = social.innerHTML;
  // enableScrollSubmenu.prepend(backBtn);

  socialMob.prepend(enableScrollSubmenu);
  // socialMob.prepend(backBtn);
  menu.prepend(backBtn);
  return socialMob.outerHTML;
}

function addMenuItem(){
  let socSubmenu = createSocialMob();

  const topMenu = document.querySelector('.top-menu');
  let firstMenuItem = document.createElement('li');
  firstMenuItem.innerHTML = '<span class="top-menu-item-lbel">Социальные сети<div class="top-menu-item__angle item__angle"></div></span>';

  firstMenuItem.innerHTML += socSubmenu;
  firstMenuItem.className = 'top-menu-item top-menu-item-has-children d-mobile';

  topMenu.prepend(firstMenuItem);
  // console.log(socSubmenu);
}


// Открытие-закрытие мобильного навбара
function navBarHandle(menuTrigger, menu, menuOverl) {
  const items = menu.querySelectorAll(".menu > .menu-item");

  // let isDelay;

  // Функция добавления задержки анимации для пунктов меню 1 уровня - на мобильной версии
  // function menuItemsAddDelay(menu) {
  //   let delay = 0.2;
  //   for (let item of items) {
  //     delay += 0.06;
  //     item.style.transitionDelay = `${delay}s`;
  //   }
  //   isDelay = true;
  // }

  // Удаление задержки анимации для пунктов меню 1 уровня
  // function menuItemsRemoveDelay(menu) {
  //   for (let item of items) {
  //     item.style.transitionDelay = ``;
  //   }
  //   isDelay = false;
  // }

  menuTrigger.addEventListener("click", function () {
    // isDelay ? menuItemsRemoveDelay(menu) : menuItemsAddDelay(menu);
    // menuTrigger.classList.toggle("open");
    menu.classList.toggle("open");
    document.body.classList.toggle("scroll-hidden");
    menuOverl.classList.toggle("open");
  });

  menuOverl.addEventListener("click", menuClose);
  const topMenuCloseBtn = document.querySelector('.top-menu-close-wrap');
  topMenuCloseBtn.addEventListener("click", menuClose);

  function menuClose() {
    // menuItemsRemoveDelay(menu);
    // menuTrigger.classList.remove("open");
    menu.classList.remove("open");
    document.body.classList.remove("scroll-hidden");
    menuOverl.classList.remove("open");
  }
}


  // На мобильной версии - переход по подпунктам меню
  // changeMenuLevel();

  // Функция перехода по подпунктам меню - на мобильной версии
  let menuInner = menu.querySelector(".top-menu");
  function changeMenuLevel() {
    windowWidth = document.documentElement.clientWidth;
    let backBtn = menu.querySelector(".back-btn");
    console.log('backBtn: ', backBtn);

    for (let menuItemHasChildren of menuInner.querySelectorAll(
      ".top-menu-item-has-children"
    )) {
      
      let subMenu = menuItemHasChildren.querySelector(".sub-menu");
      // let backBtn = subMenu.querySelector(".back-btn");
      let itemAngle = menuItemHasChildren.querySelector(
        ".top-menu-item-lbel > .top-menu-item__angle"
      );

      // console.log('itemAngle: ',itemAngle);

      let levelDown = function () {
        subMenu.classList.add("current");
        menuPositionX -= 100;
        menuInner.style.transform = `translateX(${menuPositionX}%)`;
        backBtn.classList.add('shown');

      };
      let levelUp = function () {
        menuPositionX += 100;
        menuInner.style.transform = `translateX(${menuPositionX}%)`;
        subMenu.classList.remove("current");
        if(menuPositionX >= 0) {backBtn.classList.remove('shown')}
      };

      if (windowWidth < navBarBreakPoint) {
        itemAngle.onclick = levelDown;
        backBtn.onclick = levelUp;
      }

      
      // if (windowWidth >= navBarBreakPoint) {
      //   itemAngle.onclick = "";
      //   backBtn.onclick = "";
      //   menuPositionX = 0;
      //   menuInner.style.transform = ``;
      // }
    }
  }




console.log('Connected');