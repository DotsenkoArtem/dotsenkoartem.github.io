"use strict"

let windowWidth;
let menuPositionX = 0;

const menuTrigger = document.querySelector(".burger-icon-wrapper");
const topNav = document.querySelector(".top-nav");
const menuOverl = document.querySelector(".top-nav-overl");
const navBarBreakPoint = 992;

document.addEventListener("DOMContentLoaded", () => {
  addMenuItem();
  navBarHandle(menuTrigger, topNav, menuOverl);
  changeMenuLevel();
});


function createSocialMob(){
  const social = document.querySelector('.social');
  const socialMob = document.createElement('ul');
  socialMob.className = 'social_mob sub-menu';

  const enableScrollSubmenu = document.createElement('div');
  enableScrollSubmenu.className = 'enable-scroll-submenu';

  const backBtn = document.createElement("li");
  backBtn.className = "top-menu-item back-btn";
  backBtn.innerHTML = '<div class="back-btn__arrow"></div><span>Назад</span>';

  enableScrollSubmenu.innerHTML = social.innerHTML;

  convertSocialMobId(enableScrollSubmenu);

  function convertSocialMobId(socialMob){
    const itemsLi = Array.from(socialMob.children).filter(item => item.localName == 'li');
    for(let itemLi of itemsLi) {
      const dsLink = itemLi.querySelector('.ds_link');
      const dropSidebar = itemLi.querySelector('.drop_sidebar');
      dsLink.id += '-mob'; 
      dropSidebar.id = dsLink.id + '_ul';
    }
  }

  socialMob.prepend(enableScrollSubmenu);
  topNav.prepend(backBtn);
  return socialMob.outerHTML;
}

function addMenuItem(){
  const socSubmenu = createSocialMob();

  const topMenu = document.querySelector('.top-menu');
  const firstMenuItem = document.createElement('li');
  firstMenuItem.innerHTML = '<span class="top-menu-item-lbel">Социальные сети<div class="top-menu-item__angle item__angle"></div></span>';
  firstMenuItem.innerHTML += socSubmenu;
  firstMenuItem.className = 'top-menu-item top-menu-item-has-children d-mobile';

  topMenu.prepend(firstMenuItem);
}


// Открытие-закрытие мобильного навбара
function navBarHandle(menuTrigger, menu, menuOverl) {

  menuTrigger.addEventListener("click", function () {
    menu.classList.toggle("open");
    document.body.classList.toggle("scroll-hidden");
    menuOverl.classList.toggle("open");
  });

  menuOverl.addEventListener("click", menuClose);
  const topMenuCloseBtn = document.querySelector('.top-menu-close-wrap');
  topMenuCloseBtn.addEventListener("click", menuClose);

  function menuClose() {
    topNav.classList.remove("open");
    document.body.classList.remove("scroll-hidden");
    menuOverl.classList.remove("open");
  }
}

  // Переход по уровням меню
  let menuInner = topNav.querySelector(".top-menu");
  function changeMenuLevel() {
    windowWidth = document.documentElement.clientWidth;
    let backBtn = topNav.querySelector(".back-btn");

    for (let menuItemHasChildren of menuInner.querySelectorAll(
      ".top-menu-item-has-children"
    )) {
      
      let subMenu = menuItemHasChildren.querySelector(".sub-menu");
      let itemAngle = menuItemHasChildren.querySelector(
        ".top-menu-item-lbel > .top-menu-item__angle"
      );

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
    }
  }