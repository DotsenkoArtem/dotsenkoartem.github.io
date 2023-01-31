const cardsBlock = document.querySelector('.cards-block')
const cards = document.querySelectorAll('.card')
let filtered = Array.from(cards).filter(item => item.id % 5 == 0)


filterOpacity.onclick = function(){
  filtered.forEach(item => {
    item.classList.toggle('card_transparent')
  })
}


let flag = true
filterAppend.onclick = function(){
  // Добавляю веем вставляемым элементам анимацию
  cardsBlock.querySelectorAll('.card').forEach(item => item.classList.add('fade-in'))
  if(flag) {
    appendItems (cardsBlock, filtered, 10)
    flag = false
  } else {
    appendItems (cardsBlock, cards, 10)
    flag = true
  }
}

// Функция вставки элементов
function appendItems (parentElement, insertingElements, interval = 10, transitionDuration = 500) {
  let i = 0
  parentElement.innerHTML = null
  setInterval(function(){
    if(i < insertingElements.length){
      parentElement.append(cards[i])
      i++
    }
  },interval)

  // Убираю анимацию
  setTimeout(function(){
    cardsBlock.querySelectorAll('.card').forEach(item => item.classList.remove('fade-in'))
    // Количество элементов на интервал плюс задержка на анимацию
  }, insertingElements.length * interval + transitionDuration)
}