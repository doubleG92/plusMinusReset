const btnPlus = document.getElementById("btn1")
const btnMinus = document.getElementById("btn2")
const nmb = document.getElementById("num")
const reset = document.querySelector('.reset')




number = 0
function handleClick() {
  number++
  nmb.innerText = number
}

btnPlus.addEventListener('click', handleClick)

function handleClickMinus() {
  number--
  nmb.innerText = number
}

btnMinus.addEventListener('click', handleClickMinus)

function resetTheNumber() {
    nmb.innerText = 0
}

reset.addEventListener('click', resetTheNumber)