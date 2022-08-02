"use strict";

console.log(scrollY);
var cards3D = document.querySelectorAll(".card-wrapper");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var cardWrapper = _step.value;
    // let cardWrapper = document.querySelector(".card-wrapper");
    var card = cardWrapper.querySelector(".card");
    var cardCoords = cardWrapper.getBoundingClientRect();
    console.log(cardCoords);
    var cardCenter = {
      x: cardCoords.right - cardCoords.width / 2,
      y: cardCoords.bottom + scrollY - cardCoords.height / 2
    };
    var cardTransform = {
      x: 0,
      y: 0,
      z: 0,
      angle: 90
    };
    var maxHypotenuse = Math.sqrt(Math.pow(cardCoords.width / 2, 2) + Math.pow(cardCoords.height / 2, 2));
    cardWrapper.addEventListener("mouseover", function () {
      var timerID = setTimeout(function () {
        card.style.transition = "transform 0s";
      }, 300);
      cardWrapper.addEventListener("mouseleave", function () {
        clearTimeout(timerID);
        card.style.transition = "transform .3s";
        card.style.transform = "";
      });
    });
    cardWrapper.addEventListener("mousemove", function (e) {
      var cardCenterOffsetX = e.pageX - cardCenter.x;
      var cardCenterOffsetY = e.pageY - cardCenter.y; // let cardCenterOffsetX = e.clientX - cardCenter.x;
      // let cardCenterOffsetY = e.clientY - cardCenter.y;

      card.style.transform = "rotate3d(".concat(-cardCenterOffsetY / (cardCoords.height / 2), ", ").concat(cardCenterOffsetX / (cardCoords.width / 2), ", 0, ").concat((Math.sqrt(Math.pow(cardCenterOffsetX, 2) + Math.pow(cardCenterOffsetY, 2)) / maxHypotenuse * 45).toFixed(2), "deg)");
    }); // cardWrapper.addEventListener("mouseleave", function () {
    //   setTimeout(() => {
    //     card.style.transition = "transform .3s";
    //   }, 10);
    //   card.style.transform = "";
    // });
  };

  for (var _iterator = cards3D[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}