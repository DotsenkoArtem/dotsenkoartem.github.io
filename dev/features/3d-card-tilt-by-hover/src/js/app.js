"use strict";

const cards3D = document.querySelectorAll(".card");

for (let card of cards3D) {
  const cardInner = card.querySelector(".card__inner");
  const cardCoords = card.getBoundingClientRect();
  const cardCenter = {
    x: cardCoords.right - cardCoords.width / 2,
    y: cardCoords.bottom + scrollY - cardCoords.height / 2,
  };

  card.fixed = false;
  const maxHypotenuse = Math.sqrt(
    (cardCoords.width / 2) ** 2 + (cardCoords.height / 2) ** 2
  );

  let timerID = null;
  let cardCurrentTransform = null;

  card.addEventListener("mouseover", function () {
    // Очищаю таймаут
    clearTimeout(timerID);
    // Задаю новый не постоянно, а только в случае transition не равному 0, чтобы не добавлять лишних
    if (cardInner.style.transition !== "transform 0s ease 0s") {
      timerID = setTimeout(() => {
        cardInner.style.transition = "transform 0s";
      }, 300);
    }
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
  });

  // Functions
  function calcCardTransform(e) {
    let cardCenterOffsetX = e.pageX - cardCenter.x;
    let cardCenterOffsetY = e.pageY - cardCenter.y;

    cardCurrentTransform = `rotate3d(${
      -cardCenterOffsetY / (cardCoords.height / 2)
    }, ${cardCenterOffsetX / (cardCoords.width / 2)}, 0, ${(
      (Math.sqrt(cardCenterOffsetX ** 2 + cardCenterOffsetY ** 2) /
        maxHypotenuse) *
      45
    ).toFixed(2)}deg)`;
    cardInner.style.transform = cardCurrentTransform;
  }
}
