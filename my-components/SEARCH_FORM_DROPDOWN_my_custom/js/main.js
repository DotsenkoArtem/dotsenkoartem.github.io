    "use strict";
    // ==========NAV SCRIPT==========
    function navToggle() {
        let menu = document.getElementById("menu");
        if (menu.className === "nav") {
            menu.className += " responsive";
        } else {
            menu.className = "nav";
        }

        let menuToggleItem = document.getElementsByClassName("nav-toggle__item");
        for (let i = 0; i < menuToggleItem.length; i++) {
            if (menuToggleItem[i].className === "nav-toggle__item") {
                menuToggleItem[i].className += " responsive";
            } else {
                menuToggleItem[i].className = "nav-toggle__item";
            }
        }
    }

    // ==========SEARCH-FORM==========
    // let search = document.querySelector(".nav-search");

    // search.addEventListener('click', function (e) {
    //   e.stopPropagation();
    //   this.classList.add('search-active');
    // })

    const body = document.querySelector('body');


    let navSearch = document.querySelector(".nav-search");
    let btnSearch = document.querySelector(".btn-search");
    let navSearchImg = document.querySelector(".nav-search__img");
    
    navSearchImg.addEventListener("click", function () {
            navSearch.classList.add('search-active');
    });
    btnSearch.addEventListener("click", function () {
            navSearch.classList.remove('search-active');
    });
    navSearch.addEventListener('click', (e)=>{
        e.stopPropagation();
        body.addEventListener('click', ()=>{
            navSearch.classList.remove('search-active');
        })
    })