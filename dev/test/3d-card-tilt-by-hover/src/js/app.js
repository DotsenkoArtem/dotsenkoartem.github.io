"use strict";

console.log(scrollY);

const cards3D = document.querySelectorAll(".card-wrapper");
for (let cardWrapper of cards3D) {
  // let cardWrapper = document.querySelector(".card-wrapper");
  let card = cardWrapper.querySelector(".card");
  let cardCoords = cardWrapper.getBoundingClientRect();
  console.log(cardCoords);
  let cardCenter = {
    x: cardCoords.right - cardCoords.width / 2,
    y: cardCoords.bottom + scrollY - cardCoords.height / 2,
  };

  const cardTransform = {
    x: 0,
    y: 0,
    z: 0,
    angle: 90,
  };

  const maxHypotenuse = Math.sqrt(
    (cardCoords.width / 2) ** 2 + (cardCoords.height / 2) ** 2
  );

  cardWrapper.addEventListener("mouseover", function () {
    let timerID = setTimeout(() => {
      card.style.transition = "transform 0s";
    }, 300);

    cardWrapper.addEventListener("mouseleave", function () {
      clearTimeout(timerID);
      card.style.transition = "transform .3s";
      card.style.transform = "";
    });
  });

  cardWrapper.addEventListener("mousemove", function (e) {
    let cardCenterOffsetX = e.pageX - cardCenter.x;
    let cardCenterOffsetY = e.pageY - cardCenter.y;
    // let cardCenterOffsetX = e.clientX - cardCenter.x;
    // let cardCenterOffsetY = e.clientY - cardCenter.y;

    card.style.transform = `rotate3d(${
      -cardCenterOffsetY / (cardCoords.height / 2)
    }, ${cardCenterOffsetX / (cardCoords.width / 2)}, 0, ${(
      (Math.sqrt(cardCenterOffsetX ** 2 + cardCenterOffsetY ** 2) /
        maxHypotenuse) *
      45
    ).toFixed(2)}deg)`;
  });

  // cardWrapper.addEventListener("mouseleave", function () {
  //   setTimeout(() => {
  //     card.style.transition = "transform .3s";
  //   }, 10);
  //   card.style.transform = "";
  // });
}
