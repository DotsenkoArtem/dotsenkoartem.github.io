// ============TOP-MENU-MOBILE==========================
let body = document.querySelector("body");
let overlay = document.querySelector(".overlay");
function navToggle() {
    let topMenu = document.getElementsByClassName("top-menu");
    for (let i = 0; i < topMenu.length; i++){
        if (topMenu[i].className === "top-menu") {
            topMenu[i].className += " responsive";
            overlay.classList.add("responsive");
        } else {
            topMenu[i].className = "top-menu";
            overlay.classList.remove("responsive");
        }
    }
    let topMenuToggleItem = document.getElementsByClassName("top-menu-toggle__item");
    for (let i = 0; i < topMenuToggleItem.length; i++) {
        if (topMenuToggleItem[i].className === "top-menu-toggle__item") {
            topMenuToggleItem[i].className += " responsive";
            body.classList.add("scroll-hidden");

        } else {
            topMenuToggleItem[i].className = "top-menu-toggle__item";
            body.classList.remove("scroll-hidden");
        }
    }
}