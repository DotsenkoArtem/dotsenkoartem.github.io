"use strict"

// window.onload = function (){

    // SLIDERS 
    // Expert-slider
    const expertSlider = new Swiper('.expert__slider', {
        loop: true,
        slidesPerView: 4,
        speed: 300,
        draggable: true,
        // spaceBetween: 20,
        // autoplay: {
        //     delay: 5000,
        // },
        navigation: {
        nextEl: '.swiper-button-next.expert__button.expert__button_next',
        prevEl: '.swiper-button-prev.expert__button.expert__button_prev',
        },
        pagination: {
            el: ".expert__pagination",
            type: "fraction",
          },
        // breakpoints: {
        //     992: {
        //         slidesPerView: "auto",
        //         centeredSlides: true,
        //     }
        // }
    });
// ------------------------------------------------


    // Client-slider
    const clientSlider = new Swiper('.client__slider', {
        loop: true,
        slidesPerView: 6,
        speed: 500,
        draggable: true,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "fraction",
        //   },
        // breakpoints: {
        //     992: {
        //         slidesPerView: "auto",
        //         centeredSlides: true,
        //     }
        // }
    });
// ------------------------------------------------
    // Advantages-slider
    //Swiper plugin initialization on window resize
    var advSwiper = undefined;
    function initSwiper() {
        // var screenWidth = $(window).width();
        var screenWidth = document.documentElement.clientWidth;
        const advSlideContainer = document.querySelector('.adv__slider-container');
        const advSlides = document.querySelectorAll('.adv-slide');

        // console.log(advSlides);
        if(screenWidth < 576 && advSwiper == undefined) {
            advSwiper = new Swiper('.adv__slider', {
                // direction: 'horizontal',
                loop: true,
                slidesPerView: 1,
                speed: 500,
                spaceBetween: 20,
                // autoplay: {
                //     delay: 5000,
                // },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    480: {
                        slidesPerView: "auto",
                        centeredSlides: true,
                        spaceBetween: 40,
                    },
                }
            });
        } else if (screenWidth >= 576 && advSwiper != undefined) {
            advSwiper.destroy();
            advSwiper = undefined;

            advSlideContainer.removeAttribute('style');
            for(let i = 0; i < advSlides.length; i++) {
                advSlides[i].removeAttribute('style');
            }
        }
    }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize
    // $(window).on('resize', function(){
    //     initSwiper();
    // });
    window.onresize = function(){
        initSwiper();
    };

// ------------------------------------------------
    // Reviews-slider
    const revSlider = new Swiper('.rev__slider ', {
        loop: true,
        slidesPerView: 5,
        speed: 500,
        draggable: true,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
        },


        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },


        // breakpoints: {
        //     992: {
        //         slidesPerView: "auto",
        //         centeredSlides: true,
        //     }
        // }
    });
// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// };

