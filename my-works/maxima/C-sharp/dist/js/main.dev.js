"use strict";

// MOBILE MENU SETTINGS
var menuToggle = document.querySelector('.menu-toggle'),
    navMob = document.querySelector('.nav-mob'),
    navMobOverl = document.querySelector('.nav-mob-overl');
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('open');
  navMob.classList.toggle('open');
  document.body.classList.toggle('scroll-hidden');
  navMobOverl.classList.toggle('open');
});
navMobOverl.addEventListener('click', menuClose);

function menuClose() {
  menuToggle.classList.remove('open');
  navMob.classList.remove('open');
  document.body.classList.remove('scroll-hidden');
  navMobOverl.classList.remove('open');
} //- - - - - - - - - - - - - - - - - - - - 
// MODAL HANDLING


var modalOverlay = document.querySelector(".modal__overlay"),
    closeButtons = document.querySelectorAll(".modal__close"),
    openButton = document.querySelector(".modal-trigger");
openButton.addEventListener("click", function () {
  openModalById('#modal');
});

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function () {
    closeModal('#modal');
  });
}

function openModalById(modalId) {
  var modal = document.querySelector(modalId);
  modal.classList.remove('closed');
  modal.classList.add('open');
  document.documentElement.classList.add('scroll-hidden');
}

function closeModal(modalId) {
  var modal = document.querySelector(modalId);
  modal.classList.remove('open');
  modal.classList.add('closed');
  document.documentElement.classList.remove('scroll-hidden');
} //- - - - - - - - - - - - - - - - - - - - 
// MODAL-SCROLL-BAR SETTINGS


document.addEventListener('DOMContentLoaded', function () {
  var popup = document.querySelector('.modal_program');
  var modal = document.querySelector('.modal-content_program');
  var sections = document.querySelectorAll('.modal-page');
  var wrapper = document.querySelector('.modal-body-table');
  var scroll = document.querySelector('.scroll');
  var thumb = document.querySelector('.scroll-thumb');
  var modalHeight = modal.offsetHeight;
  var sectionsCount = sections.length - 1;
  var thumbHeight = scroll.offsetHeight / sectionsCount;
  thumb.style.height = "".concat(thumbHeight, "px");
  var scrollRange = scroll.offsetHeight - thumbHeight;
  var scrollSegment = Math.floor(scrollRange / sectionsCount);
  var scrollSegments = Object.keys(sections).map(function (index) {
    return index * scrollSegment;
  });
  var activeIndex = 0;
  var offsetHeightSection = 0;
  var thumbTranslate = 0;
  var prevPosScroll = 42;
  var y = thumb.offsetTop;
  modal.addEventListener('wheel', handleWheel); // swipe(wrapper);

  function handleWheel(e) {
    e.preventDefault();

    if (e.deltaY > 0 && activeIndex !== sectionsCount) {
      ++activeIndex;
      scrollSections('down');
      moveThumb('down');
    }

    if (e.deltaY < 0 && activeIndex > 0) {
      --activeIndex;
      scrollSections('up');
      moveThumb('up');
    }
  }

  function scrollSections(dir) {
    if (dir === 'down') {
      offsetHeightSection += sections[activeIndex].offsetHeight;
    } else if (dir === 'up') {
      offsetHeightSection -= sections[activeIndex].offsetHeight;
    }

    wrapper.style.transform = "translateY(-".concat(offsetHeightSection, "px)");
  }

  function moveThumb(dir) {
    if (activeIndex === 0 && dir === 'up') {
      thumbTranslate = 0;
    } else if (dir === 'down') {
      thumbTranslate += scrollRange / sectionsCount;
    } else if (dir === 'up' && activeIndex !== 0) {
      thumbTranslate -= scrollRange / sectionsCount;
    }

    thumb.style.transform = "translateY(+".concat(thumbTranslate, "px)");
  }

  scroll.addEventListener('mousedown', function (start) {
    start.preventDefault();

    function onMove(end) {
      var delta = end.pageY - start.pageY;
      var posScroll = delta;

      if (posScroll - prevPosScroll >= 24 && posScroll > prevPosScroll && activeIndex !== sectionsCount) {
        ++activeIndex;
        scrollSections('down');
        moveThumb('down');
        prevPosScroll = posScroll;
        return;
      } else if (prevPosScroll - posScroll >= 36 && posScroll <= prevPosScroll && activeIndex !== 0) {
        --activeIndex;
        scrollSections('up');
        moveThumb('up');
        prevPosScroll = posScroll;
      }
    }

    ;
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', onMove);
    });
  });
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return evt.touches || // browser API
    evt.originalEvent.touches; // jQuery
  }

  function handleTouchStart(evt) {
    var firstTouch = getTouches(evt)[0];

    if (popup.classList.contains('open')) {
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }
  }

  ;

  function handleTouchMove(evt) {
    if (popup.classList.contains('open')) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;
      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          /* left swipe */
        } else {
            /* right swipe */
          }
      } else {
        if (yDiff > 0 && activeIndex !== sectionsCount) {
          /* up swipe */
          ++activeIndex;
          scrollSections('down');
          moveThumb('down');
        } else if (yDiff < 0 && activeIndex !== 0) {
          /* down swipe */
          --activeIndex;
          scrollSections('up');
          moveThumb('up');
        }
      }
      /* reset values */


      xDown = null;
      yDown = null;
    }
  }

  ;
}); //- - - - - - - - - - - - - - - - - - - -