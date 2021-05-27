function myFunction() {
    let menu = document.getElementById("menu");
    if (menu.className === "menu") {
        menu.className += " responsive";
    } else {
        menu.className = "menu";
    }

    let menuToggleItem = document.getElementsByClassName("menu-toggle__item");
    for (let i = 0; i < menuToggleItem.length; i++) {
        if (menuToggleItem[i].className === "menu-toggle__item") {
            menuToggleItem[i].className += " responsive";
        } else {
            menuToggleItem[i].className = "menu-toggle__item";
        }
    }
}

// ========================MODAL======================
let modal = document.querySelector(".modal");
let modalOverlay = document.querySelector(".modal__overlay");
let modalContent = document.querySelector(".modal__content");
let closeButton = document.querySelectorAll(".modal-close");
let openButton = document.getElementsByClassName("modal-trigger");
let body = document.querySelector("body");
let formReset = document.querySelector("#modal__form");

for(let i = 0; i < openButton.length; i++) {
    openButton[i].addEventListener("click", function() {
        modal.className = "modal fadeIn";
        modalOverlay.className = "modal__overlay fadeIn";
        modalContent.className = "modal__content slideInRight";
        body.classList.add("scroll-hidden");
    });
}

for(let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", function() {
        modal.className = "modal fadeOut";
        modalOverlay.className = "modal__overlay fadeOut";
        modalContent.className = "modal__content slideOutLeft";
        body.classList.remove("scroll-hidden");
        formReset.reset();
    });
}




// ========================MODAL======================