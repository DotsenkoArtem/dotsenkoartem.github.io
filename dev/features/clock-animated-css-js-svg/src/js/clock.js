const hoursOutput = document.querySelector("[data-dateUnit='hours']"),
  hoursValue = hoursOutput.querySelector(".time-value"),
  hoursLabel = hoursOutput.querySelector(".time-label"),
  minutesOutput = document.querySelector("[data-dateUnit='minutes']"),
  minutesValue = minutesOutput.querySelector(".time-value"),
  minutesLabel = minutesOutput.querySelector(".time-label"),
  secondsOutput = document.querySelector("[data-dateUnit='seconds']"),
  secondsValue = secondsOutput.querySelector(".time-value"),
  secondsLabel = secondsOutput.querySelector(".time-label"),
  ampmOutput = document.querySelector("[data-dateUnit='ampm']");

const SECANIMDURATION = 250,
  MINANIMDURATION = 400,
  HOURANIMDURATION = 800;

let prevSecTS = Date.now(),
  nextSecTS = 0;
let hTmp, mTmp, sTmp;

const TIMEOUT = 20;

setTimeout(function tikTak() {
  setTime(hoursOutput, minutesOutput, secondsOutput);
  setTimeout(tikTak, TIMEOUT);
}, TIMEOUT);

function setTime(hoursOutput, minutesOutput, secondsOutput) {
  const date = new Date(),
    timeStamp = date.getTime(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ms = date.getMilliseconds(),
    am = h > 12 ? "PM" : "AM";

  // Set seconds value & label
  if (sTmp != s) {
    // prevSecTS = timeStamp;
    // nextSecTS = prevSecTS + 1000 - SECANIMDURATION;
    // !!! МОЖНО ВЫНЕСТИ ВСЕ В ОТДЕЛЬНУЮ ФУНКЦИЮ ЧЕРЕЗ RETURN !!!
    sTmp = cekkTmp(sTmp, s);
    console.log(sTmp);
    // ВОТ ТАК ТО !!!
    // ----------------------------------------------
    secondsValue.innerHTML = `<div style = "animation: slideInTop ${SECANIMDURATION}ms linear forwards">${addZero(
      s
    )}</div>`;

    secondsLabel.innerHTML = setTimeLabel("sec", s);
  }

  // let secRemnant = nextSecTS - timeStamp;
  let secRemnant = 1000 - (Date.now() % 1000);

  if (
    secRemnant < SECANIMDURATION + TIMEOUT / 2 &&
    secRemnant >= SECANIMDURATION - TIMEOUT / 2
  ) {
    secondsValue.innerHTML = `<div style = "animation: slideOutBottom ${SECANIMDURATION}ms linear forwards">${addZero(
      s
    )}</div>`;
  }
  // ----------------------------------------------

  // Set minutes value & label

  if (mTmp != m) {
    // !!! МОЖНО ВЫНЕСТИ ВСЕ В ОТДЕЛЬНУЮ ФУНКЦИЮ ЧЕРЕЗ RETURN !!!
    mTmp = cekkTmp(mTmp, m);
    console.log(mTmp);
    // ВОТ ТАК ТО !!!
    // ----------------------------------------------

    minutesValue.innerHTML = `<div style = "animation: slideInTop ${MINANIMDURATION}ms linear forwards">${addZero(
      m
    )}</div>`;
    minutesLabel.innerHTML = setTimeLabel("min", m);
  }

  let minRemnant = 60000 - (Date.now() % 60000);
  // console.log(minRemnant);
  if (
    minRemnant < MINANIMDURATION + TIMEOUT / 2 &&
    minRemnant >= MINANIMDURATION - TIMEOUT / 2
  ) {
    minutesValue.innerHTML = `<div style = "animation: slideOutBottom ${MINANIMDURATION}ms linear forwards">${addZero(
      m
    )}</div>`;
  }
  // ----------------------------------------------

  // Set hours value & label
  // Перерисовка только при изменении значений
  if (hTmp != h) {
    hTmp = h;
    // Значения единицы времени
    hoursValue.innerHTML = `<div style = "animation: slideInTop ${HOURANIMDURATION}ms linear forwards">${addZero(
      toAmpm(h)
    )}</div>`;
    // Лэйбла единицы времени
    hoursLabel.innerHTML = checkHourLabel(toAmpm(h));
  }
  //
  let hrRemnant = 3600000 - (Date.now() % 3600000);
  if (
    hrRemnant < HOURANIMDURATION + TIMEOUT / 2 &&
    hrRemnant >= HOURANIMDURATION - TIMEOUT / 2
  ) {
    hoursValue.innerHTML = `<div style = "animation: slideOutBottom ${HOURANIMDURATION}ms linear forwards">${addZero(
      toAmpm(h)
    )}</div>`;
  }
  // ----------------------------------------------

  // Set AMPM value
  ampmOutput.innerHTML = am;

  // Set progress line
  setDashArray(h, hh, hhDot, toAmpm(h), 12);
  setDashArray(m, mm, mmDot, m + s / 60 + ms / 60000, 60);
  setDashArray(s, ss, ssDot, s + ms / 1000, 60);
}

function checkHourLabel(value) {
  if (value == 1) return "час";
  else if (value == 2 || value == 3 || value == 4) return "часа";
  return "часов";
}

function setTimeLabel(timeUnit, value) {
  if (timeUnit == "sec") timeUnit = "секунд";
  if (timeUnit == "min") timeUnit = "минут";

  if (value == 1 || value == 21 || value == 31 || value == 41 || value == 51)
    return `${timeUnit}а`;
  else if (
    value == 2 ||
    value == 3 ||
    value == 4 ||
    value == 22 ||
    value == 23 ||
    value == 24 ||
    value == 32 ||
    value == 33 ||
    value == 34 ||
    value == 42 ||
    value == 43 ||
    value == 44 ||
    value == 52 ||
    value == 53 ||
    value == 54
  )
    return `${timeUnit}ы`;
  return `${timeUnit}`;
}

function toAmpm(hours) {
  return hours % 12;
}

function addZero(digit) {
  return digit < 10 ? `0${digit}` : digit;
}

function setTimeValueLabel() {}

function setDashArray(timeValue, el, dot, timeValueInMilisec, timeRange) {
  // Задание transition: 0 при обновлении круга
  // При "плавности рывками" - в css - .progress-dot{transition}
  // if (timeValue == 0) {
  //   dot.style.transition = "0s";
  //   el.style.transition = "0s";
  // } else {
  //   dot.style.transition = "";
  //   el.style.transition = "";
  // }
  el.style.strokeDashoffset = 440 - (440 * timeValueInMilisec) / timeRange;
  dot.style.transform = `rotate(${(timeValueInMilisec / timeRange) * 360}deg)`;
}

// !!! ВОТ ОНА !!!
function cekkTmp(timeTmp, time) {
  if (timeTmp != time) {
    console.log([timeTmp, time]);
    timeTmp = time;
    console.log([timeTmp, time]);
  }
  return timeTmp;
}
