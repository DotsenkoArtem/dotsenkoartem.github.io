window.addEventListener('load', function () {
  let order;


  checkStars()


  $('[type="tel"]:not(.enter-code-form [type="tel"])').inputmask({"mask": "+7 (999) 999-9999"});







  document.forms['contact-director-form'].addEventListener('submit', function(e) {
    e.preventDefault()
    if(this.cdFormAgree.checked) {
      changeScreen (this, lowRateAlert)
    } else alert("Необходимо принять условия пользовательского соглашения.")
  })


  document.forms['share-review-form'].addEventListener('submit', function(e) {
    e.preventDefault()
    if(this.shrFormAgree.checked) {
      changeScreen (this, selectLogin)
    } else alert("Необходимо принять условия пользовательского соглашения.")
  })


  document.forms['login-email-form'].querySelector('.login-email-form-submit').addEventListener('click', function(e) {
    e.preventDefault()
    changeScreen (this, enterCode)
    // alert("Таймер")
    setTimer(0, 10);
  })



  // Code Form
  const codeForm = document.forms['enter-code-form']
  const codeInputs = codeForm.querySelectorAll('.enter-code-form-input')
  codeInputs.forEach(input => {
    input.addEventListener('input', ()=>{
      if(
        input.value !== '0' &&
        input.value !== '1' &&
        input.value !== '2' &&
        input.value !== '3' &&
        input.value !== '4' &&
        input.value !== '5' &&
        input.value !== '6' &&
        input.value !== '7' &&
        input.value !== '8' &&
        input.value !== '9' 
        ) {
        input.value = ''
      } else {
        if(input.closest('label').nextElementSibling) {
          input.closest('label').nextElementSibling.querySelector('.enter-code-form-input').focus()
        } else{
          // Отправить форму, затем сменить экран на #successAlert
          changeScreen (input, successAlert)
        }
      }
      
    })
  })


  codeInputs.forEach(input => {
    input.addEventListener('keyup', (e)=>{

      if(e.code === 'Backspace') {
        input.value = ''
        if(input.closest('label').previousElementSibling) {
          input.closest('label').previousElementSibling.querySelector('.enter-code-form-input').focus()
        }
      }
    })
  })

})

function checkStars () {
  const stars = document.querySelectorAll('.js-select-rate')
  stars.forEach(elem => {
    elem.addEventListener('click', function () {
      order = elem.dataset.starOrder

      for(let i = 0; i < stars.length; i++) {
        if(stars[i].dataset.starOrder <= order) {
          stars[i].classList.add('is-active')
        } else {
          stars[i].classList.remove('is-active')
        }
      }

      let shareStars = document.querySelectorAll('.share-review-star')
      for(let j = 0; j < order; j++) {
        shareStars[j].classList.add('is-active')
      }



      setTimeout(function() {
        if(elem.dataset.starOrder <= 3) {
          changeScreen(elem, contactDirector)
        } else {
          changeScreen(elem, hignRate)
        }
      }, 1000)


    })
  })
}

function changeScreen (currentScreen, targetSreen) {
  currentScreen.closest('.estimation-screen').classList.add('screen-hidden')
  targetSreen.classList.remove('screen-hidden')
}




// TIMER
function setTimer(startMinutes, startSeconds) {
  localStorage.clear()
  // Высчитали время таймера
  let timerStartValue =
    (startMinutes * 60 + startSeconds) * 1000;

  // let timerTmpStartValue = parseInt(
  //   window.localStorage.getItem("timerTmpStartValue")
  // );

  // Очистка хранилища при изменении диапазона таймера
  // if (timerTmpStartValue && timerTmpStartValue !== timerStartValue) {
  //   localStorage.clear();
  // }

  // window.localStorage.setItem("timerTmpStartValue", timerStartValue);

  // Таймстамп-окончание таймера
  let timerStopStamp = new Date().getTime() + timerStartValue;

  let finishTimer = parseInt(localStorage.getItem("timerEnd"));
  if (finishTimer) {
    timerStopStamp = finishTimer;
  }
  const minutes = document.querySelector(".js-code-timeout-min");
  const seconds = document.querySelector(".js-code-timeout-sec");

  // function updateTimer() {
  let timerId = setTimeout(function updateTimer() {
    // timerLamp.classList.toggle("turned-off");
    // Текущий timestamp
    let currentTime = new Date().getTime();

    // Возобновление счетчика
    if (timerStopStamp <= currentTime) {
      // Возобновление счетчика
      // timerStopStamp = currentTime + timerStartValue
      // Счетчик по нулям в конце
      // timerStopStamp = currentTime

      clearTimeout(timerId);
      document.querySelector('.js-code-timeout-btn').removeAttribute('disabled')

      document.querySelector('.js-code-timeout-row').setAttribute('hidden', '')
    } else {
      // Текущий таймстамп-остаток таймера
      let timerCurrentValue = timerStopStamp - currentTime;

      // Получение значений таймера
      let timerCurrentMinutes = new Date(timerCurrentValue).getUTCMinutes();
      let timerCurrentSeconds = new Date(timerCurrentValue).getUTCSeconds();

      // Вставка значений с добавлением нуля
      // hours.innerHTML = `${setZero(timerCurrentHours)}`;
      minutes.innerHTML = `${setZero(timerCurrentMinutes)}`;
      seconds.innerHTML = `${setZero(timerCurrentSeconds)}`;

      document.querySelector('.js-code-timeout-row').removeAttribute('hidden', '')

      // Запись в LocalStorage
      window.localStorage.setItem("timerEnd", timerStopStamp);

      timerId = setTimeout(updateTimer, 1000);
    }


  }, 0);



   

  // }

  function setZero(val) {
    return val < 10 ? `0${val}` : `${val}`;
  }



  // updateTimer();
}
document.querySelector('.js-code-timeout-btn').addEventListener('click', function() {
    
  this.setAttribute('disabled', '')
  // alert("Таймер по кнопке")
  setTimer(0, 10);
})





window.addEventListener('load', ()=>{
  // document.querySelectorAll('.estimation-screen').forEach(screen => screen.style.display = `none`)
  // enterCode.style.display = `block`
})