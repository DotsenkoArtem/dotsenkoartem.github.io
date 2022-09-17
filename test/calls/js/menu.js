"use strict";

// ОБРАБОТКА МОБИЛЬНОГО МЕНЮ
let windowWidth;
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".top-nav");
const menuOverl = document.querySelector(".top-nav-overl");

const navBarBreakPoint = 768;

initNavBar(menu);
navBarHandle(menuToggle, menu, menuOverl);

window.onresize = function(){

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
      menuLevel++
      // - - - - - - - -
      for (let parentMenuItem of parentMenuItems) {
        
        let subMenu = parentMenuItem.querySelector(".sub-menu");

        subMenu.setAttribute("data-level", menuLevel);


        if (parentMenuItem.querySelector(".item__angle") === null) {
          let itemAngle = document.createElement("div");
          itemAngle.className = "menu-item__angle item__angle";

          subMenu.after(itemAngle);
        }

        if (subMenu.querySelector(".back-btn") === null) {
          let backBtn = document.createElement("li");
          backBtn.className = "menu-item back-btn";
          backBtn.innerHTML =
            '<div class="back-btn__arrow"></div><span>Назад</span>';

          subMenu.prepend(backBtn);
        }


        function correctSubMenuPosition (subMenu){
          let coords = subMenu.getBoundingClientRect();
          let subMenuRight = coords.right;
          let subMenusOffsetRight = windowWidth - subMenuRight;

          if(subMenusOffsetRight < 0) {
            if(menuLevel == 2) {
              subMenu.style.left = 'auto';
              subMenu.style.right = '0';
            } else{
              subMenu.style.left = 'auto';
              subMenu.style.right = '100%';
            }
            
          }
        }

        // Применяется только на десктопе
        if (windowWidth > navBarBreakPoint){
          correctSubMenuPosition (subMenu);
        }

        if (subMenu.querySelector(".menu-item-has-children")){
          setMenuControls(subMenu, menuLevel)
        }
      }
    }
  }

  setMenuControls(menuInner, menuLevel);

  if (windowWidth <= navBarBreakPoint) {


    let menuPositionX = 0;
    for (let itemAngle of menuInner.querySelectorAll(".menu-item__angle")) {
      let subMenu = itemAngle.previousElementSibling;
      itemAngle.addEventListener("click", function () {
        levelDown(subMenu);
      });

      let backBtn = subMenu.querySelector(".back-btn");
      backBtn.addEventListener("click", function () {
        levelUp(subMenu);
      });
    }

    function levelDown(subMenu) {
      subMenu.classList.add("current");
      menuPositionX -= 100;
      // console.log(menuPositionX);
      menuInner.style.transform = `translateX(${menuPositionX}%)`;
    }

    function levelUp(subMenu) {
      menuPositionX += 100;
      menuInner.style.transform = `translateX(${menuPositionX}%)`;
      subMenu.classList.remove("current");
    }
  }
}






function navBarHandle(menuToggle, menu, menuOverl) {


  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("open");
    menu.classList.toggle("open");
    document.body.classList.toggle("scroll-hidden");
    menuOverl.classList.toggle("open");
  });

  menuOverl.addEventListener("click", menuClose);

  function menuClose() {
    menuToggle.classList.remove("open");
    menu.classList.remove("open");
    document.body.classList.remove("scroll-hidden");
    menuOverl.classList.remove("open");
  }
}
