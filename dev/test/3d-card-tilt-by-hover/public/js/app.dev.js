"use strict";

var cards3D = document.querySelectorAll(".card");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var card = _step.value;
    var cardInner = card.querySelector(".card__inner");
    var cardCoords = card.getBoundingClientRect();
    var cardCenter = {
      x: cardCoords.right - cardCoords.width / 2,
      y: cardCoords.bottom + scrollY - cardCoords.height / 2
    };
    card.fixed = false;
    var maxHypotenuse = Math.sqrt(Math.pow(cardCoords.width / 2, 2) + Math.pow(cardCoords.height / 2, 2));
    var timerID = null;
    var cardCurrentTransform = null;
    card.addEventListener("mouseover", function () {
      timerID = setTimeout(function () {
        cardInner.style.transition = "transform 0s";
      }, 300);
    });
    card.addEventListener("click", function (e) {
      if (card.fixed == false) {
        card.fixed = true;
      } else {
        card.fixed = false;
        cardInner.style.transition = "transform .3s";
        calcCardTransform(e);
      }
    });
    card.addEventListener("mousemove", function (e) {
      if (card.fixed == false) {
        calcCardTransform(e);
      }
    });
    card.addEventListener("mouseleave", function () {
      if (card.fixed == false) {
        clearTimeout(timerID);
        cardInner.style.transition = "transform .3s";
        cardInner.style.transform = "";
      }
    }); // Functions

    function calcCardTransform(e) {
      var cardCenterOffsetX = e.pageX - cardCenter.x;
      var cardCenterOffsetY = e.pageY - cardCenter.y;
      cardCurrentTransform = "rotate3d(".concat(-cardCenterOffsetY / (cardCoords.height / 2), ", ").concat(cardCenterOffsetX / (cardCoords.width / 2), ", 0, ").concat((Math.sqrt(Math.pow(cardCenterOffsetX, 2) + Math.pow(cardCenterOffsetY, 2)) / maxHypotenuse * 45).toFixed(2), "deg)");
      cardInner.style.transform = cardCurrentTransform;
    }
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