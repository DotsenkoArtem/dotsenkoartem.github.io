"use strict";

var starsContainer = document.querySelector('.stars');
var stars = starsContainer.querySelectorAll('.star');

var _loop = function _loop(i) {
  var star = stars[i];
  var starPos = i + 1;
  star.addEventListener('click', function () {
    for (var j = 0; j < stars.length; j++) {
      stars[j].classList.remove('selected');
    }

    for (var k = 0; k < starPos; k++) {
      stars[k].classList.add('selected');
    }
  });
};

for (var i = 0; i < stars.length; i++) {
  _loop(i);
}